const { getExp } = require("../shareApp");
const Request = require("../handler/router/req/ReqEnhancer");
const Response = require("../handler/router/res/ResEnhancer");

const {
  RouteManagerValidationError,
  RouteRegistrationError,
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
  }
  /**
   * Sets the response object.
   * @param {object} res - Express response object.
   * @private
   */
  setRes(res) {
    if (!res) {
      throw new RouteManagerValidationError("Response object is required.");
    }
    this.response = res;
  }
  /**
   * Sets the request object.
   * @param {object} req - Express request object.
   * @private
   */
  setReq(req) {
    if (!req) {
      throw new RouteManagerValidationError("Request object is required.");
    }
    this.request = req;
  }
  /**
   * Returns an enhanced response object.
   * @returns {Response} Enhanced response object.
   * @example
   * const router = new Route();
   * // Assuming 'response' is the Express response object
   * router.setRoute("/").get(()=>{
   *     const {  send } = router.res()
   *     send("hello world")
   * });
   */
  res() {
    return new Response(this.response);
  }

  /**
   * Returns an enhanced request object.
   * @returns {Request} Enhanced request object.
   * @example
   * const router = new Route();
   * // Assuming 'response' is the Express response object
   * router.setRoute("/").get(()=>{
   * const {  getBody } = router.req()
   * getBody() // Accessing request body
   * });
   */
  req() {
    return new Request(this.request);
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
    app.use(this.router);
  }
  /**
   * Registers middleware for the route manager.
   * @param {function} middleware - Middleware function.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.using(middlewareFunction);
   */
  using(middleware) {
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
   * router.setRoute("/api");
   */
  setRoute(path) {
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
   *   r.get("/users", (req, res) => {
   *     res.send("GET /api/users");
   *   });
   * });
   */
  group(mainRoute, callback) {
    // Create a new RouteManager instance
    const subRouter = new RouteManager();
    // Define routes within the callback function
    callback(subRouter);
    // Mount the sub-route manager on the main route
    this.router.use(mainRoute, subRouter.router);
    return this;
  }

  /**
   * Registers a GET route.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.setRoute("/api/users").get((req, res) => {
   *   res.send("GET /api/users");
   * });
   */
  get(...handlers) {
    return this.registerMethod("get", ...handlers);
  }
  /**
   * Registers a POST route.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.setRoute("/api/users").post((req, res) => {
   *   res.send("POST /api/users");
   * });
   */
  post(...handlers) {
    return this.registerMethod("post", ...handlers);
  }

  /**
   * Registers a DELETE route.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.setRoute("/api/users").del((req, res) => {
   *   res.send("DELETE /api/users");
   * });
   */
  del(...handlers) {
    return this.registerMethod("delete", ...handlers);
  }

  /**
   * Registers a PUT route.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.setRoute("/api/users").put((req, res) => {
   *   res.send("PUT /api/users");
   * });
   */
  put(...handlers) {
    return this.registerMethod("put", ...handlers);
  }
  /**
   * Registers a PATCH route.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.setRoute("/api/users").patch((req, res) => {
   *   res.send("PATCH /api/users");
   * });
   */
  patch(...handlers) {
    return this.registerMethod("patch", ...handlers);
  }

  /**
   * Registers an OPTIONS route.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.setRoute("/api/users").options((req, res) => {
   *   res.send("OPTIONS /api/users");
   * });
   */
  options(...handlers) {
    return this.registerMethod("options", ...handlers);
  }
  /**
   * Registers route parameter validation middleware.
   * @param {function} validator - Route parameter validation middleware function.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.setValidator(paramValidatorFunction);
   */
  setValidator(validator) {
    this.router.param(validator);
    return this;
  }
  /**
   * Sets a prefix for all routes registered using this RouteManager instance.
   * @param {string} prefixPath - The prefix path for the routes.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.setRoute("/users").prefix("/api/v1").get((req, res) => {
   *   res.send("GET /api/v1/users");
   * });
   */
  prefix(prefixPath) {
    this.path = prefixPath + this.path;
    return this;
  }
  /**
   * Registers error handling middleware.
   * @param {function} errorHandler - Error handling middleware function.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.setError(errorHandlerFunction);
   */
  setError(errorHandler) {
    this.router.use(errorHandler);
    return this;
  }
  /**
   * Registers a route with the given method, path, and handlers.
   * @private
   */
  registerRoute(method, handlers) {
    try {
      // Combine middleware with route handlers
      const routeHandlers = [...this.middleware, ...handlers];
      // Register the route with Express router
      this.router[method](this.path, routeHandlers);
    } catch (error) {
      throw new RouteRegistrationError(
        `Error registering ${method.toUpperCase()} route: ${error.message}`
      );
    }
  }
  /**
   * Registers a method with the given method and handlers.
   * @private
   */
  registerMethod(method, ...handlers) {
    try {
      if (this.hasMiddleware) {
        // Register route with middleware
        this.registerRoute(method, ...handlers);
      } else {
        console.log("typeof handlers=>", typeof handlers);
        // Register route without middleware
        this.router[method](this.path, (req, res) => {
          let response = this.setRes(res);
          let request = this.setReq(req);
          handlers.forEach((handler) => {
            handler(request ? request : req, response ? response : res);
          });
        });
      }
    } catch (error) {
      throw new RouteRegistrationError(
        `Error registering ${method.toUpperCase()} route: ${error.message}`
      );
    }
    return this;
  }
}

module.exports = RouteManager;
