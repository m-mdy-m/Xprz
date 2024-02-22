## `BodyParser`

Configures body parsing middleware in an Express application.

### Constructor

- **Parameters:**
  - `pkg` (Object): The body-parser package.
  - `use` (Function): The Express app's `use` function.

### Methods

#### `getBodyParser()`

Get the body-parser package.

- **Returns:**
  - `Object`: The body-parser package.

- **Usage:**
  ```javascript
  const {bodyParser} = new Package()
  const pkg = bodyParser().getBodyParser();
  ```

#### `json()`

Configure JSON body parsing middleware.

- **Example:**
  ```javascript
  const {bodyParser} = new Package()
  bodyParser().json();
  ```

#### `encoded(status = false)`

Configure URL-encoded body parsing middleware.

- **Parameters:**
  - `status` (boolean, optional): Whether to parse extended bodies. Default is `false`.

- **Example:**
  ```javascript
  const {bodyParser} = new Package()
  bodyParser().encoded();
  ```

#### `limiting(size)`

Configure JSON body parsing with size limit middleware.

- **Parameters:**
  - `size` (string): The maximum request body size.

- **Example:**
  ```javascript
  const {bodyParser} = new Package()
  bodyParser().limiting('5mb');
  ```

#### `rawTextData()`

Configure raw text body parsing middleware.

- **Example:**
  ```javascript
  const {bodyParser} = new Package()
  bodyParser.rawTextData();
  ```

#### `bufferData()`

Configure raw buffer body parsing middleware.

- **Example:**
  ```javascript
  const {bodyParser} = new Package()
  bodyParser().bufferData();
  ```

#### `xml()`

Configure XML body parsing middleware.

- **Example:**
  ```javascript
  const {bodyParser} = new Package()
  bodyParser.xml();
  ```

#### `csv()`

Configure CSV body parsing middleware.

- **Example:**
  ```javascript
  const {bodyParser} = new Package()
  bodyParser().csv();
  ```