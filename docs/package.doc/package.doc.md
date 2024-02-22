## `PackageManager`

Manages various packages and middleware in an Express application.

### Constructor

- **Parameters:**
  - None

### Methods

#### `session(...options)`

Initialize and configure Express session middleware.

- **Parameters:**

  - `options` (...any): Options for configuring the session middleware.

- **Throws:**

  - `Error`: Throws an error if Express app has not been initialized.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  pkgManager.session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  });
  ```

#### `jwt()`

Initialize and configure JWT handler.

- **Returns:**

  - `jwtHandler`: Instance of jwtHandler.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  const jwt = pkgManager.jwt();
  ```

#### `multer()`

Initialize and configure multer middleware.

- **Returns:**

  - `MulterHandler`: Instance of MulterHandler.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  const multer = pkgManager.multer();
  ```

#### `nodemailer()`

Initialize and configure Nodemailer handler.

- **Returns:**

  - `NodemailerHandler`: Instance of NodemailerHandler.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  const nodemailer = pkgManager.nodemailer();
  ```

#### `bcryptjs()`

Initialize and configure bcryptjs handler.

- **Returns:**

  - `bcryptjsHandler`: Instance of bcryptjsHandler.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  const bcryptjs = pkgManager.bcryptjs();
  ```

#### `bodyParser(...handler)`

Initialize and configure body parser middleware.

- **Parameters:**

  - `handler` (...Function): Optional additional handlers to use with body-parser.

- **Returns:**

  - `BodyParser`: Instance of BodyParser.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  const bodyParser = pkgManager.bodyParser();
  ```

#### `csrf()`

Initialize and configure CSRF protection middleware.

- **Returns:**

  - `Csrf`: Instance of Csrf.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  const csrf = pkgManager.csrf();
  ```

#### `cors(...handler)`

Initialize and configure CORS middleware.

- **Parameters:**

  - `handler` (...Function): Optional additional handlers to use with CORS.

- **Returns:**

  - `Cors`: Instance of Cors.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  const cors = pkgManager.cors();
  ```

#### `flash()`

Initialize and configure flash middleware.

- **Returns:**

  - `flash`: Instance of flash.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  const flash = pkgManager.flash();
  ```

#### `connectMongoDbSession(...options)`

Initialize and configure connect-mongodb-session middleware.

- **Parameters:**

  - `options` (...any): Options for configuring the MongoDB session store.

- **Returns:**

  - `Object`: Instance of MongoDB session store.

- **Usage:**
  ```javascript
  const pkgManager = new Package();
  const store = pkgManager.connectMongoDbSession();
  ```
