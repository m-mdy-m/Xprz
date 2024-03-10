## `CsrfHandler`

Configures Cross-Site Request Forgery (CSRF) protection middleware in an Express application.

### Methods

#### `genSecret()`

Generates a CSRF secret and stores it in the user's session. If the CSRF secret already exists in the session, it will be overwritten.

- **Returns:**
  - `Function`: Middleware function for generating and storing the CSRF secret.

#### `provideCsrfToken(endPoint = "/get-csrf-token")`

Sets up an endpoint to provide the CSRF token to the frontend.

- **Parameters:**
  - `endPoint` (string, optional): The endpoint path to provide the CSRF token. Default is `"/get-csrf-token"`.

- **Returns:**
  - `Function`: The Express route handler for the CSRF token endpoint.

#### `getCsrf()`

Retrieves the configured CSRF middleware.

- **Returns:**
  - `Function`: The configured CSRF middleware.

- **Usage:**
  ```javascript
  const csrfMiddleware = csrfHandler.getCsrf();
  ```

#### `configure(options)`

Configures CSRF protection middleware with custom options.

- **Parameters:**
  - `options` (Object): Options for configuring CSRF protection.

- **Returns:**
  - `Function`: The configured CSRF protection middleware.

- **Usage:**
  ```javascript
  const csrfOptions = { cookie: true };
  const csrfMiddleware = csrfHandler.configure(csrfOptions);
  ```

#### `regenerateSecret(interval = 3600000)`

Regenerates the CSRF secret periodically to mitigate CSRF token leakage risks.

- **Parameters:**
  - `interval` (number, optional): The interval in milliseconds for regenerating the CSRF secret. Default is `3600000` (1 hour).

- **Note:**
  This method automatically regenerates the CSRF secret at regular intervals.

### Example Usage:

```javascript
const csrfOptions = { cookie: true };
const csrfMiddleware = csrfHandler.configure(csrfOptions);

app.use(csrfMiddleware);
csrfHandler.provideCsrfToken("/api/get-csrf-token");