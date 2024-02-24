# $install Function Documentation

## Overview

The `$install` function is a utility provided by the Xprz framework for simplified package installation in Node.js applications. It automates the process of checking for the existence of a specified package and installing it if not already present. This function supports both npm and yarn as package managers, providing flexibility based on your project's requirements.

## Installation

The `$install` function is globally available upon installing the Xprz package. To install Xprz, use the following command:

```bash
npm install xprz
```

After installation, you can access the `$install` function globally within your Node.js application.

## Usage

The `$install` function streamlines the package installation process, making it easy to manage dependencies. Here's an overview of its usage:

```javascript
const installedPackage = $install('package-name');
```

### Parameters

- **package** (string): The name of the package to install.
- **saveDev** (boolean, optional): Whether to install the package as a development dependency. Default is `false`.
- **version** (string, optional): The version of the package to install. Default is `'latest'`.
- **global** (boolean, optional): Whether to install the package globally. Default is `false`.
- **additionalArgs** (string, optional): Additional arguments to pass to the package manager.
- **pkgManager** (string, optional): The package manager to use ('npm' or 'yarn'). Default is `'npm'`.

### Examples

#### Install a package using npm:

```javascript
const installedPackage = $install('example-package');
```

#### Install a package using yarn as a development dependency with a specific version and additional arguments:

```javascript
const installedPackage = $install('example-package', true, '1.2.3', false, '--ignore-scripts', 'yarn');
```

## Benefits

1. **Simplified Package Management:** The `$install` function abstracts away the complexities of package installation, providing a concise and consistent interface.

2. **Global Availability:** Being globally available, `$install` enhances the ease of use across your entire project, eliminating the need for repetitive installation code.

3. **Dynamic Package Loading:** The function intelligently checks if the specified package is already installed, avoiding redundant installations and improving efficiency.

4. **Support for npm and yarn:** The flexibility to choose between npm and yarn allows you to align the package management strategy with your project requirements.

## Error Handling

The `$install` function throws a `PackageInitializationError` if the package installation fails. This error includes details about the package and the specific error message.

## Conclusion

In summary, the `$install` function simplifies and streamlines the process of managing dependencies in your Node.js applications. Its global availability, support for multiple package managers, and straightforward usage make it a valuable tool for improving the efficiency of your development workflow.