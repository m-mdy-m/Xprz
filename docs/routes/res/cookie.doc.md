## `CookieHandler`

Class for handling cookies.

### Constructor

- **Parameters:**
  - `cookie` (string): The initial cookie string.

### Methods

#### `setCookie(name, value, options)`

Sets a cookie with the given name, value, and options.

- **Parameters:**
  - `name` (string): The name of the cookie.
  - `value` (string): The value of the cookie.
  - `options` (Object): Additional options for the cookie (e.g., expiration).

- **Example:**
  ```javascript
  const { cookieManager } = ctx.res;
  cookieManager().setCookie('username', 'john_doe', { expires: 3600 });
  ```

#### `getCookie(name)`

Retrieves the value of a specific cookie by name.

- **Parameters:**
  - `name` (string): The name of the cookie to retrieve.

- **Returns:**
  - `string|undefined`: The value of the cookie, or undefined if not found.

- **Example:**
  ```javascript
  const { cookieManager } = ctx.res;
  const username = cookieManager().getCookie('username');
  ```

#### `getAllCookies()`

Retrieves all cookies as an object.

- **Returns:**
  - `Object`: An object containing all cookies.

- **Example:**
  ```javascript
  const { cookieManager } = ctx.res;
  const allCookies = cookieManager().getAllCookies();
  ```

#### `removeCookie(name, options)`

Removes a cookie with the given name.

- **Parameters:**
  - `name` (string): The name of the cookie to remove.
  - `options` (Object): Additional options for the cookie (e.g., expiration).

- **Example:**
  ```javascript
  const { cookieManager } = ctx.res;
  cookieManager().removeCookie('username');
  ```

#### `isCookie(name)`

Checks if a cookie with the given name exists.

- **Parameters:**
  - `name` (string): The name of the cookie to check.

- **Returns:**
  - `boolean`: True if the cookie exists, otherwise false.

- **Example:**
  ```javascript
  const { cookieManager } = ctx.res;
  const isCookie = cookieManager().isCookie('username');
  ```

#### `clearAllCookies()`

Clears all cookies.

- **Example:**
  ```javascript
  const { cookieManager } = ctx.res;
  cookieManager().clearAllCookies();
  ```

#### `countCookies()`

Gets the number of cookies.

- **Returns:**
  - `number`: The number of cookies.

- **Example:**
  ```javascript
  const { cookieManager } = ctx.res;
  const cookieCount = cookieManager().countCookies();
  ```