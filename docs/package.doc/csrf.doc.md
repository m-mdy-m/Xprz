## `CsrfHandler`

Configures CSRF protection middleware in an Express application.

### Constructor

- **Parameters:**
  - `csrf` (Function): The CSRF package.
### Methods

#### `getCsrf()`

Get the configured CSRF middleware.

- **Returns:**
  - `Function`: The configured CSRF middleware.

- **Usage:**
  ```javascript
  const { csrf } = new Package();
  const csrfMiddleware = csrf().getCsrf();
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