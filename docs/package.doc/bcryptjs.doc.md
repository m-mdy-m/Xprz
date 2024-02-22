## `BcryptjsHandler`

Wrapper class for bcryptjs functions.

### Constructor

- **Parameters:**
  - `bcryptjs` (Object): The bcryptjs module.

### Methods

#### `getBcryptjs()`

Get the bcryptjs module.

- **Returns:**
  - `Object`: The bcryptjs module.

- **Usage:**
  ```javascript
  const {bcryptjs} = new Package()
  const bcrypt = bcryptjs().getBcryptjs();
  ```

#### `hash(password, saltRounds = 10)`

Hashes a password.

- **Parameters:**
  - `password` (string): The password to hash.
  - `saltRounds` (number, optional): The number of salt rounds to use (default is 10).

- **Returns:**
  - `string`: The hashed password.

- **Usage:**
  ```javascript
  const {bcryptjs} = new Package()
  const hashedPassword = await bcryptjs().hash('myPassword');
  ```

#### `compare(basePassword, hashedPassword)`

Compares a password with a hashed password to check for a match.

- **Parameters:**
  - `basePassword` (string): The original password.
  - `hashedPassword` (string): The hashed password to compare against.

- **Returns:**
  - `boolean`: True if the passwords match, false otherwise.

- **Usage:**
  ```javascript
  const {bcryptjs} = new Package()
  const isMatch = await bcryptjs().compare('myPassword', hashedPassword);
  ```