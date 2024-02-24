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
function $install(package) {
  try {
    let isPkg = _checkPkg(package);
    if (!isPkg) {
      execSync(`npm install ${package}`);
      isPkg = _checkPkg(package); // Update isPkg after installation
    }
    return isPkg;
  } catch (er) {
    throw new PackageInitializationError(package, er.message);
  }
}
const a = $install("nodemailer");
console.log("a =>", a);
module.exports = $install;
