## `CsrfHandler`

Configures CSRF protection middleware in an Express application.

### Methods

#### `genSecret()`

Generate CSRF secret and store it in the user's session. If the CSRF secret already exists in the session, it will be overwritten.

- **Returns:**
  - `Function`: Middleware function for generating and storing CSRF secret.

#### `provideCsrfToken(endPoint = "/get-csrf-token")`

Sets up an endpoint to provide the CSRF token to the frontend.

- **Parameters:**
  - `endPoint` (string, optional): The endpoint path to provide the CSRF token. Default is `"/get-csrf-token"`.

- **Returns:**
  - `Function`: The Express route handler for the CSRF token endpoint.

#### `getCsrf()`

Get the configured CSRF middleware.

- **Returns:**
  - `Function`: The configured CSRF middleware.

- **Usage:**
  ```javascript
  const csrfMiddleware = csrfHandler.getCsrf();
  ```

#### `configure(options)`

Configure CSRF protection middleware with custom options.

- **Parameters:**
  - `options` (Object): Options for configuring CSRF protection.

- **Returns:**
  - `Function`: The configured CSRF protection middleware.

- **Usage:**
  ```javascript
  const csrfOptions = { cookie: true };
  const csrfMiddleware = csrfHandler.configure(csrfOptions);
  ```