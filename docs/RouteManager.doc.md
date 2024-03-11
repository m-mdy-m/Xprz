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

#### `setRoute(path)`

Sets the base path for the route manager.

- **Parameters:**
  - `path` (string): Base path for the route manager.

- **Returns:**
  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.setRoute("/api");
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
    r.get("/users", (req, {send}) => {
      send("GET /api/users");
    });
  });
  ```

#### `get(...handlers)`

Registers a GET route.

- **Parameters:**
  - `handlers` (...function): Route handler functions.

- **Returns:**
  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.setRoute("/api/users").get((req, {send}) => {
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
  router.setRoute("/api/users").post((req, {send}) => {
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
  router.setRoute("/api/users").del((req, {send}) => {
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
  router.setRoute("/api/users").put((req, {send}) => {
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
  router.setRoute("/api/users").patch((req, {send}) => {
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
  router.setRoute("/api/users").options((req, {send}) => {
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
  router.setRoute("/users").prefix("/api/v1").get((req, {send}) => {
    send("GET /api/v1/users");
  });
  ```

#### `setError(errorHandler)`

Registers error handling middleware.

- **Parameters:**
  - `errorHandler` (function): Error handling middleware function.

- **Returns:**
  - `RouteManager`: The RouteManager instance.

- **Example:**
  ```javascript
  const router = new Route();
  router.setError(errorHandlerFunction);
  ```