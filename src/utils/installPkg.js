const { execSync } = require("child_process");
const {
    PackageInitializationError,
  } = require("../Errors/package.manager.error"),
  { promisify } = require("util");

const sleep = promisify(setTimeout);

function _checkPkg(packageName, retries = 10, delay = 100) {
  while (retries > 0) {
    try {
      const pkg = require(packageName);
      return pkg;
    } catch (error) {
      retries--;
      if (retries === 0) {
        return null;
      }
      // Synchronous delay using setTimeout
      setTimeout(() => {}, delay);
    }
  }
}

function $install(package) {
  try {
    let isPkg = _checkPkg(package);
    if (!isPkg) {
      execSync(`npm install ${package}`);
      isPkg = _checkPkg(package);
    }
    return isPkg
  } catch (er) {
    throw new PackageInitializationError(package, er.message);
  }
}

const a = $install("vfyjs");
console.log("a =>", a);
module.exports = $install;
