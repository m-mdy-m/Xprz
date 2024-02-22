## `CorsHandler`

Configures CORS middleware in an Express application.

### Constructor

- **Parameters:**
  - `cors` (Function): The CORS package.
  - `options` (Object): Options for configuring CORS middleware.

### Methods

#### `get()`

Get the configured CORS middleware.

- **Returns:**
  - `Function`: The configured CORS middleware.

- **Usage:**
  ```javascript
  const {cors} = new Package()
  const corsMiddleware = cors().get();
