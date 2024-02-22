## `FlashHandler`

Configures flash middleware in an Express application.

### Constructor

- **Parameters:**
  - `flash` (Function): The flash package.

### Methods

#### `get()`

Get the configured flash middleware.

- **Returns:**
  - `Function`: The configured flash middleware.

- **Usage:**
  ```javascript
  const { flash } = new Package();
  const flashMiddleware = flash().get();
  ```