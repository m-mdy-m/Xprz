const express = require("express");
const { getApp } = require("../shareApp");
const { setApp, setExp } = require("../shareApp");
const { ShutdownError, RouteLoadingError } = require("../Errors/App.error");
const fs = require("fs");
const path = require("path");
const $read = require("../utils/read");
const {
  ExpressNotInitializedError,
  ServerAlreadyRunningError,
  ServerNotRunningError,
} = require("../Errors/App.error");

// Set the Express module using the shared utility function
setExp(express);

/**
 * Manages the Express application lifecycle.
 */
class App {
  constructor() {
    // Initialize properties
    /** @private */
    this.app = null; // Express application instance
    /** @private */
    this.runApp = false; // Flag indicating if the application is running
    /** @private */
    this.server = null; // Server instance

    this.initApp = this.initApp.bind(this);
    this.launch = this.launch.bind(this);
    this.listen = this.listen.bind(this);
    this.use = this.use.bind(this);
    this.closeServer = this.closeServer.bind(this);
    this.getExpress = this.getExpress.bind(this);
    this.useCtx = this.useCtx.bind(this)
    this.set = this.set.bind(this);
    this.static = this.static.bind(this);
    this.bodyParsing = this.bodyParsing.bind(this);
    this.shutdown = this.shutdown.bind(this);
    this.setViewEngine = this.setViewEngine.bind(this);
    this.loadRoutes = this.loadRoutes.bind(this);
    /** @private */
    this.loadRoutesRecursively = this.loadRoutesRecursively.bind(this);
  }
  /**
   * Returns the Express module.
   *
   * @returns {Object} The Express module.
   *
   * @example
   * const express = getExpress();
   */
  getExpress() {
    return express;
  }

  /**
   * Initializes the Express application.
   *
   * @returns {Object} The initialized Express application instance.
   *
   * @example
   * const app = initApp();
   */
  initApp() {
    this.app = express();
    setApp(this.app);
    this.runApp = true;
    return this.app;
  }

  /**
   * Starts the Express application to listen on the specified port.
   *
   * @param {number} [port=3000] - The port number to listen on.
   * @param {string} [textLog=`Server is running on port ${port}`] - The text to log when the server starts.
   * @param {boolean} [log=true] - Whether to log the server start message.
   * @returns {void}
   *
   * @example
   * listen(3000, 'Server is running on port 3000', true);
   */
  listen(
    port = 3000,
    textLog = `Server is running on port ${port}`,
    log = true
  ) {
    if (!this.runApp || !this.app) {
      throw new ExpressNotInitializedError();
    }
    if (this.server) {
      throw new ServerAlreadyRunningError();
    }
    this.server = this.app.listen(port, () => {
      if (log) {
        console.log(textLog);
      }
    });
  }
  /**
   * Closes the server if it is running.
   *
   * @param {function} done - Callback function to be called when the server is closed.
   * @returns {void}
   *
   * @example
   * const app = App();
   * app.initApp();
   * app.listen(3000);
   * app.closeServer(() => {
   *   console.log('Server closed.');
   * });
   */
  closeServer(done) {
    if (!this.server) {
      throw new ServerNotRunningError();
    }
    this.server.close(() => {
      this.server = null; // Reset server after closing
      done(); // Call done to end the test
    });
  }
  /**
   * Initializes and launches the Express application.
   *
   * @param {number} [port=3000] - The port number to listen on.
   * @param {string} [textLog=`Server is running on port ${port}`] - The text to log when the server starts.
   * @param {boolean} [log=true] - Whether to log the server start message.
   * @returns {Object} The initialized Express application instance.
   *
   * @example
   * const app = launch();
   */
  launch(
    port = 3000,
    textLog = `Server is running on port ${port}`,
    log = true
  ) {
    if (this.runApp) {
      throw new ServerAlreadyRunningError();
    }
    this.initApp();
    this.listen(port, textLog, log);
    return this.app;
  }
  /**
   * Attaches middleware functions to the Express application.
   *
   * @param {...Function} handler - The middleware function(s) to use.
   * @returns {void}
   *
   * @example
   * const app = App();
   * app.use(express.json());
   * app.use(cors());
   */
  use(...handlers) {
    // Ensure that app is initialized before using it
    if (!this.runApp || !this.app) {
      throw new ExpressNotInitializedError();
    }
    this.app.use(...handlers);
  }
  /**
 * Attaches context-based middleware functions to the Express application.
 * These middleware functions receive a context object containing error, request, and response properties.
 *
 * @param {...Function} handlers - The context-based middleware function(s) to be attached.
 * @throws {ExpressNotInitializedError} Throws an error if the Express application is not initialized.
 * @returns {void}
 * @example
 * const { useCtx } = require("xprz").App();
 * useCtx((ctx, nxt) => {
 *   // Handle middleware logic here
 * });
 */
  useCtx(...handlers){
    if (!this.runApp || !this.app) {
      throw new ExpressNotInitializedError();
    }
    this.app.use((error, req, res, nxt) => {
      const request = { ...new Request(req), ...req };
      const response = { ...new Response(res), ...res };
      const ctx = new Proxy(
        { error, request, response },
        {
          get(target, prop) {
            const cxValue =
              target.error[prop] || target.request[prop] || target.response[prop] || target.response.res[prop] || target.request.req[prop];
            return cxValue !== undefined ? cxValue : null;
          },
        }
      );
      for (const handler of handlers) {
       try {
         handler(ctx, nxt);
       } catch (err) {
         nxt(err); 
       }
      }
      return ctx;
    })
  }
  /**
   * Sets properties on the Express application.
   *
   * @param {...any} handler - The properties to set on the Express application.
   * @returns {void}
   *
   * @example
   * const app = App();
   * app.set('title', 'My Express App');
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
   * const app = App();
   * app.static('public');
   */
  static(...handlers) {
    this.use(this.express.static(path.resolve(process.cwd(), ...handlers)));
  }

