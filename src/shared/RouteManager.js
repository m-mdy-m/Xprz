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
   * Methods for interacting with res.
   * @typedef {Object} Response
   * @property {Function} write - Writes data to the HTTP response.
   * @property {Function} status - Sets the HTTP status code for the response.
   * @property {Function} links - Sets the links header for the response.
   * @property {Function} send - Sends a response of various types.
   * @property {Function} json - Sends a JSON response.
   * @property {Function} end - Ends the response process.
   * @property {Function} jsonp - Sends a JSON response with JSONP support.
   * @property {Function} setHeaders - Sets the response headers.
   * @property {Function} setHeader - Sets a single response header value.
   * @property {Function} getHeader - Gets a response header value.
   * @property {Function} sendStatus - Sends the HTTP status for the response.
   * @property {Function} sendFile - Sends a file as an octet stream.
   * @property {Function} download - Initiates a file download.
   * @property {Function} contentType - Sets the content type of the response.
   * @property {Function} type - Sets the content type for the response.
   * @property {Function} format - Formats the response.
   * @property {Function} attachment - Sets the attachment header for the response.
   * @property {Function} append - Appends additional header values.
   * @property {Function} set - Sets a response header.
   * @property {Function} header - Alias for set.
   * @property {Function} get - Gets the response header value for a given header.
   * @property {Function} clearCookie - Clears the specified cookie.
   * @property {Function} cookie - Sets a cookie in the response.
   * @property {Function} location - Sets the location header for the response.
   * @property {Function} redirect - Redirects the request.
   * @property {Function} vary - Adds values to the Vary response header.
   * @property {Function} render - Renders a view template.
   * @property {Function} setContentType - Sets the content type of the response.
   * @property {Function} sendHTML - Sends an HTML response.
   * @property {Function} getCookieHandler - Retrieves a handler function for dealing with cookies.
   * @property {Function} getHeadersHandler - Retrieves a handler function for dealing with headers.
   * @property {Function} getJsonHandler - Retrieves a handler function for dealing with JSON data.
   */
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
   * Methods for interacting with the response.
   * @typedef {Object} Request
   * @property {Function} getQuery - Retrieves the query parameters from the request.
   * @property {Function} getBody - Retrieves the request body.
   * @property {Function} getHeadersReq - Retrieves the request headers.
   * @property {Function} getUrl - Retrieves the request URL.
   * @property {Function} getPath - Retrieves the request path.
   * @property {Function} isAjax - Checks if the request is an AJAX request.
   * @property {Function} isSecure - Checks if the request is secure (HTTPS).
   * @property {Function} getIp - Gets the IP address of the request.
   * @property {Function} getCookies - Retrieves the cookies from the request.
   * @property {Function} hasHeader - Checks if the request has a specific header.
   * @property {Function} getHeaderName - Gets the value of a specific request header.
   * @property {Function} getProtocol - Retrieves the protocol used by the request.
   * @property {Function} accepts - Checks if the request accepts a specific content type.
   * @property {Function} param - Retrieves the value of a parameter from the request.
   * @property {Function} is - Checks if the request matches the given types.
   * @property {Function} getMethod - Retrieves the HTTP method of the request.
   * @property {Function} getSubdomains - Retrieves an array of subdomains in the domain name of the request.
   * @property {Function} getHostname - Retrieves the hostname from the request.
   * @property {Function} getHost - Retrieves the host from the request.
   * @property {Function} isFresh - Checks if the request is fresh.
   * @property {Function} isStale - Checks if the request is stale.
   * @property {Function} isXhr - Checks if the request is an XMLHttpRequest (AJAX) request.
   * @property {Function} getLanguages - Retrieves the request language preferences.
   * @property {Function} getEncodings - Retrieves the request encoding preferences.
   * @property {Function} getCharsets - Retrieves the request charset preferences.
   * @property {Function} hasQueryParam - Checks if the request has a specific query parameter.
   * @property {Function} getQueryParam - Gets the value of a specific query parameter.
   * @property {Function} hasBodyParam - Checks if the request has a specific body parameter.
   * @property {Function} getBodyParam - Gets the value of a specific body parameter.
   * @property {Function} hasCookie - Checks if the request has a specific cookie.
   * @property {Function} getCookieName - Gets the value of a specific cookie.
   * @property {Function} hasHeaderIgnoreCase - Checks if the request has a specific header (case-insensitive).
   * @property {Function} getHeaderIgnoreCase - Gets the value of a specific header (case-insensitive).
   * @property {Function} isMethod - Checks if the request method matches a given method.
   * @property {Function} getAllParams - Retrieves all parameters from the request.
   * @property {Function} getAcceptedContentTypes - Retrieves the accepted content types from the request.
   */

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
  /** @private */
  createRequestHandler(handlers){
    return (req, res) => {
      let response = this.setRes(res);
      let request = this.setReq(req);
      handlers.forEach((handler) => {
        if (handler.length > 1) {
          handler(this.req(), this.res());
        } else {
          handler(request ? request : req, response ? response : res);
        }
      });
    }
  }
  /**
   * Registers a route with the given method, path, and handlers.
   * @private
   */
  registerRoute(method, handlers) {
    try {
      // Combine middleware with route handlers
      const routeHandlers = [...this.middleware, this.createRequestHandler(handlers)];
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
        // Register route without middleware
        this.router[method](this.path, this.createRequestHandler(handlers));
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
