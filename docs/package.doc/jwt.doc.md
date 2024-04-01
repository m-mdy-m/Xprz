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

#### `signToken(payload, secretKey, options = {})`

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
  const token = jwt().signToken({ userId: '123' }, 'secret');
  ```

#### `verifyToken(token, secretKey)`

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
  const decoded = jwt().verifyToken(token, 'secret');
  ```

#### `isExpired(token)`

Check if a JWT token is expired.

- **Parameters:**
  - `token` (string): The JWT token to be checked.

- **Returns:**
  - `boolean`: True if the token is expired, false otherwise.

- **Usage:**
  ```javascript
  const isExpired = jwt().isExpired(token);
  ```

#### `authenticate(secretKey)`

Middleware for JWT authentication.

- **Parameters:**
  - `secretKey` (string): The secret key used for verifying JWT tokens.

- **Returns:**
  - `function`: Middleware function for JWT authentication.

- **Usage:**
  ```javascript
  // Apply JWT authentication middleware
  app.use(jwt().authenticate('your_secret_key'));
  ```
#### `authorizeUser(allowedRoles)`

Middleware for user authorization based on roles/permissions.

- **Parameters:**
  - `allowedRoles` (Array\<string\>): The roles allowed to access the route.

- **Returns:**
  - `Function`: A middleware function that checks if the user has the required role. If the user has the required role, the next middleware function is called. Otherwise, a 401 Unauthorized response is sent.

- **Throws:**
  - `Error`: If the user is not authenticated or does not have the required role.

- **Usage:**
  ```javascript
  // Protect a route with authorization for admin role
  route('/admin/dashboard').using([ jwt().authorizeUser(['admin'])]).get((ctx) => {
    ctx.json({ message: 'Admin dashboard' });
  });
  ```

#### `refreshToken(expiredToken, secretKey, options = {})`

Refreshes an expired JWT token with a new one.

- **Parameters:**
  - `expiredToken` (string): The expired JWT token to be refreshed.
  - `secretKey` (string): The secret key used for signing the new JWT token.
  - `options` (Object): Additional options for signing the new JWT token. (optional)

- **Returns:**
  - `string`: The new JWT token.

- **Throws:**
  - `Error`: If the expired token or secret key is missing, or if token verification fails.

- **Usage:**
  ```javascript
  const expiredToken = 'your_token';
  const secretKey = 'secret_key';
  const options = { expiresIn: '1d' };
  const newToken = jwt().refreshToken(expiredToken, secretKey, options);
  console.log('New JWT Token:', newToken);
  ```