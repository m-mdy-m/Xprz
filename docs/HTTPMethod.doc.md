## `HTTPMethod`

Represents a utility class for defining HTTP methods in an Express application.

### Constructor

- **Parameters:**
  - None

### Methods

#### `setBaseRoute(path)`

Sets the route path for the HTTP method.

- **Parameters:**
  - `path` (string): The route path to set.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example');
  ```

#### `addPrefix(prefixPath)`

Adds a prefix to the route path for the HTTP method.

- **Parameters:**
  - `prefixPath` (string): The prefix to add to the route path.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example').addPrefix('/api');
  ```

#### `GET(handler)`

Registers a GET request handler for the specified route path.

- **Parameters:**
  - `handler` (...Function): The request handler(s) to execute.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example').GET((req, res) => {
    res.send('GET request received');
  });
  ```

#### `POST(handler)`

Registers a POST request handler for the specified route path.

- **Parameters:**
  - `handler` (...Function): The request handler(s) to execute.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example').POST((req, res) => {
    res.send('POST request received');
  });
  ```

#### `PUT(handler)`

Registers a PUT request handler for the specified route path.

- **Parameters:**
  - `handler` (...Function): The request handler(s) to execute.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example').PUT((req, res) => {
    res.send('PUT request received');
  });
  ```

#### `DELETE(handler)`

Registers a DELETE request handler for the specified route path.

- **Parameters:**
  - `handler` (...Function): The request handler(s) to execute.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example').DELETE((req, res) => {
    res.send('DELETE request received');
  });
  ```

#### `PATCH(handler)`

Registers a PATCH request handler for the specified route path.

- **Parameters:**
  - `handler` (...Function): The request handler(s) to execute.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example').PATCH((req, res) => {
    res.send('PATCH request received');
  });
  ```

#### `OPTIONS(handler)`

Registers an OPTIONS request handler for the specified route path.

- **Parameters:**
  - `handler` (...Function): The request handler(s) to execute.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example').OPTIONS((req, res) => {
    res.send('OPTIONS request received');
  });
  ```

#### `HEAD(handler)`

Registers a HEAD request handler for the specified route path.

- **Parameters:**
  - `handler` (...Function): The request handler(s) to execute.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example').HEAD((req, res) => {
    res.send('HEAD request received');
  });
  ```

#### `TRACE(handler)`

Registers a TRACE request handler for the specified route path.

- **Parameters:**
  - `handler` (...Function): The request handler(s) to execute.

- **Returns:**
  - `HTTPMethod`: The HTTPMethod instance.

- **Example:**
  ```javascript
  const httpMethod = new HTTPMethod();
  httpMethod.setBaseRoute('/example').TRACE((req, res) => {
    res.send('TRACE request received');
  });
  ```