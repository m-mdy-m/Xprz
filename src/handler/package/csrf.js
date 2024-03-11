/**
 * CsrfHandler class for configuring CSRF protection middleware in an Express application.
 */
class CsrfHandler {
  /**
   * Creates an instance of CsrfHandler.
   * @param {Function} csrf - The CSRF package.
   * @param {Function} use - The Express app's `use` function.
   * @param {Function} app - The Express app instance.
   * @param {Object|null} option - Options for CSRF protection (optional).
   */
  constructor(csrf, use, app, option = null) {
    /** @private */
    this.csrf = csrf;
    /** @private */
    this.app = app();
    /** @private */
    this.use = use;
    /** @private */
    this.protection = option ? this.csrf(option) : this.csrf();
    /** @private */
    this.use(this.protection);
    // Bind methods to the current instance
    this.getCsrf = this.getCsrf.bind(this);
    this.provideCsrfToken = this.provideCsrfToken.bind(this);
  }
  /**
   * Sets up an endpoint to provide the CSRF token to the frontend.
   * @param {string} endPoint - The endpoint path to provide the CSRF token.
   * @returns {Function} The Express route handler for the CSRF token endpoint.
   */
  provideCsrfToken(endPoint = "/get-csrf-token") {
    return this.app.get(endPoint, (req, res) => {
      res.json({ csrfToken: req.csrfToken() });
    });
  }
  /**
   * Get the configured CSRF middleware.
   * @returns {Function} The configured CSRF middleware.
   */
  getCsrf() {
    return this.csrf;
  }
}

module.exports = CsrfHandler;
