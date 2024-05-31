import { writeFile } from 'fs/promises';
import path from 'path';

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