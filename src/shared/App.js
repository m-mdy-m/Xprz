const { initApp, listen, getExpress } = require("../utils/appUtils"),
  { setApp } = require("../shareApp");
/**
 * Manages the Express application lifecycle.
 */
class App {
  constructor() {
    // Initialize properties
    /** @private */
    this.app = null;
    /** @private */
    this.runApp = false;
  }
  /**
   * Attaches middleware functions to the Express application.
   *
   * @param {...Function} handler - The middleware function(s) to use.
   * @returns {void}
   *
   * @example
   * const app = new App();
   * app.use(express.json());
   * app.use(cors());
   */
  use(...handler) {
    this.app.use(...handler);
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

// Export methods bound to the AppManager instance
module.exports = App
