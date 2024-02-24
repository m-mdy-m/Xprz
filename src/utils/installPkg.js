const {
    ModuleNotInstalledError,
    PackageInitializationError,
  } = require("../Errors/package.manager.error"),
  { execSync } = require("child_process");

function _checkPkg(packageName) {
  try {
    const requiredPackage = require(packageName);
    return requiredPackage;
  } catch {
    throw new ModuleNotInstalledError(packageName);
  }
}
function $install(pkg) {
  try {
    if (!pkg) {
      execSync(`npm install ${pkg}`);
    }
    const hasPkg = _checkPkg(pkg);
    return hasPkg;
  } catch (er) {
    throw new PackageInitializationError(pkg, er.message);
  }
}
module.exports = $install;
