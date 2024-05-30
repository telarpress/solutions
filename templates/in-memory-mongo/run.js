import { MongoMemoryServer } from 'mongodb-memory-server'
import path from 'node:path'
const serviceName = 'in-memory-mongo'
import {mkdir} from 'node:fs/promises'

let mongod = null
async function run({ rootPath, config }, tBus) {
    if (!config.port) {
        throw new Error('Port is required.')
    }
    // This will create an new instance of "MongoMemoryServer" and automatically start it
    const dbPath = path.join(rootPath, '.data')
    await mkdirIfNotExists(dbPath)
    const instance = {
        dbPath,
        storageEngine: 'wiredTiger',
        dbName: config.dbName || 'telar',
        port: config.port
    }
    mongod = await MongoMemoryServer.create({
        // @ts-ignore
        instance,
    })
    const uri = mongod.getUri(config.dbName)
    console.log(`Mongo DB is running on ${uri}`)
    tBus.resolve({ uri, instance, serviceName, log:'' }, [{ type: 'text', label: 'host', value: uri }])
    
}

/**
 * stop mongodb
 */
async function stop() {
    await mongod.stop()
}



export async function mkdirIfNotExists(path, options) {
  return mkdir(path, options).catch((err) => {
    if (err.code !== 'EEXIST') throw err
  })
}