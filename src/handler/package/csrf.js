/**
 * CsrfHandler class for configuring CSRF protection middleware in an Express application.
 */
class CsrfHandler {
  /**
   * Creates an instance of CsrfHandler.
   * @param {Function} csrf - The CSRF package.
   * @param {Function} use - The Express app's `use` function.
   */
  constructor(csrf, use, app) {
    /** @private */
    this.csrf = csrf;
    /** @private */
    this.app = app;
    /** @private */
    this.use = use;
    /** @private */
    this.protection = this.csrf();
    /** @private */
    this.use(this.protection);
    // Bind methods to the current instance
    this.getCsrf = this.getCsrf.bind(this);
    this.configure = this.configure.bind(this);
    this.genSecret = this.genSecret.bind(this);
    // Automatically generate CSRF secret when the instance is created
    this.genSecret();
  }
  /**
   * Generate CSRF secret and store it in the user's session.
   * If the CSRF secret already exists in the session, it will be overwritten.
   */
  genSecret() {
    return this.use((req, res, nxt) => {
      if (req.session.csrfSecret) {
        req.session.csrfSecret = this.csrf.generateSecret();
      }
      nxt();
    });
  }
  /**
   * Sets up an endpoint to provide the CSRF token to the frontend.
   * @param {string} endPoint - The endpoint path to provide the CSRF token.
   * @returns {Function} The Express route handler for the CSRF token endpoint.
   */
  provideCsrfToken(endPoint = "/get-csrf-token") {
    return this.app.get(endPoint, (req, res) => {
      res.json({ csrfToken: req.session.csrfSecret });
    });
  }
  /**
   * Get the configured CSRF middleware.
   * @returns {Function} The configured CSRF middleware.
   */
  getCsrf() {
    return this.csrf;
  }

  /**
   * Configure CSRF protection middleware with custom options.
   * @param {Object} options - Options for configuring CSRF protection.
   * @returns {Function} The configured CSRF protection middleware.
   */
  configure(options) {
    return this.csrf(options);
  }
}

module.exports = CsrfHandler;
