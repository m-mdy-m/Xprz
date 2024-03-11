# Csrf

Class for configuring Cross-Site Request Forgery (CSRF) protection middleware in an Express application.

### Methods

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
