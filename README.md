# XPRZ

Xprz is a versatile web development framework for Node.js, offering a comprehensive suite of features to streamline your application development process. With xprz, you can quickly build robust web applications with ease.

## Overview

Xprz provides a wide range of functionalities to simplify and enhance your Node.js web development experience. Here's a brief overview of some key components and features:

## Components

- **App**: Manage your Express application's lifecycle effortlessly with the `App` class. Initialize, launch, and handle server events seamlessly.
- **Package**: Integrate popular Node.js packages seamlessly with xprz. Enjoy out-of-the-box support for essential packages like bcryptjs, bodyParser, cors, jwt, multer, nodemailer, and more.
- **Route**: Efficiently organize and manage your application's routes with the `Route` class. Define routes for various HTTP methods and handle requests with ease.
- **SharedApp**: Access and share the Express application instance across modules with the `SharedApp` class. Simplify application-wide configuration and access with ease.

## Utilities

- **$read**: Dynamically load files or folders within a Node.js environment with ease using the `$read` utility function. Simplify the process of managing dependencies and accessing resources effortlessly.

- **$install**: Simplify package installation in your Node.js applications with the `$install` utility function provided by Xprz. Automate the process of checking for package existence and installing dependencies seamlessly.

Sure, here's how you can describe the static methods of the `Xprz` class using markdown:

## Static Methods

Xprz provides the following static methods for convenient instantiation of various components:

### `Xprz.App()`

Creates a new instance of the `AppManager` class, allowing easy management of the Express application lifecycle.

### `Xprz.Package()`

Creates a new instance of the `PackageManager` class, facilitating seamless integration of popular Node.js packages into your application.

### `Xprz.Route()`

Creates a new instance of the `RouteManager` class, enabling efficient organization and management of application routes.

### `Xprz.GetUtilsApp()`

Creates a new instance of the `AppSharedManager` class, providing access to shared application configurations and resources across modules.

## Features

- **Middleware Management**: Effortlessly enhance your application's functionality by attaching middleware functions with a simple API.
- **Static File Serving**: Serve static files and directories effortlessly to handle CSS, JavaScript, images, and more.
- **Package Integration**: Integrate popular Node.js packages seamlessly to extend the functionality of your application.
- **Shared Application Instance**: Share the Express application instance across modules for easy access and configuration.
- **$read**: Dynamically load modules or directories within your project, simplifying dependency management and resource access.
- **$install**: Streamline package installation by automating the process of checking for package existence and installing dependencies with ease.

## Example Features:

### Express Application Management

Simplify the management of your Express application's lifecycle with xprz's intuitive `App` class. Initialize your application, launch the server, and handle lifecycle events seamlessly:

```javascript
const Xprz = require("xprz");
const { App } = new Xprz();
const { initApp, listen, launch } = new App();

// Initialize the Express application
initApp();

// Start the server
listen(3000);
// Or use the alternative
launch();
```

### Middleware Management

Effortlessly enhance your application's functionality by attaching middleware functions with a simple API:

```javascript
const Xprz = require("xprz");
const { App } = new Xprz();
const { use, useJsonBody } = new App();

// Enable CORS
use(cors());

// Parse JSON and URL-encoded request bodies
useJsonBody();
```

### Static File Serving

Serve static files and directories with ease:

```javascript
const Xprz = require("xprz");
const { App } = new Xprz();
const { static } = new App();

// Serve static files from the 'public' directory
static("public");
```

### Route Management

Efficiently organize and manage your application's routes with the `Route` class:

```javascript
const Xprz = require("xprz");
const { Route } = new Xprz();
const { route } = new Route();

// Define a route
route("/api/users").get((req, res) => {
  // Handle GET request for '/api/users'
});
```

### Package Integration

Integrate popular Node.js packages seamlessly with xprz. Enjoy out-of-the-box support for bcryptjs, bodyParser, cors, jwt, multer, nodemailer, and more.

### Shared Application Instance

Access and share the Express application instance across modules with xprz's `SharedApp` class. Simplify application-wide configuration and access with ease.

## Installation

To install xprz and start using it in your project, simply run:

```bash
npm install xprz
```

## Usage

Get started with xprz by initializing the components you need and configuring them as per your project requirements. Use the provided examples as a reference to set up your Express application efficiently.

## Examples

### Basic Example

```javascript
const Xprz = require("xprz");
const { App, Route } = new Xprz();
const { initApp, listen } = new App();
const { route } = new Route();

// Initialize Express application
initApp();

// Define a basic route
route("/").get((req, { send }) => {
  send("Hello, xprz!");
});

// Start server
listen(3000);
```

### $read

```javascript
const myModule = $read("./myFile.js");
console.log(myModule); // Outputs the loaded module

const myFolder = $read("./myFolder");
console.log(myFolder); // Outputs an object containing all modules within the folder
```

### $install

```javascript
const installedPackage = $install("example-package");
```

### Real-world Example (Project Initialization)

```javascript
const myFolder = $read("./myFolder");
console.log(myFolder); // Outputs an object containing all modules within the folder

const installedPackage = $install("example-package");
```

### Real-world Example (Blogging Platform)

```javascript
const Xprz = require("xprz");
const { App } = new Xprz();
const { initApp, loadRoutes, listen } = new App();

// Initialize Express application
initApp();

// Load routes from 'blogRoutes' directory
loadRoutes("blogRoutes");

// Start server
listen(3000);
```

## Documentation

For detailed documentation on xprz and its various features, refer to the documents provided in the `doc` folder of the package. The documentation offers comprehensive explanations, usage examples, and best practices to maximize the potential of xprz in your projects.

## Benefits of Using xprz

- **Productivity**: xprz simplifies complex tasks, allowing developers to focus on building features rather than managing boilerplate code.
- **Scalability**: With built-in support for middleware, routing, and database integration, xprz facilitates the development of scalable web applications.

- **Flexibility**: xprz offers flexibility in choosing database options, middleware, and package integrations, enabling developers to tailor their applications to specific requirements.

- **Community Support**: Backed by a vibrant community of developers, xprz benefits from ongoing improvements, updates, and contributions.

- **Performance**: Optimized for performance, xprz ensures that web applications built with it deliver fast and responsive user experiences.

## Bugs and Feedback

If you encounter any bugs or have feedback or suggestions for improvement, please open an issue on the [GitHub repository](https://github.com/m-mdy-m/XprsJS).

## License

xprz is licensed under the MIT License. See the [LICENSE](https://github.com/m-mdy-m/XprsJS/blob/main/LICENSE) file for details.
