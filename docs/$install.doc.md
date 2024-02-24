## `$install` Function Documentation

### Overview

The `$install` function is a utility designed to simplify the process of installing Node.js packages within your application. It checks whether a specified package is already installed in the project's dependencies. If the package is not found, it automatically installs it using npm.

### Usage

To use the `$install` function, simply provide the name of the package you wish to install as a parameter. The function will handle the installation process and return the installed package.

```javascript
const installedPackage = $install('packageName');
```

### Parameters

- **packageName**: A string specifying the name of the package to be installed.

### Return Value

The function returns the installed package if it was successfully installed. If the package was already installed, it returns the package object. If the installation fails for any reason, it throws a `PackageInitializationError`.

### Example

```javascript
const installedPackage = $install('vfyjs');
console.log(installedPackage); // Outputs the installed package
```

### Why Use `$install`?

- **Simplified Installation**: `$install` automates the package installation process, eliminating the need for manual installation steps.

- **Efficiency**: It checks whether a package is already installed before attempting to install it, reducing unnecessary installation attempts.

- **Error Handling**: The function handles errors during the installation process and throws a `PackageInitializationError` if installation fails, providing informative error messages.

- **Standardization**: Using `$install` promotes consistency across projects and simplifies the onboarding process for new team members.
