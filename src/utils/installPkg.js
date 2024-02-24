const {
    ModuleNotInstalledError,
    PackageInitializationError,
  } = require("../Errors/package.manager.error"),
  { execSync } = require("child_process");

function _checkPkg(packageName) {
  try {
    return require(packageName);
  } catch {
    return null;
  }
}
function $install(packages) {
  try {
    if (!Array.isArray(packages)) {
      packages = [packages];
    }
    let installedPackages = [];

    // Install and check each package
    for (const pkg of packages) {
      // Install the package

      let isPkg = _checkPkg(pkg);
        console.log('isPkg =>',isPkg);
      if (!isPkg) {
        execSync(`npm install ${pkg}`); 
        isPkg = _checkPkg(pkg);
      }

      if (isPkg) {
        installedPackages.push(isPkg);
      } else {
        throw new PackageInitializationError(
          pkg,
          "Package not installed or cannot be required."
        );
      }
    }
    return installedPackages;
  } catch (er) {
    throw new PackageInitializationError(packages, er.message);
  }
}
const a = $install(["body-parser", "nodemailer"]);
console.log("a =>", a);
module.exports = $install;
