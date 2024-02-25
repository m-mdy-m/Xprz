/**
 * A class for managing environment variables using the dotenv library.
 */
class Dotenv {
    /**
     * Creates an instance of Dotenv.
     * @param {Object} pkg - The package object for dotenv.
     */
    constructor(pkg) {
      /** @private */
      this.dotenv = pkg;
      this.setup = this.setup.bind(this);
      this.getDot = this.getDot.bind(this);
    }
  
    /**
     * Get the underlying dotenv instance.
     * @returns {Object} - The dotenv instance.
     * @example
     * const dotenvInstance = new Dotenv(require('dotenv'));
     * const dotenv = dotenvInstance.getDot();
     */
    getDot() {
      return this.dotenv;
    }
  
    /**
     * Setup dotenv configuration.
     * @param {Object} [options={}] - Options for dotenv configuration.
     * @param {boolean} [log=false] - Whether to log success message or not.
     * @returns {boolean} - Returns true if .env file was loaded successfully, false otherwise.
     * @example
     * const dotenvInstance = new Dotenv(require('dotenv'));
     * const success = dotenvInstance.setup(true,{});
     * if (success) {
     *   // Environment variables loaded successfully
     * } else {
     *   // Failed to load environment variables
     * }
     */
    setup(options = {}, log = false) {
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
  