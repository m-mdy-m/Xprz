## Overview

The `App` class manages the lifecycle of an Express application.

## Methods

### `express`

Returns the Express module.

- **Returns:**

  - `Object`: The Express module.

- **Usage:**
  ```javascript
  const xprz = require("xprz");
  const { App } = new xprz();
  const express = new App().getExpress();
  ```

### `initApp`

Initializes the Express application.

- **Returns:**

  - `Object`: The initialized Express application instance.

- **Usage:**
  ```javascript
  const xprz = require("xprz");
  const { App } = new xprz();
  const { initApp } = new App();
  const app = initApp();
  ```

### `listen`

Starts the Express application to listen on the specified port.

- **Parameters:**

  - `port` (number, optional): The port number to listen on. Default is `3000`.
  - `textLog` (string, optional): The text to log when the server starts. Default is `"Server is running on port ${port}"`.
  - `log` (boolean, optional): Whether to log the server start message. Default is `true`.

- **Usage:**
  ```javascript
  const xprsy = require("xprz");
  const { App } = new xprz();
  const { listen } = new App();
  listen(3000, "Server is running on port 3000", true);
  ```

### `closeServer`

Closes the server if it is running.

- **Parameters:**

  - `done` (function): Callback function to be called when the server is closed.

- **Usage:**
  ```javascript
  const xprz = require("xprz");
  const { App } = new xprz();
  const { closeServer } = new App();
  closeServer(() => {
    console.log("Server closed.");
  });
  ```

### `launch`

Initializes and launches the Express application.

- **Parameters:**

  - `port` (number, optional): The port number to listen on. Default is `3000`.
  - `textLog` (string, optional): The text to log when the server starts. Default is `"Server is running on port ${port}"`.
  - `log` (boolean, optional): Whether to log the server start message. Default is `true`.

- **Returns:**

  - `Object`: The initialized Express application instance.

- **Usage:**
  ```javascript
  const xprz = require("xprz");
  const { App } = new xprz();
  const { launch } = new App();
  const app = launch();
  ```

### `use`

Attaches middleware functions to the Express application.

- **Parameters:**

  - `handler` (...Function): The middleware function(s) to use.

- **Usage:**
  ```javascript
  const xprz = require("xprz")
  const { App } = new xprz();
  const { use } = new App();
  use(express.json());
  use(cors());
  ```

### `set`

Sets properties on the Express application.

- **Parameters:**

  - `handler` (...any): The properties to set on the Express application.

- **Usage:**
  ```javascript
  const xprz = require("xprz")
  const { App } = new xprz();
  const { set } = new App();
  set("title", "My Express App");
  ```

### `static`

Serves static files and directories with Express.

- **Parameters:**

  - `handlers` (...any): The parameters for serving static files and directories.

- **Usage:**
  ```javascript
  const xprz = require("xprz")
  const { App } = new xprz();
  const { static } = new App();
  static("public");
  ```

### `useJsonBody`

Enables JSON and URL-encoded parsing for request bodies.

- **Parameters:**

  - `status` (boolean): Whether to enable extended URL-encoded parsing. Default is `false`.

- **Usage:**
  ```javascript
  const xprz = require("xprz")
  const { App } = new xprz();
  const { useJsonBody } = new App();
  useJsonBody();
  ```

### `shutdown`

Shuts down the Express application.

- **Returns:**

  - `Promise<void>`: A promise that resolves when the application is shut down.

- **Usage:**
  ```javascript
  const xprz = require("xprz")
  const { App } = new xprz();
  const { shutdown } = new App();
  shutdown()
    .then(() => {
      console.log("Application shut down successfully.");
    })
    .catch((err) => {
      console.error("Error shutting down application:", err);
    });
  ```

### `setViewEngine`

Creates an instance of `TemplateEngines` to manage template engine configuration.

- **Returns:**

  - `TemplateEngines`: An instance of `TemplateEngines`.

- **Usage:**
  ```javascript
  const xprz = require("xprz")
  const { App } = new xprz();
  const { setViewEngine } = new App();
  setViewEngine('ejs')
  ```

### `loadRoutes`

Dynamically loads and mounts routes from a specified directory.

- **Parameters:**

  - `routeDir` (string): The directory containing route files.
  - `log` (boolean, optional): Whether to log the loaded routes. Default is `true`.

- **Usage:**

  ```javascript
  const xprz = require("xprz")
  const { App } = new xprz();
  const { loadRoutes } = new App();
  // Assuming 'routes' is the directory containing route files
  loadRoutes("routes");
  ```
