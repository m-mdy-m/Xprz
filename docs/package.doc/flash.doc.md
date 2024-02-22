## `FlashHandler`

Configures flash middleware in an Express application.

### Constructor

- **Parameters:**
  - `flash` (Function): The flash package.

### Methods

#### `getFlash()`

Get the configured flash middleware.

- **Returns:**
  - `Function`: The configured flash middleware.

- **Usage:**
  ```javascript
  const { flash } = new Package();
  const flashMiddleware = flash().getFlash();
  ```