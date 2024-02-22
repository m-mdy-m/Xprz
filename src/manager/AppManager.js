const App = require("../shared/App");
const { ShutdownError } = require("../Errors/App.error");
const fs = require("fs");
const path = require("path");
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
    this.use(this.express.static(...handlers));
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
   * Creates an instance of TemplateEngines to manage template engine configuration.
   *
   * @returns {TemplateEngines} An instance of TemplateEngines.
   *
   * @example
   * const appManager = new App();
   * const templateEngines = appManager.setTemplateEngine();
   * templateEngines.Ejs();
   */
  setTemplateEngine() {
    const TemplateEngines = require("../utils/templateEngines");
    return new TemplateEngines();
  }
  /**
   * Dynamically loads and mounts routes from a specified directory.
   * @param {string} routeDir - The directory containing route files.
   * @example
   * const appManager = new App();
   * // Assuming 'routes' is the directory containing route files
   * appManager.loadRoutes('routes');
   */
  loadRoutes(routeDir) {
    fs.readdirSync(routeDir).forEach((file) => {
      const routePath = path.join(routeDir, file);
      const route = require(routePath);
      this.use(route);
      console.log(`Route ${routePath} loaded successfully.`);
    });
  }
}
module.exports = AppManager;
