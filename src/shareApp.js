/**
 * Utility class for managing the Express application instance.
 */
class ShareApp {
  /**
   * Creates an instance of ShareApp.
   */
  constructor() {
    // Initialize properties
    this.appInstance = null;
  }

  /**
   * Sets the current Express application instance.
   * 
   * @param {Object} app - The Express application instance to set.
   * 
   * @example
   * const express = require('express');
   * const app = express();
   * setApp(app);
   */
  setAppInstance(app) {
    this.appInstance = app;
  }

  /**
   * Gets the current Express application instance.
   * 
   * @returns {Object|null} The Express application instance, or null if not initialized.
   * 
   * @example
   * const app = getApp();
   * if (app) {
   *   // Use the Express application instance
   * } else {
   *   throw new Error('Express app instance has not been initialized yet.');
   * }
   */
  getAppInstance() {
    if (!this.appInstance) {
      throw new Error("Express app instance has not been initialized yet.");
    }
    return this.appInstance;
  }
}

// Create an instance of ShareApp
const shareApp = new ShareApp();

// Export methods bound to the ShareApp instance
module.exports = {
  /**
   * Sets the current Express application instance.
   * 
   * @param {Object} app - The Express application instance to set.
   * 
   * @example
   * const express = require('express');
   * const app = express();
   * setApp(app);
   */
  setApp: shareApp.setAppInstance.bind(shareApp),

  /**
   * Gets the current Express application instance.
   * 
   * @returns {Object|null} The Express application instance, or null if not initialized.
   * 
   * @example
   * const app = getApp();
   * if (app) {
   *   // Use the Express application instance
   * } else {
   *   throw new Error('Express app instance has not been initialized yet.');
   * }
   */
  getApp: shareApp.getAppInstance.bind(shareApp),
};
