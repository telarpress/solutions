const {
    readFileAsync,
    mergeDeep,
    setEnvValue,
    writeFileAsync,
    getRandomSecretKey,
    copyFileAsync,
} = require('./helpers')
const path = require('node:path')
const devConfig = require('./config.development.json')
const prodConfig = require('./config.production.json')

/**
 * A handler for income message from Telar CLI
 * @param {*} action
 */
async function processMessageHandler(action) {
    switch (action.type) {
        case 'setup':
            await setup(action.payload)
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
process.on('message', processMessageHandler)

/**
 * Setup solution
 * @param {*} config
 */
async function setup({ devConfigPath, prodConfigPath, rootPath }) {
    const telarManifest = {
        development: { services: {} },
        production: { services: {} },
    }

    // ----------------------------------------------------------
    // read development config file (config.development.json)
    const devConfigFile = await readFileAsync(devConfigPath, {
        encoding: 'utf-8',
    })
    const setupDevConfig = JSON.parse(devConfigFile)
    const mergedDevConfig = mergeDeep(devConfig, setupDevConfig)

    // write merged development config file (config.development.json)
    const socialDevConfigPath = path.join(
        rootPath,
        'telar-social-encore',
        'config',
        'config.development.json'
    )
    await writeFileAsync(
        socialDevConfigPath,
        JSON.stringify(
            mergedDevConfig.solutions['telar-social-encore'],
            null,
            2
        )
    )

    // ----------------------------------------------------------
    // read production config file (config.production.json)
    const prodConfigFile = await readFileAsync(prodConfigPath, {
        encoding: 'utf-8',
    })
    const setupProdConfig = JSON.parse(prodConfigFile)
    const mergedProdConfig = mergeDeep(prodConfig, setupProdConfig)

    // write merged production config file (config.production.json)
    const socialProdConfigPath = path.join(
        rootPath,
        'telar-social-encore',
        'config',
        'config.production.json'
    )
    await writeFileAsync(
        socialProdConfigPath,
        JSON.stringify(
            mergedProdConfig.solutions['telar-social-encore'],
            null,
            2
        )
    )

    // write telar manifest
    telarManifest.app = {
        status: 'inactive',
        title: 'Telar Social Engine',
        desc: 'This is a scalable cloud native social engine. Whatever your creative idea or unique bussiness model, you can build it by Telar running on any public or private cloud.',
    }
    let devSolutions = {}
    Object.keys(mergedDevConfig.solutions).forEach((key) => {
        const ports = mergedDevConfig.solutions[key].ports
        devSolutions = { ...devSolutions, [key]: {} }
        if (ports) {
            devSolutions[key].ports = ports
        }
    })
    telarManifest.development.solutions = devSolutions
    telarManifest.development.services = mergedDevConfig.services
    telarManifest.production.services = mergedProdConfig.services
    const telarManifestPath = path.join(rootPath, '.telar', 'manifest.json')
    await writeFileAsync(
        telarManifestPath,
        JSON.stringify(telarManifest, null, 2)
    )

    // ----------------------------------------------------------
    // generate payload secret and set in dev/production secret
    const solutionEnvPath = path.join(
        rootPath,
        'templates',
        'ts-ui-encore',
        '.env'
    )
    await setEnvValue(solutionEnvPath, 'PayloadSecret', getRandomSecretKey())

    // ----------------------------------------------------------
    // copy .env file to telar-social-encore
    const encoreEnvPath = path.join(
        rootPath,
        'telar-social-encore',
        'config',
        '.env'
    )
    await copyFileAsync(solutionEnvPath, encoreEnvPath)

    // ----------------------------------------------------------
    // set ts-ui .env file
    const uiDevEnvPath = path.join(rootPath, 'ts-ui', '.env')
    const devTsUiEnv = { ...mergedDevConfig.solutions['ts-ui'].environment }
    const devTsUiEnvPromises = []
    Object.keys(devTsUiEnv).forEach((key) => {
        devTsUiEnvPromises.push(setEnvValue(uiDevEnvPath, key, devTsUiEnv[key]))
    })

    await Promise.all(devTsUiEnvPromises)

    // set ts-ui .env.production file
    const uiProdEnvPath = path.join(rootPath, 'ts-ui', '.env.production')
    const prodTsUiEnv = { ...mergedProdConfig.solutions['ts-ui'].environment }
    const prodTsUiEnvPromises = []
    Object.keys(prodTsUiEnv).forEach((key) => {
        prodTsUiEnvPromises.push(
            setEnvValue(uiProdEnvPath, key, devTsUiEnv[key])
        )
    })

    await Promise.all(prodTsUiEnvPromises)

    // ----------------------------------------------------------
    log('setup finished')
}

function log(message) {
    if (process.send) {
        process.send({
            type: 'log',
            payload: { message: '[ts-ui-encore] ' + message },
        })
    }
}

module.exports = setup
