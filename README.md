# XPRZ

Xprz is a versatile web development framework for Node.js, offering a comprehensive suite of features to streamline your application development process. With xprz, you can quickly build robust web applications with ease.

## Overview

Xprz provides a wide range of functionalities to simplify and enhance your Node.js web development experience. Here's a brief overview of some key components and features:

## Components

- **App**: Manage your Express application's lifecycle effortlessly with the `App` class. Initialize, launch, and handle server events seamlessly.
- **Package**: Integrate popular Node.js packages seamlessly with xprz. Enjoy out-of-the-box support for essential packages like bcryptjs, bodyParser, cors, jwt, multer, nodemailer, and more.
- **Route**: Efficiently organize and manage your application's routes with the `Route` class. Define routes for various HTTP methods and handle requests with ease.

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
- **$read**: Dynamically load modules or directories within your project, simplifying dependency management and resource access.
- **$install**: Streamline package installation by automating the process of checking for package existence and installing dependencies with ease.

## Example Features:

### Express Application Management

Simplify the management of your Express application's lifecycle with xprz's intuitive `App` class. Initialize your application, launch the server, and handle lifecycle events seamlessly:

```javascript
const Xprz = require("xprz");
const { App } = new Xprz();
const { initApp, listen, launch } = new App();
// or
const { initApp, listen, launch } = Xprz.App();

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
const  { use, bodyParsing } = require("xprz").App();
// Enable CORS
use(cors());

// Parse JSON and URL-encoded request bodies
bodyParsing();
```

### Static File Serving

Serve static files and directories with ease:

```javascript
const Xprz = require("xprz");
const { App } = new Xprz();
const { static } = new App();
// or
const { static } = Xprz.App();

// Serve static files from the 'public' directory
static("public");
```

### Route Management

Efficiently organize and manage your application's routes with the `Route` class:

```javascript
const Xprz = require("xprz");
const { Route } = new Xprz();
const { route } = new Route();
// or
const { route } = Xprz.Route();
// Define a route
route("/api/users")
  .get((ctx) => {
    // Handle GET request for '/api/users'
  })
  .attachTo(app);
```

### Package Integration

Integrate popular Node.js packages seamlessly with xprz. Enjoy out-of-the-box support for bcryptjs, bodyParser, cors, jwt, multer, nodemailer, and more.

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
route("/").get(({ send }) => {
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

Sure, let's break down the provided examples:

### Example Init APP:

```javascript
const Xprz = require("xprz");

// Setup dotenv
Xprz.Package().dotenv().setupDot();

// Initialize components
const { use, launch, loadRoutes, bodyParsing, static } = Xprz.App();

// Start server 
launch();

// JSON body parser
bodyParsing();

// Serve static files from 'public' directory
static("public");

// Install and use cookie-parser middleware
const cookieParser = $install("cookie-parser");
use(cookieParser());

// Load middleware and database setup utilities
$read("middleware/setup");
$read("utils/database");

// Load all router files in 'routes' directory
loadRoutes("routes");
```

**Explanation:**
- This section initializes the XPRZ framework and sets up the Express application.
- It loads environment variables using dotenv to configure the application environment.
- The `App` component's methods like `use`, `launch`, `loadRoutes`, `bodyParsing`, and `static` are utilized to configure the Express app.
- The server is launched to start listening for incoming requests.
- Middleware such as `cookie-parser` is installed and used.
- Custom middleware and database setup utilities are loaded.
- All router files in the 'routes' directory are loaded to handle different routes in the application.

### Example Router:

```javascript
const Xprz = require('xprz');
const {expose , route,globalMiddleware} = Xprz.Route();
const { ensureAuthenticated, verifyToken } = $read("middleware/is-auth");
const { getHome } = $read("controller/home/home");

// Apply middleware for all routes
globalMiddleware([ensureAuthenticated, verifyToken]);

// Define routes
route("/").get(({ redirect }) => redirect("/home"));
route("/home").using([ensureAuthenticated, verifyToken]).get(getHome);

module.exports = expose;
```

**Explanation:**
- This section defines a router using the `Route` component provided by XPRZ.
- Middleware functions for authentication (`ensureAuthenticated` and `verifyToken`) are imported using the `$read` utility function.
- The `globalMiddleware` method is used to apply middleware for all routes.
- Route handlers are defined for the root path ("/") and "/home" path.
- The `getHome` function from the home controller is used as a route handler for the "/home" route.

### Example Controller (for authentication registering):

```javascript
// Controller function to handle signup form submission
exports.postSignup = async (ctx) => {
  const { getBody, verifyBody } = ctx.req;

  // Define validation rules for request body
  const rules = {
    username: 'username',
    password: 'password',
    confirmPassword: "same:password",
    name: "string|min:10",
    age: "min:16|max:99"
  };

  // Define options for validation
  const options = {
    customMessages: {
      password: "Password is required"
    }
  };

  const { created, validationFailed, internalServerError } = jsonSender();

  try {
    // Extract user input from request body
    const { username, email, password, passwordConf } = getBody();

    // Validate user input
    const errors = verifyBody(rules, options);

    if (Object.keys(errors).length === 0) {
      console.log('Request body is valid');
    } else {
      // Return validation errors
      validationFailed({ errors });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return status(409).json({
        success: false,
        error: "User already exists.",
      });
    } else {
      // Hash the password securely
      const hashedPassword = await bcryptjs().hash(password, 10);
      const newUser = await User.create({
        username: username,
        email: email,
        password: hashedPassword,
      });

      // Generate JWT token with user information
      const token = generateAuthToken(newUser);
      ctx.session.token = token;

      // Send success response
      return created({ token });
    }
  } catch (error) {
    // Handle other errors (e.g., database error)
    internalServerError(error.message);
  }
};
```

**Explanation:**
- This section defines a controller function (`postSignup`) to handle user signup requests.
- The function receives the request object (`req`) and utility functions (`jsonSender`, `status`) as parameters.
- Validation rules for the request body are defined using the `verifyBody` function.
- Custom error messages for validation are defined in the `options` object.
- The request body is validated against the defined rules, and any validation errors are returned if present.
- The function checks if the user already exists in the database.
- If the user does not exist, the password is securely hashed using bcryptjs, and a new user is created in the database.
- A JWT token is generated for the new user, and the token is returned in the response.
- Any errors that occur during the process are handled and an appropriate response is sent.


## Documentation

For detailed documentation on xprz and its various features, refer to the documents provided in the `doc` folder of the package. The documentation offers comprehensive explanations, usage examples, and best practices to maximize the potential of xprz in your projects.

## Benefits of Using xprz

- **Productivity**: xprz simplifies complex tasks, allowing developers to focus on building features rather than managing boilerplate code.
- **Scalability**: With built-in support for middleware, routing, and database integration, xprz facilitates the development of scalable web applications.

- **Flexibility**: xprz offers flexibility in choosing database options, middleware, and package integrations, enabling developers to tailor their applications to specific requirements.

- **Community Support**: Backed by a vibrant community of developers, xprz benefits from ongoing improvements, updates, and contributions.

- **Performance**: Optimized for performance, xprz ensures that web applications built with it deliver fast and responsive user experiences.

## Bugs and Feedback

If you encounter any bugs or have feedback or suggestions for improvement, please open an issue on the [GitHub repository](https://github.com/m-mdy-m/Xprz).

## License

xprz is licensed under the MIT License. See the [LICENSE](https://github.com/m-mdy-m/Xprz/blob/main/LICENSE) file for details.
