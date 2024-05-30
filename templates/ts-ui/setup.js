import path from 'node:path'
import { setEnvValue } from './helpers.js'

const serviceName = 'ts-ui'
async function run({config, rootPath, projectPath}, tBus) {
  await yarnInstall(path.join(projectPath, 'ts-ui'),tBus)
  console.log('All node modules are installed.')
 // set ts-ui .env file
 const uiDevEnvPath = path.join(rootPath, '.env')
 const devTsUiEnv = config.environment
 const devTsUiEnvPromises = []
 Object.keys(devTsUiEnv).forEach((key) => {
     devTsUiEnvPromises.push(setEnvValue(uiDevEnvPath, key, devTsUiEnv[key]))
 })


 await Promise.all(devTsUiEnvPromises)
 tBus.resolve({  serviceName, log: "" });

}

async function yarnInstall(uiPath, tBus) {
    return new Promise(async(resolve, reject) => {
      console.log('YARN install in path ', uiPath)
        const worker = await tBus.exec('yarn install', {cwd: uiPath})
        worker.on('exit', (code, signal) => {
            if (Number(code) === 0 && signal === null) {
              resolve(code)
            } else {
              reject()
            }
          })
    })

}

function stop() {

}