const { getExp } = require("../shareApp");
const Request = require("../handler/router/req/ReqEnhancer");
const Response = require("../handler/router/res/ResEnhancer");
const {
  RouteManagerValidationError,
  RouteRegistrationError,
  RouteInitializationError,
} = require("../Errors/RouteManager.error");
/**
 * RouteManager class handles route management for Express.js.
 * @class
 */
class RouteManager {
  /**
   * Creates a new RouteManager instance.
   */
  constructor() {
    /** @private */
    this.router = getExp().Router();
    this.method = this.method.bind(this)
    this.method()
    /**
     * Middleware functions.
     * @type {Array}
     * @private
     */
    this.middleware = [];
    /** @private */
    this.path = "/";
    /** @private */
    this.response = null;
    /** @private */
    this.request = null;
    this.route = this.route.bind(this);
    this.mids = this.mids.bind(this);
    this.group = this.group.bind(this);
  }
  static HTTP_METHODS =['get', 'post', 'delete', 'put', 'patch', 'options'];
  /**
   * Initializes the prototype methods for each HTTP method.
   * @private
   * @throws {Error} Throws an error if the HTTP method is invalid.
   */
  method() {
    for (const method of RouteManager.HTTP_METHODS) {
      const methodName = method === 'delete' ? 'del' : method;
      RouteManager.prototype[methodName] = function (...handlers) {
        return this.registerMethod(method, ...handlers);
      };
    }
  }
  /**
   * Exposes the RouteManager instance for exporting.
   * @returns {RouteManager} The RouteManager instance.
   */
  get expose() {
    return this;
  }
  /**
   * Sets the global middleware for the route manager.
   * @param {Array} middleware - An array of middleware functions.
   * @returns {RouteManager} The RouteManager instance.
   * @throws {RouteManagerValidationError} Throws an error if middleware is not provided as an array.
   * @example
   * const router = new Route();
   * router.mids([middlewareFunction1, middlewareFunction2]);
   */
  mids(middleware) {
    // Check if middleware is provided and is an array
    if (!middleware || !Array.isArray(middleware)) {
      throw new RouteManagerValidationError(
        "Middleware must be provided as an array."
      );
    }

    // Set the global middleware for the route manager
    /**@private */
    this.middleware = middleware;

    // Update the flag to indicate whether middleware is present
    /**@private */
    this.hasMiddleware = this.middleware.length > 0;

    // Return the RouteManager instance for method chaining
    return this;
  }
  /**
   * Attaches the route manager to an Express app.
   * @param {object} app - Express app instance.
   * @returns {void}
   * @example
   * const app = getApp();
   * const router = new Route()
   * router.attachTo(app);
   */
  attachTo(app) {
    if (typeof app.use !== "function") {
      throw new RouteInitializationError("Invalid Express app instance.");
    }
    app.use(this.router);
  }
  /**
   * Registers middleware for the route manager.
   * @param {function} middleware - Middleware function.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.mid(middlewareFunction);
   */
  mid(middleware) {
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
   * @example
   * const router = new Route()
   * router.route("/api");
   */
  route(path) {
    if (!path || typeof path !== "string" || path.trim().length === 0) {
      throw new RouteManagerValidationError("Base path is required.");
    }
    // Set the base path for the route manager
    /**
     * @private
     */
    this.path = path;
    return this;
  }
  /**
   * Defines a group of routes under a common path.
   * @param {string} mainRoute - Main path for the group of routes.
   * @param {function} callback - Callback function to define grouped routes.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.group("/api", (r) => {
   *   r.route('/users').get((req, res) => {
   *     res.send("GET /api/users");
   *   });
   * });
   */
  group(mainRoute, callback) {
    if (
      !mainRoute ||
      typeof mainRoute !== "string" ||
      mainRoute.trim().length === 0
    ) {
      throw new RouteManagerValidationError("Main route is required.");
    }
    // Create a new RouteManager instance
    const subRouter = new RouteManager();
    // Assign global middleware from the parent router to the sub-router
    subRouter.mids([...this.middleware]);
    // Define routes within the callback function
    callback(subRouter);
    // Mount the sub-route manager on the main route
    this.router.use(mainRoute, subRouter.router);
    return this;
  }
  /**
   * Ends the current group of routes.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route();
   * router.group("/api", (r) => {
   *   r.route('/users').get((req, res) => {
   *     res.send("GET /api/users");
   *   });
   * }).endGroup().get((req, res) => {
   *   res.send("GET /api");
   * });
   */
  endGroup() {
    // Reset the path to the parent's path
    this.path = "/";
    return this;
  }
  /**
   * Sets a prefix for all routes registered mid this RouteManager instance.
   * @param {string} prefixPath - The prefix path for the routes.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.route("/users").prefix("/api/v1").get((req, res) => {
   *   res.send("GET /api/v1/users");
   * });
   */
  prefix(prefixPath) {
    if (
      !prefixPath ||
      typeof prefixPath !== "string" ||
      prefixPath.trim().length === 0
    ) {
      throw new RouteManagerValidationError("Prefix path is required.");
    }
    this.path = prefixPath + this.path;
    return this;
  }
  /**
   * Creates a request handler function that executes the provided handlers.
   * @private
   * @param {Function[]} handlers - An array of handler functions to be executed.
   * @returns {Function} A request handler function.
   */
  createRequestHandler(handlers) {
    return (req, res, next) => {
        const request =new Request(req);
        const response = new Response(res)
        const cx = new Proxy(
          { request, response ,req,res},
          {
            get(target, prop) {
              return target[prop] || target.response[prop] || target.request[prop] || target.req[prop] || target.res[prop];
            },
            set(target,prop,val){
              req[prop] = val
              target.request[prop] = val
              return target[val] = val
            }
          }
        );
        if(Symbol.iterator in Object(handlers)){
          for (const handler of handlers) {
            handler(cx, next);
          }
        }else{
          handlers(cx, next);
        }
    };
  }
  /**
   * Registers a route with the given method, path, and handlers.
   * @private
   */
  registerRoute(method, handlers) {
      // Register the route with Express router
      this.router[method](this.path,this.createRequestHandler(...this.middleware), this.createRequestHandler(handlers));
  }
  /**
   * Registers a method with the given method and handlers.
   * @private
   */
  registerMethod(method, ...handlers) {
    try {
      if (this.hasMiddleware) {
        // Register route with middleware
        this.registerRoute(method, handlers);
      } else {
        // Register route without middleware
        this.router[method](this.path, this.createRequestHandler(handlers));
      }
    } catch (error) {
      // Handle errors that occur during method registration
      throw new RouteRegistrationError(
        `Error registering ${method.toUpperCase()} route: ${error.message}`
      );
    }
    return this;
  }
}

module.exports = RouteManager;
