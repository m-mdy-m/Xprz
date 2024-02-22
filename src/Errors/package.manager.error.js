// ModuleNotInstalledError class extends the built-in Error class to represent errors when required modules are not installed.
class ModuleNotInstalledError extends Error {
  constructor(packageName) {
    // Call the constructor of the Error class with a dynamically generated message.
    super(
      `The '${packageName}' module is not installed. Please make sure to install it by running 'npm install ${packageName}' before using sessions.`
    );
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// PackageInitializationError class extends Error to represent errors during package initialization.
class PackageInitializationError extends Error {
  constructor(packageName, message) {
    // Call the constructor of the Error class with a dynamically generated message.
    super(`Failed to initialize '${packageName}' package: ${message}`);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// Export ModuleNotInstalledError and PackageInitializationError for use in other modules.
module.exports = { ModuleNotInstalledError, PackageInitializationError };
