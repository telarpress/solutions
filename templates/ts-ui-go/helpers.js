import { writeFile } from 'fs/promises';
import { exec } from 'child_process';


/**
 * Converts a JSON object to a .env file format string.
 * @param {Object} json - The JSON object to convert.
 * @returns {string} - The .env file format string.
 */
function jsonToEnvString(json) {
  return Object.entries(json)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
}

/**
 * Creates a .env file from a JSON object at a specified path.
 * @param {Object} json - The JSON object to convert.
 * @param {string} filePath - The path to create the .env file.
 * @returns {Promise<void>}
 */
export async function createEnvFile(json, filePath) {
  try {
    const envString = jsonToEnvString(json);
    await writeFile(filePath, envString, 'utf8');
    console.log(`.env file created successfully at ${filePath}`);
  } catch (error) {
    console.error(`Error creating .env file: ${error.message}`);
  }
}

/**
 * Checks if Golang is installed on the system.
 */
export async function checkGoInstallation() {
  return new Promise((resolve, reject) => {
    exec('go version', (error, stdout, stderr) => {
      if (error) {
        reject('Golang is not installed.');
      }
      resolve('Golang is installed:' + stdout);
    });
  });
}

/**
 * Checks go fiber installation
 */
export async function checkGoFiberInstallation() {
  return new Promise((resolve, reject) => {
    exec('fiber -v', (error, stdout, stderr) => {
      if (error) {
        // instal fiber go cli
        exec('go install github.com/gofiber/cli/fiber@latest', (error, stdout, stderr) => {
          if (error) {
            reject('Go Fiber CLI is not installed.');
          }
          resolve('Go Fiber CLI is installed:' + stdout);
        });
      }
      resolve('Go Fiber is installed:' + stdout);
    });
  });
}

/**
 * function set environment variable in current environment and it is corss platform
 */
export async function setEnvValue(key, value) {
  process.env[key] = value;
  console.log(`Environment variable set: ${key}=${value}`);
}