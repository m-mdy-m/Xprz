## `Route`

RouteManager class handles route management for Express.js.

### Constructor

- **Parameters:**
  - None

### Methods

#### `res()`

Returns an enhanced response object.

- **Returns:**

  - `Response`: Enhanced response object.

- **Example:**
  ```javascript
  const router = new Route();
  // Assuming 'response' is the Express response object
  const { send } = router.res();
  send("hello world");
  ```

#### `req()`

Returns an enhanced request object.

- **Returns:**

  - `Request`: Enhanced request object.

- **Example:**
  ```javascript
  const router = new Route();
  // Assuming 'request' is the Express request object
  const { getBody } = router.req();
  getBody(); // Accessing request body
  ```


#### `attachTo(app)`

Attaches the route manager to an Express app.

- **Parameters:**

  - `app` (object): Express app instance.

- **Returns:**

  - Void

- **Example:**
  ```javascript
  const app = getApp();
  const router = new Route();
  router.attachTo(app);
  ```

#### `using(middleware)`

Registers middleware for the route manager.

- **Parameters:**

  - `middleware` (function): Middleware function.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.using(middlewareFunction); // or using([middleware function])
  ```

#### `route(path)`

Sets the base path for the route manager.

- **Parameters:**

  - `path` (string): Base path for the route manager.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.route("/api");
  ```

#### `group(mainRoute, callback)`

Defines a group of routes under a common path.

- **Parameters:**

  - `mainRoute` (string): Main path for the group of routes.
  - `callback` (function): Callback function to define grouped routes.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.group("/api", (r) => {
    r.route("/users").get((req, { send }) => {
      send("GET /api/users");
    });
  });
  ```

### `endGroup()`

Ends the current group of routes.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.group("/api", (r) => {
    r.route("/users").get((req, { send }) => {
      send("GET /api/users");
    });
  }).endGroup().get((req, { send }) => {
    send("GET /api");
  });

#### `get(...handlers)`

Registers a GET route.

- **Parameters:**

  - `handlers` (...function): Route handler functions.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.route("/api/users").get((req, { send }) => {
    send("GET /api/users");
  });
  ```

#### `post(...handlers)`

Registers a POST route.

- **Parameters:**

  - `handlers` (...function): Route handler functions.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.route("/api/users").post((req, { send }) => {
    send("POST /api/users");
  });
  ```

#### `del(...handlers)`

Registers a DELETE route.

- **Parameters:**

  - `handlers` (...function): Route handler functions.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.route("/api/users").del((req, { send }) => {
    send("DELETE /api/users");
  });
  ```

#### `put(...handlers)`

Registers a PUT route.

- **Parameters:**

  - `handlers` (...function): Route handler functions.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.route("/api/users").put((req, { send }) => {
    send("PUT /api/users");
  });
  ```

#### `patch(...handlers)`

Registers a PATCH route.

- **Parameters:**

  - `handlers` (...function): Route handler functions.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.route("/api/users").patch((req, { send }) => {
    send("PATCH /api/users");
  });
  ```

#### `options(...handlers)`

Registers an OPTIONS route.

- **Parameters:**

  - `handlers` (...function): Route handler functions.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.route("/api/users").options((req, { send }) => {
    send("OPTIONS /api/users");
  });
  ```

#### `prefix(prefixPath)`

Sets a prefix for all routes registered using this RouteManager instance.

- **Parameters:**

  - `prefixPath` (string): The prefix path for the routes.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router
    .route("/users")
    .prefix("/api/v1")
    .get((req, { send }) => {
      send("GET /api/v1/users");
    });
  ```
#### `globalMiddleware(middleware)`

Sets the global middleware for the route manager.

- **Parameters:**

  - `middleware` (Array or Function): An array of middleware functions.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Throws:**

  - `RouteManagerValidationError`: Throws an error if middleware is not provided as an array.

- **Example:**

  ```javascript
  const router = new Route();
  router.globalMiddleware([middlewareFunction1, middlewareFunction2]);
  ```

#### `expose`

Exposes the RouteManager instance for exporting.

- **Returns:**

  - `RouteManager`: The RouteManager instance.

- **Example:**

  ```javascript
  const {expose} = new Route();
  module.exports = expose
  ```