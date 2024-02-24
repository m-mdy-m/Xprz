const { execSync } = require("child_process");
const {
  PackageInitializationError,
} = require("../Errors/package.manager.error");

/**
 * Checks if a package is installed by attempting to require it.
 * @param {string} packageName - The name of the package to check.
 * @param {number} retries - Number of retries to check the package.
 * @param {number} delay - Delay in milliseconds between retries.
 * @returns {object|null} - The package if installed, otherwise null.
 * @private
 */
function _checkPkg(packageName, retries = 10, delay = 100) {
  while (retries > 0) {
    try {
      // Attempt to require the package
      const pkg = require(packageName);
      return pkg; // Return the package if it's found
    } catch (error) {
      retries--;
      if (retries === 0) {
        return null; // Return null if retries are exhausted
      }
      // Synchronous delay using setTimeout to prevent blocking the event loop
      setTimeout(() => {}, delay);
    }
  }
}

/**
 * Installs a package if it's not already installed.
 * @param {string} package - The name of the package to install.
 * @param {boolean} [saveDev=false] - Whether to install the package as a development dependency.
 * @param {string} [version="latest"] - The version of the package to install.
 * @param {boolean} [global=false] - Whether to install the package globally.
 * @param {string} [additionalArgs=null] - Additional arguments to pass to the package manager.
 * @param {string} [pkgManager='npm'] - The package manager to use ('npm' or 'yarn').
 * @returns {object} - The installed package.
 * @throws {PackageInitializationError} - If package installation fails.
 * @throws {TypeError} - If the package parameter is not a non-empty string.
 * @example
 * // Install 'vfyjs' package using npm
 * const installedPackageNPM = $install('vfyjs');
 * console.log(installedPackageNPM); // Outputs the installed package
 * 
 * // Install 'vfyjs' package using yarn as a development dependency with specific version and additional arguments
 * const installedPackageYarn = $install('vfyjs', true, '1.2.3', false, '--ignore-scripts', 'yarn');
 * console.log(installedPackageYarn); // Outputs the installed package
 */
function $install(package, saveDev = false, version = "latest",global =false,additionalArgs = null,pkgManager = 'npm') {
  const pkg = pkgManager.toLowerCase().trim()
  try {
    if (typeof package !== "string" || package.trim() === "") {
      throw new TypeError("Package name must be a non-empty string.");
    }
    let isPkg = _checkPkg(package);
    if (!isPkg) {
      let installCommand
        if (pkg === 'yarn') {
            installCommand = `yarn add ${package}@${version}${saveDev ? " --dev" : ""}${global ? " global" : ""}${additionalArgs ? ` ${additionalArgs}` : ""}`;
        }else{
        installCommand = `npm install ${global ? "-g" : ''} ${package}@${version}${saveDev ? " --save-dev" : ""}${additionalArgs ? ` ${additionalArgs}` : ""}`;
      }
      // Install the package using npm
      execSync(installCommand);
      isPkg = _checkPkg(package); // Check again if package is now installed
    }
    return isPkg; // Return the installed package
  } catch (er) {
    // Throw an error if package installation fails
    throw new PackageInitializationError(package, er.message);
  }
}
module.exports = $install; // Export the install function
