const App = require("../shared/App"),
  { static } = require("../utils/expressUtils"),
  { use, set } = require("../utils/funcs");
class AppManager extends App {
  constructor() {
    super();
  }
  useSessionMiddleware(...options) {
    if (!this.app) {
      throw new Error("Express app has not been initialized yet.");
    }
    const session = require("express-session");
    if (!session) {
      throw new Error(
        "The 'express-session' module is not installed. Please make sure to install it by running 'npm install express-session' before using sessions."
      );
    }
    this.app.use(session(...options));
  }
  Static(...handlers) {
    use(static(...handlers));
  }
  /**
   * Registers global middleware for the Express application.
   * @param {...function} middleware - Middleware functions to be registered.
   * @returns {void}
   * @example
   * const app = initApp();
   * appManager.useMiddleware(cors(), bodyParser.json());
   */
  useMiddleware(...middleware) {
    this.app.use(...middleware);
  }
  /**
   * Gracefully shuts down the Express application.
   * @returns {Promise<void>}
   * @example
   * const app = initApp();
   * appManager.shutdown().then(() => {
   *     console.log('Server gracefully shut down.');
   * }).catch((err) => {
   *     console.error('Error occurred during shutdown:', err);
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
