const fs = require('node:fs')
const os = require('node:os')
const crypto = require('node:crypto')

// read .env file & convert to array
const readEnvVars = async (envFilePath) => {
    const data = await readFileAsync(envFilePath, 'utf-8')
    return data.split(os.EOL)
}
/**
 * Finds the key in .env files and returns the corresponding value
 *
 * @param {string} key Key to find
 * @returns {Promise<string|null>} Value of the key
 */
// @ts-ignore
const getEnvValue = async (envFilePath, key) => {
    // find the line that contains the key (exact match)
    const result = await readEnvVars(envFilePath)
    const matchedLine = result.find((line) => line.split('=')[0] === key)
    // split the line (delimiter is '=') and return the item at index 2
    return matchedLine !== undefined ? matchedLine.split('=')[1] : null
}

/**
 * Updates value for existing key or creates a new key=value line
 *
 * This function is a modified version of https://stackoverflow.com/a/65001580/3153583
 *
 * @param {string} key Key to update/insert
 * @param {string} value Value to update/insert
 */
// @ts-ignore
const setEnvValue = async (envFilePath, key, value) => {
    const envVars = await readEnvVars(envFilePath)
    const targetLine = envVars.find((line) => line.split('=')[0] === key)
    if (targetLine !== undefined) {
        // update existing line
        const targetLineIndex = envVars.indexOf(targetLine)
        // replace the key/value with the new value
        envVars.splice(targetLineIndex, 1, `${key}="${value}"`)
    } else {
        // create new key value
        envVars.push(`${key}="${value}"`)
    }
    // write everything back to the file system
    await writeFileAsync(envFilePath, envVars.join(os.EOL))
}

/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
function readFileAsync(path, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 */
function writeFileAsync(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(undefined)
            }
        })
    })
}

/**
 * Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it
 * already exists. No arguments other than a possible exception are given to the
 * callback function. Node.js makes no guarantees about the atomicity of the copy
 * operation. If an error occurs after the destination file has been opened for
 * writing, Node.js will attempt to remove the destination.
 *
 * `mode` is an optional integer that specifies the behavior
 * of the copy operation. It is possible to create a mask consisting of the bitwise
 * OR of two or more values (e.g.`fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`).
 *
 * * `fs.constants.COPYFILE_EXCL`: The copy operation will fail if `dest` already
 * exists.
 * * `fs.constants.COPYFILE_FICLONE`: The copy operation will attempt to create a
 * copy-on-write reflink. If the platform does not support copy-on-write, then a
 * fallback copy mechanism is used.
 * * `fs.constants.COPYFILE_FICLONE_FORCE`: The copy operation will attempt to
 * create a copy-on-write reflink. If the platform does not support
 * copy-on-write, then the operation will fail.
 *
 * ```js
 * import { copyFile, constants } from 'fs';
 *
 * function callback(err) {
 *   if (err) throw err;
 *   console.log('source.txt was copied to destination.txt');
 * }
 *
 * // destination.txt will be created or overwritten by default.
 * copyFile('source.txt', 'destination.txt', callback);
 *
 * // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
 * copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL, callback);
 * ```
 * @since v8.5.0
 * @param src source filename to copy
 * @param dest destination filename of the copy operation
 * @param [mode=0] modifiers for copy operation.
 */
function copyFileAsync(src, dest, mode = 0) {
    return new Promise((resolve, reject) => {
        fs.copyFile(src, dest, mode, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(undefined)
            }
        })
    })
}

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
function mergeDeep(...objects) {
    const isObject = (obj) => obj && typeof obj === 'object'

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach((key) => {
            const pVal = prev[key]
            const oVal = obj[key]

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal)
            } else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = mergeDeep(pVal, oVal)
            } else {
                prev[key] = oVal
            }
        })

        return prev
    }, {})
}

function getRandomSecretKey() {
    return crypto.randomBytes(48).toString('base64url')
}

module.exports = {
    readEnvVars,
    getEnvValue,
    setEnvValue,
    readFileAsync,
    writeFileAsync,
    copyFileAsync,
    mergeDeep,
    getRandomSecretKey,
}
