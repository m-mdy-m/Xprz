### $read Function Documentation

The `$read` function is a utility provided by the Xprz package for dynamically loading files or folders within a Node.js environment. It allows for seamless inclusion of modules or directories into your application, simplifying the process of managing dependencies and accessing resources.

#### Purpose

The primary purpose of `$read` is to facilitate the loading of modules or directories using `require`, enabling developers to access and utilize JavaScript files or entire directories within their projects.

#### Usage

To use `$read`, simply call the function with the path of the file or folder you want to load as its argument. It returns the loaded module or an object containing all modules within the specified directory.

```javascript
// Loads a JavaScript file
const myModule = $read("./myFile.js");
console.log(myModule); // Outputs the loaded module

// Loads an entire directory
const myFolder = $read("./myFolder");
console.log(myFolder); // Outputs an object containing all modules within the folder
```

#### Benefits

1. **Simplified Dependency Management**: `$read` simplifies the process of including dependencies by providing a single function to load modules or directories.
2. **Dynamic Loading**: It allows for dynamic loading of modules at runtime, providing flexibility in managing project resources.

3. **Error Handling**: `$read` includes error handling to gracefully handle cases where the specified file or folder does not exist or cannot be required.

4. **Globally Accessible**: As `$read` is installed globally with the Xprz package, it can be used anywhere within your project without the need for explicit imports.

#### Practical Examples

1. **Loading Configuration Files**:

```javascript
const config = $read("./config.json");
console.log(config); // Outputs the loaded configuration object
```

2. **Accessing Utility Functions**:

```javascript
const utils = $read("./utils");
console.log(utils); // Outputs an object containing all utility functions within the 'utils' directory
```

3. **Dynamically Loading Middleware**:

```javascript
const middleware = $read("./middleware");
app.use(middleware); // Dynamically loads and applies middleware to the Express app
```

#### Conclusion

In conclusion, `$read` is a versatile utility function that simplifies the process of loading modules or directories within a Node.js application. Its ease of use, error handling capabilities, and dynamic loading functionality make it a valuable tool for managing project dependencies and accessing resources efficiently.
