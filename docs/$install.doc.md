# `$install` Function Documentation

## Introduction

The `$install` function is a utility function designed to simplify package installation within Node.js projects. It automates the process of checking whether a package is already installed and installs it only if necessary, reducing the manual effort required by developers.

## Usage

The function accepts several parameters to customize the installation process according to specific requirements. These parameters include:

- `package`: The name of the package to install.
- `saveDev` (optional): Whether to install the package as a development dependency. Defaults to `false`.
- `version` (optional): The version of the package to install. Defaults to `"latest"`.
- `global` (optional): Whether to install the package globally. Defaults to `false`.
- `additionalArgs` (optional): Additional arguments to pass to the package manager during installation. Defaults to `null`.
- `pkgManager` (optional): The package manager to use (`"npm"` or `"yarn"`). Defaults to `"npm"`.

## Examples

### Example 1: Basic Usage with NPM

Install the `vfyjs` package using npm:

```javascript
const installedPackage = $install("vfyjs");
console.log(installedPackage); // Outputs the installed package
```

### Example 2: Installing Specific Version

Install version `1.2.3` of the `vfyjs` package:

```javascript
const installedPackage = $install("vfyjs", false, "1.2.3");
console.log(installedPackage); // Outputs the installed package
```

### Example 3: Installing as a Development Dependency

Install the `vfyjs` package as a development dependency:

```javascript
const installedPackage = $install("vfyjs", true);
console.log(installedPackage); // Outputs the installed package
```

### Example 4: Installing Globally

Install the `vfyjs` package globally:

```javascript
const installedPackage = $install("vfyjs", false, "latest", true);
console.log(installedPackage); // Outputs the installed package
```

### Example 5: Using Yarn as Package Manager

Install the `vfyjs` package using Yarn:

```javascript
const installedPackage = $install(
  "vfyjs",
  false,
  "latest",
  false,
  null,
  "yarn"
);
console.log(installedPackage); // Outputs the installed package
```

### Example 6: Specifying Additional Arguments

Install the `vfyjs` package while ignoring scripts during installation:

```javascript
const installedPackage = $install(
  "vfyjs",
  false,
  "latest",
  false,
  "--ignore-scripts"
);
console.log(installedPackage); // Outputs the installed package
```

## Benefits

- **Simplicity**: The function simplifies the package installation process by handling package checking and installation automatically.
- **Consistency**: Ensures consistent installation across different environments and projects.
- **Customization**: Provides flexibility with options to specify package versions, dependency types, and additional arguments.
- **Time-saving**: Reduces manual effort and saves developers' time by automating package installation tasks.
