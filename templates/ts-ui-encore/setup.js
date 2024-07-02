import path from 'node:path'
import { checkEncoreInstallation, checkGoInstallation, createEnvFile } from './helpers.js'

const serviceName = 'ts-ui-encore'
async function run({config, rootPath, projectPath}, tBus) {
if (await checkGoInstallation() === false) {
    console.error('Golang is not installed.')
    return
}
if (await checkEncoreInstallation() === false) {
    console.error('Encore is not installed. Checkout `https://encore.dev/` to install it.')
    tBus.reject('Encore is not installed.')
    return
}

 // set .env file
 const devDotEnvPath = path.join(path.join(projectPath, 'telar-social-encore', 'config'), '.env')
 await createEnvFile(config.environment, devDotEnvPath)

 tBus.resolve({  serviceName, log: "" });

}

function stop() {

}