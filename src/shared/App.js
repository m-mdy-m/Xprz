const express = require("express");
const { setApp, setExp } = require("../shareApp");

const { ExpressNotInitializedError, ServerAlreadyRunningError, ServerNotRunningError } = require("../Errors/App.error");

// Set the Express module using the shared utility function
setExp(express);

/**
 * Manages the Express application lifecycle.
 */
class App {
  constructor() {
    // Initialize properties
    /** @private */
    this.app = null; // Express application instance
    /** @private */
    this.runApp = false; // Flag indicating if the application is running
    /** @private */
    this.server = null; // Server instance

    this.initApp = this.initApp.bind(this);
    this.launch = this.launch.bind(this);
    this.listen = this.listen.bind(this);
    this.use = this.use.bind(this);
    this.closeServer = this.closeServer.bind(this);
    this.getExpress = this.getExpress.bind(this);
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
    return express;
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
    this.app = express();
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
    if (!this.runApp || !this.app) {
      throw new ExpressNotInitializedError();
    }
    if (this.server) {
      throw new ServerAlreadyRunningError();
    }
    this.server = this.app.listen(port, () => {
      if (log) {
        console.log(textLog);
      }
    });
  }
  /**
   * Closes the server if it is running.
   *
   * @param {function} done - Callback function to be called when the server is closed.
   * @returns {void}
   *
   * @example
   * const app = new App();
   * app.initApp();
   * app.listen(3000);
   * app.closeServer(() => {
   *   console.log('Server closed.');
   * });
   */
  closeServer(done) {
    if (!this.server) {
      throw new ServerNotRunningError();
    }
    this.server.close(() => {
      this.server = null; // Reset server after closing
      done(); // Call done to end the test
    });
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
    if (this.runApp) {
      throw new ServerAlreadyRunningError();
    }
    this.initApp();
    this.listen(port, textLog, log);
    return this.app;
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
  use(...handlers) {
    // Ensure that app is initialized before using it
    if (!this.runApp || !this.app) {
      throw new ExpressNotInitializedError();
    }
    this.app.use((error, req, res, nxt) => {
      const ctx = new Proxy({ error, req, res }, {
          get(target, prop) {
              const cxValue = target.error[prop] || target.req[prop] || target.res[prop];
              return cxValue !== undefined ? cxValue : null;
          }
      });
      for (const handler of handlers) {
          handler(ctx, nxt);
          return ctx;
      }
  });
  }
}

// Export methods bound to the AppManager instance
module.exports = App;