  /**
   * Enables JSON and URL-encoded parsing for request bodies.
   *
   * @returns {void}
   *
   * @example
   * const app = App();
   * app.bodyParsing();
   */
  bodyParsing(status = false) {
    this.use(this.express.json());
    this.use(this.express.urlencoded({ extended: status }));
  }

  /**
   * Shuts down the Express application.
   *
   * @returns {Promise<void>} A promise that resolves when the application is shut down.
   *
   * @example
   * const app = App();
   * app.shutdown().then(() => {
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
   * Methods for interacting with setViewEngine instances.
   * @typedef {Object} setViewEngine
   * @property {Function} ejs - Function to configure EJS template engine.
   * @property {Function} hbs - Function to configure Handlebars (HBS) template engine.
   * @property {Function} pug - Function to configure Pug template engine.
   * @param {string} engineName - Name of the template engine to configure.
   * @example
   * // Configure EJS template engine
   * setViewEngine('ejs');
   * 
   * // Configure Handlebars template engine
   * setViewEngine('hbs');
   * 
   * // Configure Pug template engine
   * setViewEngine('pug');
   */
  setViewEngine(engineName) {
    const TemplateEngineConfigurator = require("../utils/templateEngines");
    return new TemplateEngineConfigurator(engineName);
  }

  /**
   * Dynamically loads and mounts routes from a specified directory.
   * @param {string} routeDir - The directory containing route files.
   * @param {boolean} [log=true] - Whether to log the loaded routes.
   * @example
   * const app = App();
   * // Assuming 'routes' is the directory containing route files
   * app.loadRoutes('routes');
   *
   * @example
   * const app = App();
   * // Assuming 'routes' is the directory containing route files
   * // Do not log loaded routes
   * app.loadRoutes('routes', false);
   */
  loadRoutes(routeDir = "routes", log = false) {
    try {
      // Check if the provided directory exists
      if (!fs.existsSync(routeDir)) {
        throw new RouteLoadingError(
          `Route directory ${routeDir} does not exist.`
        );
      }
        this.loadRoutesRecursively(routeDir, log);
    } catch (error) {
      // Throw a RouteLoadingError if any error occurs
      throw new RouteLoadingError(error.message);
    }
  }
  /**
   * Recursively loads routes from the given directory and its subdirectories.
   * @private
   * @param {string} directory - The directory to search for routes.
   * @param {boolean} log - Whether to log the loaded routes.
   */
  loadRoutesRecursively(dir, log) {
    // Read the files in the route directory
    fs.readdirSync(dir).forEach((file) => {
      const routePath = path.join(dir, file.replace(/\\/g, "/"));
      if (fs.statSync(routePath).isDirectory()) {
        // Recursively load routes from subdirectories
        this.loadRoutesRecursively(routePath, log);
      } else if (file.endsWith(".js"|| ".mjs" || ".cjs")) {
        // Dynamically require the route file
        const route = $read(routePath);
        // Mount the route to the application
        const app = getApp();
        try {
          route.attachTo(app);
        } catch (error) {
          throw new RouteLoadingError(
            "Error attaching route to the application: " + error.message
          );
        }
        if (log) {
          console.log(`Route ${routePath} loaded successfully.`);
        }
      } else {
        throw new RouteLoadingError(`Skipping non-JavaScript file: ${routePath}`);
      }
    });
  }
}
module.exports = App;
