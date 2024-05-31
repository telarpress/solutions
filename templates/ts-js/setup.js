import path from 'node:path'
import { createFile, setEnvValue } from './helpers.js'

const serviceName = 'ts-js'
async function run({config, rootPath, projectPath}, tBus) {

  await npmInstall(path.join(projectPath, 'telar-web-js'),tBus)
  await npmInstall(path.join(projectPath, 'telar-social-js'),tBus)
  console.log('All node modules are installed.')
 // set .env file
 const devDotEnvPath = path.join(path.join(projectPath, 'telar-web-js'), '.env')
 await createFile(devDotEnvPath)
 const devDotEnv = config.environment
 const devDotEnvPromises = []
 Object.keys(devDotEnv).forEach((key) => {
     devDotEnvPromises.push(setEnvValue(devDotEnvPath, key, devDotEnv[key]))
 })


 await Promise.all(devDotEnvPromises)
 tBus.resolve({  serviceName, log: "" });

}

async function npmInstall(uiPath, tBus) {
    return new Promise(async(resolve, reject) => {
      console.log('npm install in path ', uiPath)
        const worker = await tBus.exec('npm install', {cwd: uiPath})
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