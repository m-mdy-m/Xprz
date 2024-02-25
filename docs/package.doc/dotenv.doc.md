# Dotenv 

### `setup` Method
The `setup` method configures dotenv and loads environment variables from a `.env` file.
```javascript
const success = dotenvInstance.setup();
if (success) {
  // Environment variables loaded successfully
} else {
  // Failed to load environment variables
}
```

### `getDot` Method
The `getDot` method returns the underlying `dotenv` instance.
```javascript
const dotenv = dotenvInstance.getDot();
```

## Examples

### Example 1: Basic Usage
```javascript
const xprz = require('xprz');
const {Package } = new xprz()
const { dotenv} = new Package()
const dotenvInstance = dotenv();
dotenvInstance.setup();
```

### Example 2: Custom Options
```javascript
const xprz = require('xprz');
const {Package } = new xprz()
const { dotenv} = new Package()
const dotenvInstance = dotenv();
dotenvInstance.setup({ path: '/path/to/custom/.env' }, true);
```

## Why Use Dotenv?
- **Simplified Environment Management**: Dotenv makes it easy to manage environment variables in your Node.js applications.
- **Consistent Configuration**: By centralizing environment configuration in a `.env` file, you can ensure consistent behavior across different environments.
- **Improved Security**: Separating sensitive information such as API keys and database credentials into environment variables helps prevent accidental exposure in version control systems.

## Conclusion
The `Dotenv` class provides a convenient way to manage environment variables in Node.js applications, offering simplicity, consistency, and improved security.
