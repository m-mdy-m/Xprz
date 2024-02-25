const App = require("../shared/App");
const { ShutdownError, RouteLoadingError } = require("../Errors/App.error");
const { getApp } = require("../shareApp");
const fs = require("fs");
const path = require("path");
const $read = require("../utils/read");
/**
 * Manages middleware and configuration for an Express application.
 */
class AppManager extends App {
  /**
   * Creates an instance of AppManager.
   */
  constructor() {
    super();
    /** @private */
    this.express = this.getExpress();
    // Bind methods
    this.setErrorHandler = this.setErrorHandler.bind(this);
    this.middleware = this.middleware.bind(this);
    this.set = this.set.bind(this);
    this.static = this.static.bind(this);
    this.useJsonBody = this.useJsonBody.bind(this);
    this.shutdown = this.shutdown.bind(this);
    this.setTemplateEngine = this.setTemplateEngine.bind(this);
    this.loadRoutes = this.loadRoutes.bind(this);
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
    return super.initApp();
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
    return super.listen(port, textLog, log);
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
  launch(port, textLog, log) {
    return super.launch(port, textLog, log);
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
    return super.closeServer(done);
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
    return super.getExpress();
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
    return super.use(...handler);
  }
  /**
   * Sets the error handler middleware for the Express application.
   *
   * @param {...Function} errorHandler - The error handler middleware function(s).
   * @returns {void}
   *
   * @example
   * const appManager = new App();
   * appManager.setErrorHandler(errorHandler);
   */
  setErrorHandler(...errorHandler) {
    this.use(...errorHandler);
  }

  /**
   * Adds middleware function(s) to the Express application.
   *
   * @param {...Function} handler - The middleware function(s) to add.
   * @returns {void}
   *
   * @example
   * const appManager = new App();
   * appManager.middleware(myMiddlewareFunction);
   */
  middleware(...handler) {
    this.use(...handler);
  }

  /**
   * Sets properties on the Express application.
   *
   * @param {...any} handler - The properties to set on the Express application.
   * @returns {void}
   *
   * @example
   * const appManager = new App();
   * appManager.set('title', 'My Express App');
   */
  set(...handler) {
    this.app.set(...handler);
  }

  /**
   * Serves static files and directories with Express.
   *
   * @param {...any} handlers - The parameters for serving static files and directories.
   * @returns {void}
   *
   * @example
   * const appManager = new App();
   * appManager.static('public');
   */
  static(...handlers) {
    this.use(this.express.static(path.resolve(process.cwd(), ...handlers)));
  }

  /**
   * Enables JSON and URL-encoded parsing for request bodies.
   *
   * @returns {void}
   *
   * @example
   * const appManager = new App();
   * appManager.useJsonBody();
   */
  useJsonBody(status = false) {
    this.use(this.express.json());
    this.use(this.express.urlencoded({ extended: status }));
  }

  /**
   * Shuts down the Express application.
   *
   * @returns {Promise<void>} A promise that resolves when the application is shut down.
   *
   * @example
   * const appManager = new App();
   * appManager.shutdown().then(() => {
   *   console.log('Application shut down successfully.');
   * }).catch((err) => {
   *   console.error('Error shutting down application:', err);
   * });
   */
  async shutdown() {
    return new Promise((resolve, reject) => {
      this.app.close((err) => {
        if (err) {
          reject(
            new ShutdownError(`Error shutting down application: ${err.message}`)
          );
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Methods for interacting with setTemplateEngine instances.
   * @typedef {Object} setTemplateEngine
   * @property {Function} ejs
   * @property {Function} hbs
   * @property {Function} pug
   */
  /**
   * Methods for interacting with setTemplateEngine instances.
   * @typedef {Object} setTemplateEngine
   * @property {Function} ejs - Function to configure EJS template engine.
   * @property {Function} hbs - Function to configure Handlebars (HBS) template engine.
   * @property {Function} pug - Function to configure Pug template engine.
   */

  /**
   * Creates an instance of TemplateEngines to manage template engine configuration.
   * @returns {TemplateEngines} An instance of TemplateEngines.
   * @example
   * const appManager = new App();
   * const templateEngines = appManager.setTemplateEngine();
   * templateEngines.Ejs();
   */
  setTemplateEngine() {
    const { setEjs, setHBS, setPug } = require("../utils/templateEngines");
    return { ejs: setEjs, hbs: setHBS, pug: setPug };
  }
  /**
   * Dynamically loads and mounts routes from a specified directory.
   * @param {string} routeDir - The directory containing route files.
   * @param {boolean} [log=true] - Whether to log the loaded routes.
   * @example
   * const appManager = new AppManager();
   * // Assuming 'routes' is the directory containing route files
   * appManager.loadRoutes('routes');
   *
   * @example
   * const appManager = new AppManager();
   * // Assuming 'routes' is the directory containing route files
   * // Do not log loaded routes
   * appManager.loadRoutes('routes', false);
   */
  loadRoutes(routeDir, log = false) {
    try {
      // Check if the provided directory exists
      if (!fs.existsSync(routeDir)) {
        throw new RouteLoadingError(
          `Route directory ${routeDir} does not exist.`
        );
      }
      // Read the files in the route directory
      fs.readdirSync(routeDir).forEach((file) => {
        const routePath = path.join(routeDir, file.replace(/\\/g, "/"));
        // Check if the file is a JavaScript file
        if (file.endsWith(".js")) {
          // Dynamically require the route file
          const route = $read(routePath);
          // Check if the route is a function
          if (typeof route === "object") {
            // Mount the route
            const app = getApp();
            try {
              route.attachTo(app);
            } catch (error) {
              throw new RouteLoadingError(
                "Error attaching route to the application: " + error.message
              );
            }
            if (log) {
              console.log(`Route ${routePath} loaded successfully.`);
            }
          } else {
            console.warn(`Skipping non-function route in file: ${routePath}`);
          }
        } else {
          console.warn(`Skipping non-JavaScript file: ${routePath}`);
        }
      });
    } catch (error) {
      // Throw a RouteLoadingError if any error occurs
      throw new RouteLoadingError(`Error loading routes: ${error.message}`);
    }
  }
}
module.exports = AppManager;
