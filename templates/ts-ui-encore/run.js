const { setEnvValue, writeFileAsync, readFileAsync } = require('./helpers')
const path = require('node:path')
const { exec } = require('node:child_process')

/**
 * A handler for income message from Telar CLI
 * @param {*} action
 */
async function processMessageHandler(action) {
    switch (action.type) {
        case 'service':
            service(action.payload, action.meta)
            break
        case 'run':
            await run(action.payload, action.meta)
            break

        default:
            break
    }
    if (action.__id && process.send) {
        process.send({ type: 'resolved', __id: action.__id })
    }
}
/**
 * Listen to Telar CLI command
 */
// @ts-ignore
process.on('message', processMessageHandler)

process.on('SIGTERM', () => {
    if (process.send) {
        process.send({
            type: 'close',
        })
    }
})

/**
 * Run solution
 */
function run(payload, meta) {
    return new Promise((resolve) => {
        const { rootPath } = meta

        console.log('Start running solution in ' + rootPath)
        // run telar-social-encore
        execProject('encore run', rootPath, 'telar-social-encore')

        // run ts-ui
        execProject('npm start', rootPath, 'ts-ui')
        resolve(null)
    })
}

/**
 *
 * @param {string} cmd execute command to run project
 * @param {*} rootPath parent project root directory
 * @param {*} projectName project name
 */
function execProject(cmd, rootPath, projectName) {
    const childProcess = exec(
        cmd,
        {
            cwd: path.join(rootPath, projectName),
        },
        (err, stdout, stderr) => {
            if (err) {
                console.log(err)
            } else if (stdout) {
                console.log(stdout)
            } else if (stderr) {
                console.error(stderr)
            }
        }
    )
    if (childProcess.stdout) {
        childProcess.stdout.on('data', (data) => {
            console.log(` [${projectName}] ${String(data)}`)
        })
    }

    childProcess.on('error', (err) => {
        console.error(
            ` [${projectName}] ${'\n\t\tERROR: spawn failed! (' + err + ')'}`
        )
    })

    if (childProcess.stderr) {
        childProcess.stderr.on('data', (data) => {
            console.error(` [${projectName}] [${String(data)}`)
        })
    }

    childProcess.on('exit', (code, signal) => {
        console.error(
            ` [${projectName}] exit with code ${code} and signal ${signal} `
        )
    })
}

/**
 * Listen to services
 */
async function service(payload, meta) {
    const { rootPath } = meta
    if (payload.serviceName === 'in-memory-mongo') {
        const { uri, instance } = payload
        await setEnvValue(
            path.join(rootPath, 'telar-social-encore', 'config', '.env'),
            'MongoHost',
            uri
        )
        const mongouiConfigPath = path.join(
            rootPath,
            'templates',
            'mongoui',
            'config.json'
        )
        const mongouiConfig = await readMongouiConfig(mongouiConfigPath)
        mongouiConfig.connectionList = [
            {
                uri: uri,
                name: instance.dbName,
            },
        ]
        writeMongouiConfig(
            mongouiConfigPath,
            JSON.stringify(mongouiConfig, null, 2)
        )
    }
    if (payload.serviceName === 'smtp') {
        const { port, host } = payload
        const devConfigPath = path.join(
            rootPath,
            'telar-social-encore',
            'config',
            'config.development.json'
        )
        const devConfig = require(devConfigPath)
        devConfig.environment.smtp_email = `${host}:${port}`
        await writeFileAsync(devConfigPath, JSON.stringify(devConfig, null, 2))
    }
    if (payload.serviceName === 'file-storage') {
        const { host } = payload
        const devConfigPath = path.join(
            rootPath,
            'telar-social-encore',
            'config',
            'config.development.json'
        )
        const devConfig = require(devConfigPath)
        devConfig.micros.storage.environment.proxy_balancer = host
        await writeFileAsync(devConfigPath, JSON.stringify(devConfig, null, 2))
    }
}

async function readMongouiConfig(path) {
    const configFile = await readFileAsync(path, { encoding: 'utf-8' })
    const config = JSON.parse(configFile)
    return config
}

function writeMongouiConfig(path, data) {
    return writeFileAsync(path, data)
}

module.exports = run
