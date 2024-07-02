import path from 'node:path'
import { checkEncoreInstallation, checkGoInstallation, createEnvFile } from './helpers.js'

const serviceName = 'ts-ui-encore'
async function run({config, rootPath, projectPath}, tBus) {
if (await checkGoInstallation() === false) {
    console.error('Golang is not installed.')
    return
}
if (await checkEncoreInstallation() === false) {
    console.error('Encore is not installed.')
    tBus.reject('Encore is not installed.')
    return
}
  process.env["TELAR_ENV"] = "dev";
  await encoreRun(path.join(projectPath, 'telar-social-encore'),tBus)
  console.log('Running encore.')
  
 tBus.resolve({  serviceName, log: "" });

}

async function encoreRun(targetPath, tBus) {
    return new Promise(async(resolve, reject) => {
      console.log('encore run ', targetPath)
        const worker = await tBus.exec('encore run', {cwd: targetPath})
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