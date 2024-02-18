const { initApp, listen, getExpress } = require("../utils/appUtils");
const { setApp } = require("../Using");

/**
 * Manages the Express application lifecycle.
 */
class AppManager {
  constructor() {
    // Initialize properties
    this.app = null;
    this.runApp = false;
  }
  /**
   * Registers global middleware for the Express application.
   * @param {...function} middleware - Middleware functions to be registered.
   * @returns {void}
   * @example
   * const app = initApp();
   * appManager.useMiddleware(cors(), bodyParser.json());
   */
  useMiddleware(...middleware) {
    this.app.use(...middleware);
  }

  /**
   * Registers error handling middleware for the Express application.
   * @param {function} errorHandler - Error handling middleware function.
   * @returns {void}
   * @example
   * const app = initApp();
   * appManager.setErrorHandler((err, req, res, next) => {
   *     console.error(err);
   *     res.status(500).send('Internal Server Error');
   * });
   */
  setErrorHandler(errorHandler) {
    this.app.use(errorHandler);
  }
  /**
   * Gracefully shuts down the Express application.
   * @returns {Promise<void>}
   * @example
   * const app = initApp();
   * appManager.shutdown().then(() => {
   *     console.log('Server gracefully shut down.');
   * }).catch((err) => {
   *     console.error('Error occurred during shutdown:', err);
   * });
   */
  async shutdown() {
    return new Promise((resolve, reject) => {
      this.app.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  /**
   * Returns the Express module.
   *
   * @returns {Object} The Express module.
   *
   * @example
   * const express = getExpress();
   */
  getExpress() {
    return getExpress();
  }

  /**
   * Initializes the Express application.
   *
   * @returns {Object} The initialized Express application instance.
   *
   * @example
   * const app = initApp();
   */
  initApp() {
    this.app = initApp();
    setApp(this.app);
    this.runApp = true;
    return this.app;
  }

  /**
   * Starts the Express application to listen on the specified port.
   *
   * @param {number} [port=3000] - The port number to listen on.
   * @param {string} [textLog=`Server is running on port ${port}`] - The text to log when the server starts.
   * @param {boolean} [log=true] - Whether to log the server start message.
   * @returns {void}
   *
   * @example
   * listen(3000, 'Server is running on port 3000', true);
   */
  listen(
    port = 3000,
    textLog = `Server is running on port ${port}`,
    log = true
  ) {
    if (this.runApp) {
      listen(this.app, port, textLog, log);
    } else {
      throw new Error("Express app has not been initialized yet.");
    }
  }

  /**
   * Initializes and launches the Express application.
   *
   * @param {number} [port=3000] - The port number to listen on.
   * @param {string} [textLog=`Server is running on port ${port}`] - The text to log when the server starts.
   * @param {boolean} [log=true] - Whether to log the server start message.
   * @returns {Object} The initialized Express application instance.
   *
   * @example
   * const app = launch();
   */
  launch(
    port = 3000,
    textLog = `Server is running on port ${port}`,
    log = true
  ) {
    this.initApp();
    this.listen(port, textLog, log);
    return this.app;
  }
}

// Create an instance of AppManager
const appManager = new AppManager();

// Export methods bound to the AppManager instance
module.exports = {
  getExpress: appManager.getExpress.bind(appManager),
  initApp: appManager.initApp.bind(appManager),
  launch: appManager.launch.bind(appManager),
  listen: appManager.listen.bind(appManager),
};
