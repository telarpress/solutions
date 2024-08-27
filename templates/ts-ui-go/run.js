import path from 'node:path'
import { checkGoFiberInstallation, checkGoInstallation } from './helpers.js'

const serviceName = 'ts-ui-go'
async function run({config, rootPath, projectPath}, tBus) {
if (await checkGoInstallation() === false) {
    console.error('Golang is not installed.')
    return
}
if (await checkGoFiberInstallation() === false) {
    console.error('Go Fiber CLI is not installed.')
    tBus.reject('Go Fiber CLI is not installed.')
    return
}
  process.env["TELAR_ENV"] = "dev";
  const port = config.port || 4000
  await fiberDev(path.join(projectPath, 'telar-social-go'),port,tBus)
  
  
 tBus.resolve({  serviceName, log: "" });

}

async function fiberDev(targetPath,port, tBus) {
    return new Promise(async(resolve, reject) => {
        const worker = await tBus.exec(`fiber dev -a="-port=:${port}"`, {cwd: targetPath})
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