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
    this.route = this.route.bind(this)
  }
  setDefaultMiddleware(middleware){
    this.middleware.push(middleware)

    this.hasMIddleware = this.middleware.length > 0 ? true : false
    return this
  }
  /**
   * Sets the response object.
   * @param {object} res - Express response object.
   * @private
   */
  setRes(res) {
    if (!res ) {
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
   * router.route("/").get(()=>{
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
   * router.route("/").get(()=>{
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
   * Registers a GET route.
   * @param {...function} handlers - Route handler functions.
   * @returns {RouteManager} The RouteManager instance.
   * @example
   * const router = new Route()
   * router.route("/api/users").get((req, res) => {
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
   * router.route("/api/users").post((req, res) => {
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
   * router.route("/api/users").del((req, res) => {
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
   * router.route("/api/users").put((req, res) => {
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
   * router.route("/api/users").patch((req, res) => {
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
   * router.route("/api/users").options((req, res) => {
   *   res.send("OPTIONS /api/users");
   * });
   */
  options(...handlers) {
    return this.registerMethod("options", ...handlers);
  }
  /**
   * Sets a prefix for all routes registered using this RouteManager instance.
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
    return  (req, res) =>{
      try {
        this.setRes(res);
        this.setReq(req);
        const request = { ...this.req(), ...req };
        const response = { ...this.res(), ...res };
        handlers.forEach((handler) => {
          handler(request, response);
        });
      } catch (error) {
        // Handle errors that occur within the request handler
        throw new RouteRegistrationError(
          `Error in request handler: ${error.message}`
        );
      }
    }
  }
  /**
   * Registers a route with the given method, path, and handlers.
   * @private
   */
  registerRoute(method, handlers) {
    try {
      // Combine middleware with route handlers
      const routeHandlers = [
        ...this.middleware,
        this.createRequestHandler(handlers),
      ];
      // Register the route with Express router
      this.router[method](this.path, routeHandlers);
    } catch (error) {
      // Handle errors that occur during route registration
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
