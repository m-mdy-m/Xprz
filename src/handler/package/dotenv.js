const path = require("path");
const $install = require("../../utils/installPkg");
/**
 * Class representing a handler for managing environment variables using the dotenv library.
 */

class Dotenv {
  constructor() {
    /** @private */
    this.dotenv = $install("dotenv");
    /** @private */
    this.setup = this.setup.bind(this);
    /** @private */
    this.getDot = this.getDot.bind(this);
  }
  /**
   * Get the underlying dotenv instance.
   * @returns {Object} The dotenv instance.
   * @example
   * const dotenvInstance = dotenvHandler.getDot();
   */
  getDot() {
    return this.dotenv;
  }
  /**
   * Setup dotenv configuration.
   * @param {boolean} [log=false] - Whether to log success message or not.
   * @param {Object} [options={}] - Options for dotenv configuration.
   * @returns {boolean} Returns true if .env file was loaded successfully, false otherwise.
   * @example
   * const success = dotenvHandler.setupDot(true, { path: '/path/to/.env' });
   * if (success) {
   *   // Environment variables loaded successfully
   * } else {
   *   // Failed to load environment variables
   * }
   */
  setupDot(
    log = false,
    options = { path: path.resolve(process.cwd(), ".env") }
  ) {
    try {
      const result = this.dotenv.config(options);
      if (result.error) {
        console.error("Error loading .env file:", result.error);
        return false;
      }
      if (log) {
        console.log(".env file loaded successfully");
      }
      return true;
    } catch (error) {
      console.error("Error loading .env file:", error);
      return false;
    }
  }
}
module.exports = Dotenv;
