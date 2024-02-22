# XPress: Your Complete Web Development Companion

Welcome to XPress, the ultimate package for accelerating your web development journey. With XPress, you can build powerful web applications effortlessly, thanks to its comprehensive set of tools and utilities designed to streamline your development process. Whether you're a seasoned developer or just starting out, XPress has something for everyone.

## Features

### Express Application Management

With XPress's `App` class, managing your Express application has never been easier. Initialize, launch, and manage your application effortlessly, allowing you to focus on building your application logic.

### Middleware Management

Easily attach middleware functions to your application using XPress. From enabling CORS to parsing JSON and URL-encoded request bodies, XPress simplifies the process of integrating middleware into your application.

### Static File Serving

Serve static files and directories with ease using XPress's `static` method. Whether you need to serve images, CSS files, or client-side JavaScript, XPress has you covered.

### Route Management

Efficiently manage your application's routes with XPress's `RouteManager` class. Define routes for various HTTP methods and group them under common paths, making it easy to organize and maintain your application's routing logic.

## Installation

To install XPress and start using it in your project, simply run:

```
npm install xpress
```

For detailed installation instructions and usage examples, please refer to the documentation provided in the `doc` folder of the package.

## Real-world Usage Examples

### Blogging Platform

Create a robust blogging platform using XPress:

```javascript
const XPress = require("xpress");
const { App, RouteManager } = new XPress();

// Initialize Express app
const { initApp, loadRoutes, listen } = new App();
initApp();

// Load routes from 'blogRoutes' directory
loadRoutes("blogRoutes");

// Start server
listen(3000);
```

### E-commerce Website

Build a sophisticated e-commerce website with XPress:

```javascript
const XPress = require("xpress");
const { App, RouteManager } = new XPress();

// Initialize Express app
const { initApp, listen } = new App();

const router = new RouteManager();

// Define routes for product management
router.group("/products", (r) => {
  r.get("/", (req, res) => {
    // Handle GET request for '/products'
  });

  r.post("/", (req, res) => {
    // Handle POST request for '/products'
  });
});

// Start server
listen(3000);
```

### RESTful API

Create a RESTful API using XPress:

```javascript
const XPress = require("xpress");
const { App, RouteManager } = new XPress();

// Initialize Express app
const { initApp, listen } = new App();

const router = new RouteManager();

// Define routes for user management
router.group("/api/users", (r) => {
  r.get("/", (req, res) => {
    // Handle GET request for '/api/users'
  });

  r.post("/", (req, res) => {
    // Handle POST request for '/api/users'
  });
});

// Start server
listen(3000);
```

## Feedback and Support

We welcome your feedback and suggestions for improving XPress. If you encounter any bugs or have ideas for new features, please don't hesitate to [open an issue](https://github.com/your-username/xpress/issues) on GitHub.

## License

XPress is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

## Get Started

Ready to supercharge your web development experience? Install XPress today and unlock the full potential of Express.js! Don't forget to check out the documentation for detailed usage instructions and best practices. Let's build amazing things together with XPress!