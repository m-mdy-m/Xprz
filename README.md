# XPRZ

Xprz is a versatile web development framework for Node.js, offering a comprehensive suite of features to streamline your application development process. With xprz, you can quickly build robust web applications with ease.

## Overview

Xprz provides a wide range of functionalities to simplify and enhance your Node.js web development experience. Here's a brief overview of some key components and features:

## Components

- **App**: Manage your Express application's lifecycle effortlessly with the `App` class. Initialize, launch, and handle server events seamlessly.
- **Database**: Seamlessly integrate with MongoDB and MySQL databases for efficient data management and CRUD operations.
- **HttpMethod**: Simplify HTTP method handling with the `HttpMethod` class. Define and handle various HTTP methods effortlessly.
- **Package**: Integrate popular Node.js packages seamlessly with xprz. Enjoy out-of-the-box support for essential packages like bcryptjs, bodyParser, cors, jwt, multer, nodemailer, and more.
- **Route**: Efficiently organize and manage your application's routes with the `Route` class. Define routes for various HTTP methods and handle requests with ease.
- **SharedApp**: Access and share the Express application instance across modules with the `SharedApp` class. Simplify application-wide configuration and access with ease.

## Features

- **Middleware Management**: Effortlessly enhance your application's functionality by attaching middleware functions with a simple API.
- **Static File Serving**: Serve static files and directories effortlessly to handle CSS, JavaScript, images, and more.
- **Database Integration**: Seamlessly integrate with MongoDB and MySQL databases for efficient data management.
- **HTTP Method Utilities**: Simplify HTTP method handling with predefined utility methods for GET, POST, PUT, DELETE, and more.
- **Package Integration**: Integrate popular Node.js packages seamlessly to extend the functionality of your application.
- **Shared Application Instance**: Share the Express application instance across modules for easy access and configuration.

## Example Features:

### Express Application Management
Simplify the management of your Express application's lifecycle with xprz's intuitive `App` class. Initialize your application, launch the server, and handle lifecycle events seamlessly:
```javascript
const { App } = require('xprz');
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
const { App } = require('xprz');
const { use, useJsonBody, cors } = new App();

// Enable CORS
use(cors());

// Parse JSON and URL-encoded request bodies
useJsonBody();
```

### Static File Serving
Serve static files and directories with ease:
```javascript
const { App } = require('xprz');
const { static } = new App();

// Serve static files from the 'public' directory
static('public');
```

### Route Management
Efficiently organize and manage your application's routes with the `Route` class:
```javascript
const { App, Route } = require("xprz")
const { get } = new Route();

// Define a route
get('/api/users', (req, res) => {
  // Handle GET request for '/api/users'
});
```

### Database Integration
Seamlessly integrate with MongoDB and MySQL databases:
```javascript
const { App, Database } = require("xprz")
const { MongoDB, MySql } = new Database();

// MongoDB usage example
const { find } = MongoDB();
find('users', { username: 'john_doe' });

// MySQL usage example
const { query } = MySql();
query('SELECT * FROM users');
```

### HTTP Method Utilities
Simplify HTTP method handling with the `HttpMethod` class. Define and handle various HTTP methods effortlessly:
```javascript
const { HttpMethod } = require("xprz")
const { GET, POST, PUT, DELETE } = new HttpMethod();

// Define routes for different HTTP methods
GET('/api/users', (req, res) => {
  // Handle GET request for '/api/users'
});

POST('/api/users', (req, res) => {
  // Handle POST request for '/api/users'
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
const { App, Route } = require("xprz")
const { initApp, listen } = new App();
const { get } = new Route();

// Initialize Express application
initApp();

// Define a basic route
get('/', (req, res) => {
  res.send('Hello, xprz!');
});

// Start server
listen(3000);
```

### Real-world Example (Blogging Platform)

```javascript
const { App } = require("xprz")
const { initApp, loadRoutes, listen } = new App();

// Initialize Express application
initApp();

// Load routes from 'blogRoutes' directory
loadRoutes('blogRoutes');

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
