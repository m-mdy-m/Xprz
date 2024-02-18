/**
 * Represents a utility class for managing the Express application instance.
 */
class Using {
  constructor() {
    // Initialize properties
    this.appInstance = null;
    // Method to set the Express application instance
    this.setAppInstance = function (app) {
      this.appInstance = app;
    };
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
   *   console.log('Express app instance has not been initialized yet.');
   * }
   */
  getAppInstance() {
    if (!this.appInstance) {
      console.log("Express app instance has not been initialized yet.");
    }
    return this.appInstance;
  }
}

// Create an instance of Using
const using = new Using();

// Export methods bound to the Using instance
module.exports = {
  setApp: using.setAppInstance.bind(using),
  getApp: using.getAppInstance.bind(using),
};
