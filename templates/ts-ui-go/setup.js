import path from 'node:path'
import { checkGoFiberInstallation, checkGoInstallation, createEnvFile } from './helpers.js'

const serviceName = 'ts-ui-go'
async function run({config, rootPath, projectPath}, tBus) {
if (await checkGoInstallation() === false) {
    console.error('Golang is not installed.')
    return
}
if (await checkGoFiberInstallation() === false) {
    console.error('Go Fiber CLI is not installed. Checkout `https://github.com/gofiber/cli` to install it.')
    tBus.reject('Go Fiber CLI is not installed.')
    return
}

 // set .env file
 const devDotEnvPath = path.join(path.join(projectPath, 'telar-social-go', 'config'), '.env')
 await createEnvFile(config.environment, devDotEnvPath)

 tBus.resolve({  serviceName, log: "" });

}

function stop() {

}