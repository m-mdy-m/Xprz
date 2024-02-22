## `jwt`

Handles JSON Web Tokens (JWT) in an Express application.

### Constructor

- **Parameters:**
  - `jwt` (Object): The JSON Web Token package.

### Methods

#### `getJwt()`

Get the JSON Web Token package.

- **Returns:**
  - `Object`: The JSON Web Token package.

- **Usage:**
  ```javascript
  const { jwt } = new Package();
  const Jwt = jwt().getJwt();
  ```

#### `jwtSign(payload, secretKey, options = {})`

Sign a JWT token with the provided payload and secret key.

- **Parameters:**
  - `payload` (Object): The payload to be signed into the JWT.
  - `secretKey` (string): The secret key used for signing the JWT.
  - `options` (Object): Additional options for signing the JWT. (optional)

- **Returns:**
  - `string`: The signed JWT token.

- **Throws:**
  - `Error`: If the payload or secret key is missing.

- **Usage:**
  ```javascript
  const token = jwt().jwtSign({ userId: '123' }, 'secret');
  ```

#### `jwtVerify(token, secretKey)`

Verify a JWT token with the provided secret key.

- **Parameters:**
  - `token` (string): The JWT token to be verified.
  - `secretKey` (string): The secret key used for verifying the JWT.

- **Returns:**
  - `Object`: The decoded payload if the token is valid.

- **Throws:**
  - `Error`: If the token or secret key is missing, or if the token verification fails.

- **Usage:**
  ```javascript
  const decoded = jwt().jwtVerify(token, 'secret');
  ```

#### `isTokenExpired(token)`

Check if a JWT token is expired.

- **Parameters:**
  - `token` (string): The JWT token to be checked.

- **Returns:**
  - `boolean`: True if the token is expired, false otherwise.

- **Usage:**
  ```javascript
  const isExpired = jwt().isTokenExpired(token);
  ```

#### `jwtAuthenticate(secretKey)`

Middleware for JWT authentication.

- **Parameters:**
  - `secretKey` (string): The secret key used for verifying JWT tokens.

- **Returns:**
  - `function`: Middleware function for JWT authentication.

- **Usage:**
  ```javascript
  // Apply JWT authentication middleware
  app.use(jwt().jwtAuthenticate('your_secret_key'));
  ```