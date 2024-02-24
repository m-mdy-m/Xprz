const { execSync } = require("child_process");
const {
    PackageInitializationError,
  } = require("../Errors/package.manager.error"),
  { promisify } = require("util");

const sleep = promisify(setTimeout);

async function _checkPkgAsync(packageName, retries = 10, delay = 100) {
  while (retries > 0) {
    try {
      const pkg = require(packageName);
      return pkg;
    } catch (error) {
      retries--;
      if (retries === 0) {
        return null;
      }
      await sleep(delay);
    }
  }
}

function _checkPkgSync(packageName, retries = 10, delay = 100) {
  let result = null;
  while (retries > 0) {
    try {
      result = require(packageName);
      break;
    } catch (error) {
      retries--;
      if (retries === 0) {
        break;
      }
      sleep(delay);
    }
  }
  return result;
}

function $install(package) {
  try {
    let isPkg = _checkPkgSync(package);
    if (!isPkg) {
      execSync(`npm install ${package}`);
      isPkg = _checkPkgAsync(package);
    }
    return isPkg;
  } catch (er) {
    throw new PackageInitializationError(package, er.message);
  }
}
const a = $install("nodemailer");
console.log("a =>", a);
module.exports = $install;
