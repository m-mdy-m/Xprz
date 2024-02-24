const {
    ModuleNotInstalledError,
    PackageInitializationError,
  } = require("../Errors/package.manager.error"),
  { execSync } = require("child_process");

async function _checkPkg(packageName, retries = 10, delay = 100) {
  while (retries > 0) {
    try {
      // Clear the cache for the package
      delete require.cache[require.resolve(packageName)];
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
      // Wait for the specified delay before retrying
      console.log(`Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
function $install(package) {
  try {
    let isPkg = _checkPkg(package);
    if (!isPkg) {
      execSync(`npm install ${package}`);
      // Check the package after installation
      isPkg = _checkPkg(package);
    }
    return isPkg;
  } catch (er) {
    throw new PackageInitializationError(package, er.message);
  }
}
const run = async () => {
  const a = await $install("nodemailer");
  console.log("a =>", a);
};
run();
module.exports = $install;
