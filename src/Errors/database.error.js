class ModuleNotInstalledError extends Error {
  constructor(packageName) {
    super(
      `The '${packageName}' module is not installed. Please make sure to install it by running 'npm install ${packageName}' before using sessions.`
    );
    this.name = this.constructor.name;
  }
}

module.exports = ModuleNotInstalledError;
