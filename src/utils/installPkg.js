const { execSync } = require("child_process");
const {
  PackageInitializationError,
} = require("../Errors/package.manager.error");

// Function to check if a package is installed
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

// Function to install a package if it's not already installed
function $install(package) {
  try {
    let isPkg = _checkPkg(package);
    if (!isPkg) {
      // Install the package using npm
      execSync(`npm install ${package}`);
      isPkg = _checkPkg(package); // Check again if package is now installed
    }
    return isPkg; // Return the installed package
  } catch (er) {
    // Throw an error if package installation fails
    throw new PackageInitializationError(package, er.message);
  }
}

module.exports = $install; // Export the install function
