const { execSync } = require("child_process");
const {
  PackageInitializationError,
} = require("../Errors/package.manager.error");

function _checkPkg(packageName, retries = 10, delay = 100) {
  while (retries > 0) {
    try {
      // Require the package
      const pkg = require(packageName);
      // If the package is successfully required, return it
      return pkg;
    } catch (error) {
      // If an error occurs, decrement the number of retries and wait before trying again
      retries--;
      if (retries === 0) {
        // If no more retries left, return null
        return null;
      }
      // Synchronous delay using setTimeout
      const start = Date.now();
      while (Date.now() - start < delay) {}
    }
  }
}

function $install(package) {
  try {
    // Install the package
    execSync(`npm install ${package}`);
    // Check the package after installation
    const isPkg = _checkPkg(package);
    return isPkg;
  } catch (er) {
    throw new PackageInitializationError(package, er.message);
  }
}

const a = $install("nodemailer");
console.log("a =>", a);
module.exports = $install;
