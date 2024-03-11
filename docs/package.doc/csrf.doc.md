# Csrf

Class for configuring Cross-Site Request Forgery (CSRF) protection middleware in an Express application.

## Methods

### `setup()`

Sets up CSRF protection middleware based on provided options.

- **Returns:**
  - `void`

**Example:**

```javascript
// Initialize CsrfHandler with options
const csrfHandler = csrf({ cookie: true });

// Setup CSRF protection middleware
csrfHandler.setup();
```

### `provideCsrfToken(endPoint = "/get-csrf-token")`

Sets up an endpoint to provide the CSRF token to the frontend.

- **Parameters:**

  - `endPoint` (string, optional): The endpoint path to provide the CSRF token. Default is `"/get-csrf-token"`.

- **Returns:**
  - `Function`: The Express route handler for the CSRF token endpoint.

**Example:**

```javascript
// Initialize CsrfHandler
const csrfHandler = csrf();

// Setup CSRF protection middleware
csrfHandler.setup();

// Provide CSRF token endpoint
csrfHandler.provideCsrfToken();
```

### `getCsrf()`

Retrieves the configured CSRF middleware.

- **Returns:**
  - `Function`: The configured CSRF middleware.

**Example:**

```javascript
// Initialize CsrfHandler
const csrfHandler = csrf();

// Setup CSRF protection middleware
csrfHandler.setup();

// Retrieve configured CSRF middleware
const csrfMiddleware = csrfHandler.getCsrf();

// Apply CSRF middleware to the Express app
app.use(csrfMiddleware);
```

# Using CsrfHandler in an Express Application

In this example, we'll demonstrate how to use the `CsrfHandler` class to configure CSRF protection middleware in an Express application.

### Installation

First, ensure you have Node.js and npm installed on your system. Then, create a new directory for your project and navigate into it. Initialize a new npm project and install the `xprz` package:

```bash
npm install xprz
```

### CsrfHandler Setup

Create a new JavaScript file (e.g., `app.js`) and require Express and `CsrfHandler`:

```javascript
const Xprz = require("xprz");
const { Package } = new Xprz();
const { csrf } = new Package();
```

### Configure CsrfHandler

Initialize `CsrfHandler` with options and set up CSRF protection middleware:

```javascript
const csrfHandler = csrf({ cookie: true });
csrfHandler.setup();
// or
const csrfHandler = csrf({ cookie: true });
```

### Provide CSRF Token Endpoint

Set up an endpoint to provide the CSRF token to the frontend:

```javascript
csrfHandler.provideCsrfToken();
```

### Apply CSRF Middleware

Retrieve configured CSRF middleware and apply it to the Express app:

```javascript
const csrfMiddleware = csrfHandler.getCsrf();
app.use(csrfMiddleware);
```

### Example Route

Define a route to demonstrate the usage of CSRF token for form submission:

```javascript
app.post("/submit-form", (req, res) => {
  // Verify CSRF token
  // You can access CSRF token from req.csrfToken()
  // Here, we're just sending a success response assuming CSRF token verification passes
  res.status(200).send("Form submitted successfully!");
});
```

### Running the Application

To run the application, execute the following command in your terminal:

```bash
node app.js
```
