# XPress

XPress is a robust and feature-rich framework built on top of Express.js, designed to accelerate the development of web applications by providing a comprehensive set of tools and utilities. Whether you're building a simple blog, a sophisticated e-commerce platform, or anything in between, Xpress offers the flexibility and convenience you need to bring your ideas to life.

## Features

### Express Application Management
Simplify the management of your Express application's lifecycle with the `App` class:
```javascript
const XPress = require("xpress");
const { App } = new XPress();

// Initialize the Express application
const {initApp,listen , launch} = new App();
initApp()
// Start the server
listen(3000);
// Or 
launch()
```

### Middleware Management
Effortlessly attach middleware functions to your application:
```javascript
const XPress = require("xpress");
const { App } = new XPress();
const { use } = new App()
// Enable CORS
use(cors());

// Parse JSON and URL-encoded request bodies
useJsonBody();
```

### Static File Serving
Serve static files and directories with ease:
```javascript
const XPress = require("xpress");
const { App } = new XPress();
const {static } = new App()
// Serve static files from the 'public' directory
static("public");
```

### Route Management
Manage your application's routes efficiently with the `RouteManager` class:
```javascript
const XPress = require("xpress");
const { RouteManager } = new XPress();
const router = new RouteManager()
// Define routes
router.get("/api/users", (req, res) => {
  // Handle GET request for '/api/users'
});

router.post("/api/users", (req, res) => {
  // Handle POST request for '/api/users'
});
```

## Installation

To install Xpress and start using it in your project, simply run:

```
npm install xpress
```

## Documentation

For detailed documentation on how to use Xpress and its various features, please refer to the documents provided in the `doc` folder of the package. These documents offer comprehensive explanations, usage examples, and best practices to help you make the most out of Xpress in your projects.

## Real-world Usage Examples

### Blogging Platform
```javascript
const XPress = require("xpress");
const { App, RouteManager } = new XPress();

// Initialize Express app
const {initApp,loadRoutes,listen} = new App();
initApp()
// Load routes from 'blogRoutes' directory
loadRoutes("blogRoutes");

// Start server
listen(3000);
```

### E-commerce Website
```javascript
const XPress = require("xpress");
const { App, RouteManager } = new XPress();

// Initialize Express app
const {initApp,listen} =new App();

const router = new RouteManager()
// Define routes for product management
router.group("/products", (r) => {
  r.get("/", (req, res) => {
    // Handle GET request for '/products'
  });
  // or 
  r.get('/',(()=>{
   const { /*  res handlers **/ }  = r.res()
   const { /*  req handlers **/ }  = r.req()
  }))

  r.post("/", (req, res) => {
    // Handle POST request for '/products'
  });
});

// Start server
listen(3000);
```

### RESTful API
```javascript
const XPress = require("xpress");
const { App, RouteManager } = new XPress();

// Initialize Express app
const app = new App().initApp();
const router = new RouteManager()
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
App.listen(3000);
```

## Get Started

Ready to start building powerful web applications with Xpress? Check out our documentation and start exploring the possibilities today!