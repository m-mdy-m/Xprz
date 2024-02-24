## `$install` Function Documentation

### Overview

The `$install` function is a utility designed to simplify the process of installing Node.js packages within your application. It automatically checks whether a specified package is already installed in the project's dependencies. If the package is not found, it proceeds to install it using npm.

### Usage

To utilize the `$install` function, provide the name of the package you wish to install as the `package` parameter. The function will handle the installation process and return the installed package.

```javascript
const installedPackage = $install('packageName');
```

### Parameters

- **package**: A string specifying the name of the package to be installed.
- **saveDev** (optional): A boolean flag indicating whether to install the package as a development dependency (`npm install --save-dev`). Defaults to `false`.

### Return Value

The function returns the installed package if it was successfully installed. If the package was already installed, it returns the package object. If the installation fails for any reason, it throws a `PackageInitializationError`.

### Example

```javascript
const installedPackage = $install('vfyjs');
console.log(installedPackage); // Outputs the installed package
```

### Benefits

- **Simplified Installation**: The `$install` function automates the package installation process, eliminating the need for manual installation steps.
  
- **Efficiency**: It checks whether a package is already installed before attempting to install it, reducing unnecessary installation attempts.

- **Error Handling**: The function handles errors during the installation process and throws a `PackageInitializationError` if installation fails, providing informative error messages.

- **Customization**: Users have the option to specify whether to install the package as a development dependency (`saveDev` parameter), offering flexibility in dependency management.

By using the `$install` function, you streamline the management of package dependencies in your Node.js projects, enhancing productivity and ensuring a smoother development experience.
