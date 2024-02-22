## `Multer`

Wrapper class for configuring and using Multer middleware.

### Methods

#### `getMulter()`

Returns the configured Multer instance.

- **Returns:**
  - `Object`: The Multer instance.

- **Usage:**
  ```javascript
  const { multer } = new Package();
  const Mul = multer().getMulter();
  ```

#### `disk(options)`

Configures disk storage for file uploads.

- **Parameters:**
  - `options` (Object): Options for configuring disk storage.

- **Returns:**
  - `Object`: The configured disk storage.

- **Usage:**
  ```javascript
  const diskStorage = multer().disk({ destination: 'uploads/' });
  ```

#### `filter(filter)`

Sets the file filter for uploaded files.

- **Parameters:**
  - `filter` (Function): The file filter function.

- **Example:**
  ```javascript
  multer().filter((req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  });
  ```

#### `single(options, ...field)`

Configures Multer to handle a single file upload.

- **Parameters:**
  - `options` (Object): Options for configuring Multer.
  - `field` (string): The name of the file field in the form.

- **Example:**
  ```javascript
  multer().single({ dest: 'uploads/' }, 'image');
  ```

#### `array(options, ...fields)`

Configures Multer to handle an array of file uploads.

- **Parameters:**
  - `options` (Object): Options for configuring Multer.
  - `fields` (string[]): The names of the file fields in the form.

- **Example:**
  ```javascript
  multer().array({ dest: 'uploads/' }, 'images');
  ```

#### `fields(options, ...fields)`

Configures Multer to handle multiple fields of files.

- **Parameters:**
  - `options` (Object): Options for configuring Multer.
  - `fields` (string[]): The names of the fields containing files.

- **Example:**
  ```javascript
  multer().fields({ dest: 'uploads/' }, 'avatar', 'photos');
  ```

#### `any(options, ...fields)`

Configures Multer to handle any type of file upload.

- **Parameters:**
  - `options` (Object): Options for configuring Multer.
  - `fields` (string[]): The names of the file fields in the form.

- **Example:**
  ```javascript
  multer().any({ dest: 'uploads/' }, 'files');
  ```