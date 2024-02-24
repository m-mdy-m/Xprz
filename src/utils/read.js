const path = require('path');

/**
 * Resolves the path of the file or folder.
 * @param {string} location - The path of the file or folder.
 * @returns {string} - The resolved path.
 * @private
 */
function _resolvePath(location) {
  // Resolve the absolute path
  return path.resolve(process.cwd(), location);
}

/**
 * Loads a file or folder using require.
 * @param {string} location - The path of the file or folder to load.
 * @returns {object} - The loaded module.
 * @throws {Error} - If the file or folder does not exist or cannot be required.
 */
function $read(location) {
  try {
    const resolvedPath = _resolvePath(location);
    // Load the file or folder using require
    const module = require(resolvedPath);
    return module;
  } catch (error) {
    throw new Error(`Error loading module from '${location}': ${error.message}`);
  }
}

module.exports = $read;
