/**
 * CorsHandler class for configuring CORS middleware in an Express application.
 */
class CorsHandler {
  /**
   * Creates an instance of CorsHandler.
   * @param {Function} cors - The CORS package.
   * @param {Function} use - The Express app's `use` function.
   * @param {Object} options - Options for configuring CORS middleware.
   */
  constructor(cors, use, options) {
    /** @private */
    this.cors = cors(options);
    /** @private */
    this.use = use;
    this.use(this.cors);
  }

  /**
   * Get the configured CORS middleware.
   * @returns {Function} The configured CORS middleware.
   */
  get() {
    return this.cors;
  }
}

module.exports = CorsHandler;
