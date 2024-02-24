# `$install` Function Documentation

## Overview

The `$install` function is a utility designed to simplify the installation of Node.js packages within your project. It provides a convenient way to ensure that a specific package is installed and available for use, handling the installation process and potential errors.

## Installation

To use the `$install` function in your project, you can include it by requiring it in your JavaScript file:

```javascript
const Xprz = require('xprz');
const { $install} = new Xprz()

```

Make sure to adjust the path accordingly.

## Function Signature

```javascript
/**
 * Installs a package if it's not already installed.
 * @param {string} package - The name of the package to install.
 * @param {boolean} [saveDev=false] - Whether to install the package as a development dependency.
 * @param {string} [version="latest"] - The version of the package to install.
 * @param {boolean} [global=false] - Whether to install the package globally.
 * @param {string} [additionalArgs=null] - Additional arguments to pass to the package manager.
 * @param {string} [pkgManager='npm'] - The package manager to use ('npm' or 'yarn').
 * @returns {object} - The installed package.
 * @throws {PackageInitializationError} - If package installation fails.
 * @throws {TypeError} - If the package parameter is not a non-empty string.
 */
function $install(package, saveDev = false, version = "latest", global = false, additionalArgs = null, pkgManager = 'npm') {
  // Function implementation...
}
```

## Usage Examples

### Example 1: Install a package using npm

```javascript
const installedPackage = $install('example-package');
console.log(installedPackage); // Outputs the installed package
```

In this example, the function installs the 'example-package' using npm and logs the installed package to the console.

### Example 2: Install a package with specific version and as a development dependency using yarn

```javascript
const installedPackage = $install('example-package', true, '1.2.3', false, '--ignore-scripts', 'yarn');
console.log(installedPackage); // Outputs the installed package
```

This example demonstrates installing 'example-package' with version 1.2.3, as a development dependency, and using yarn as the package manager. The `--ignore-scripts` flag is also passed as an additional argument.

## Why Use `$install`?

- **Simplicity:** The function simplifies the process of installing packages, reducing the need for users to write complex installation scripts.

- **Consistency:** It abstracts away the differences between npm and yarn commands, providing a consistent interface regardless of the package manager in use.

- **Error Handling:** The function handles potential errors during the installation process, throwing a `PackageInitializationError` if installation fails.

- **Customization:** Users can customize the installation by specifying options such as version, dependency type (development or production), and additional arguments.

- **Compatibility:** The function supports both npm and yarn, making it versatile for projects using different package managers.

## Conclusion

The `$install` function streamlines the package installation process, making it more straightforward and less error-prone. Its flexibility and error-handling capabilities contribute to a smoother development experience.

Feel free to incorporate this function into your projects to enhance package management and streamline your workflows.
