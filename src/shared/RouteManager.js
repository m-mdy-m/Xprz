const { getExpress } = require("./AppManager");

/**
 * RouteManager class handles route management for Express.js.
 */
class RouteManager {
  /**
   * Creates a new instance of the RouteManager class.
   */
  constructor() {
    /** @private */
    this.router = getExpress().Router();
    /** @private */
    this.middleware = [];
  }

  /**
   * Attaches the route manager to an Express app.
   * @param {Object} app - The Express app instance.
   */
  attachTo(app) {
    app.use(this.router);
  }
  /**
   * Registers middleware for the route manager.
   * @param {function} middleware - Middleware function.
   * @returns {RouteManager} The RouteManager instance.
   */
  use(middleware) {
    // Add middleware to the list
    this.middleware.push(middleware);
    // Check if middleware is present
    /**
     * @private
     */
    this.hasMiddleware = this.middleware.length > 0 ? true : false;
    return this;
  }

  /**
   * Sets the base path for the route manager.
   * @param {string} path - Base path for the route manager.
   * @returns {RouteManager} The RouteManager instance.
   */
  setBasePath(path) {
    // Set the base path for the route manager
    /**
     * @private
     */
    this.path = path;
    return this;
  }

  /**
   * Groups routes under a common path.
   * @param {string} mainRoute - Main route path.
   * @param {function} callback - Callback function to define grouped routes.
   * @returns {RouteManager} The RouteManager instance.
   */
  group(mainRoute, callback) {
    // Create a new RouteManager instance
    const subRouteManager = new RouteManager();
    // Define routes within the callback function
    callback(subRouteManager);
    // Mount the sub-route manager on the main route
    this.router.use(mainRoute, subRouteManager.router);
    return this;
  }

  /**
   * Registers a route with a GET method.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   */
  get(...handlers) {
    if (this.hasMiddleware) {
      // Register route with middleware
      this.registerRoute("get", handlers);
    }
    // Register route without middleware
    this.router.get(this.path, ...handlers);
    return this;
  }

  /**
   * Registers a route with a POST method.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   */
  post(...handlers) {
    // Register POST route
    this.router.post(this.path, ...handlers);
    return this;
  }

  /**
   * Registers a route with a DELETE method.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   */
  del(...handlers) {
    // Register DELETE route
    this.router.delete(this.path, ...handlers);
    return this;
  }

  /**
   * Registers a route with a PUT method.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   */
  put(...handlers) {
    // Register PUT route
    this.router.put(this.path, ...handlers);
    return this;
  }

  /**
   * Registers a route with the given method, path, and handlers.
   * @private
   */
  registerRoute(method, handlers) {
    // Combine middleware with route handlers
    const routeHandlers = [...this.middleware, ...handlers];
    // Register the route with Express router
    this.router[method](this.path, routeHandlers);
  }
}

module.exports = RouteManager;
