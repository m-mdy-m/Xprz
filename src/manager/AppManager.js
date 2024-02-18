const App = require("../shared/App");
const express = require("express");

/**
 * Manages middleware and configuration for an Express application.
 */
class AppManager extends App {
  /**
   * Creates an instance of AppManager.
   */
  constructor() {
    super();
  }

  /**
   * Sets the error handler middleware for the Express application.
   *
   * @param {...Function} errorHandler - The error handler middleware function(s).
   * @returns {void}
   *
   * @example
   * const appManager = new AppManager();
   * appManager.setErrorHandler(errorHandler);
   */
  setErrorHandler(errorHandler) {
    this.use(...errorHandler);
  }

  /**
   * Adds middleware function(s) to the Express application.
   *
   * @param {...Function} handler - The middleware function(s) to add.
   * @returns {void}
   *
   * @example
   * const appManager = new AppManager();
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
   * const appManager = new AppManager();
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
   * const appManager = new AppManager();
   * appManager.static('public');
   */
  static(...handlers) {
    this.use(express.static(...handlers));
  }

  /**
   * Enables JSON and URL-encoded parsing for request bodies.
   *
   * @returns {void}
   *
   * @example
   * const appManager = new AppManager();
   * appManager.useJsonBody();
   */
  useJsonBody(status=false) {
    this.use(express.json());
    this.use(express.urlencoded({ extended: status }));
  }

  /**
   * Shuts down the Express application.
   *
   * @returns {Promise<void>} A promise that resolves when the application is shut down.
   *
   * @example
   * const appManager = new AppManager();
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
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = AppManager;
