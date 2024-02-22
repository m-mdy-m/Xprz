const { getApp } = require("../shareApp");
const HTTPMethodError = require("../Errors/HttpMethods.error");
const app = getApp();
/**
 * Represents a utility class for defining HTTP methods in an Express application.
 */
class HTTPMethod {
  /**
   * Creates an instance of HTTPMethod.
   */
  constructor() {
    /** @private */
    this.app = app;
    /** @private */
    this.path = "";
  }

  /**
   * Sets the route path for the HTTP method.
   *
   * @param {string} path - The route path to set.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example');
   */
  setBaseRoute(path) {
    /** @private */
    this.path = path;
    return this;
  }

  /**
   * Adds a prefix to the route path for the HTTP method.
   *
   * @param {string} prefixPath - The prefix to add to the route path.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example').addPrefix('/api');
   */
  addPrefix(prefixPath) {
    this.path = prefixPath + this.path;
    return this;
  }
  /**
   * handler route
   * @private
   */
  registerRoute(method, handler) {
    if (!this.path) {
      throw new HTTPMethodError(
        "Base route is not set. Please set the base route using setBaseRoute() before registering routes."
      );
    }
    this.app[method.toLowerCase()](this.path, handler);
    return this;
  }
  /**
   * Registers a GET request handler for the specified route path.
   *
   * @param {...Function} handler - The request handler(s) to execute.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example').GET((req, res) => {
   *   res.send('GET request received');
   * });
   */
  GET(handler) {
    return this.registerRoute("GET", handler);
  }

  /**
   * Registers a POST request handler for the specified route path.
   *
   * @param {...Function} handler - The request handler(s) to execute.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example').POST((req, res) => {
   *   res.send('POST request received');
   * });
   */
  POST(handler) {
    return this.registerRoute("POST", handler);
  }

  /**
   * Registers a PUT request handler for the specified route path.
   *
   * @param {...Function} handler - The request handler(s) to execute.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example').PUT((req, res) => {
   *   res.send('PUT request received');
   * });
   */
  PUT(handler) {
    return this.registerRoute("PUT", handler);
  }

  /**
   * Registers a DELETE request handler for the specified route path.
   *
   * @param {...Function} handler - The request handler(s) to execute.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example').DELETE((req, res) => {
   *   res.send('DELETE request received');
   * });
   */
  DELETE(handler) {
    return this.registerRoute("DELETE", handler);
  }

  /**
   * Registers a PATCH request handler for the specified route path.
   *
   * @param {...Function} handler - The request handler(s) to execute.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example').PATCH((req, res) => {
   *   res.send('PATCH request received');
   * });
   */
  PATCH(handler) {
    return this.registerRoute("PATCH", handler);
  }

  /**
   * Registers an OPTIONS request handler for the specified route path.
   *
   * @param {...Function} handler - The request handler(s) to execute.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example').OPTIONS((req, res) => {
   *   res.send('OPTIONS request received');
   * });
   */
  OPTIONS(handler) {
    return this.registerRoute("OPTIONS", handler);
  }

  /**
   * Registers a HEAD request handler for the specified route path.
   *
   * @param {...Function} handler - The request handler(s) to execute.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example').HEAD((req, res) => {
   *   res.send('HEAD request received');
   * });
   */
  HEAD(handler) {
    return this.registerRoute("HEAD", handler);
  }

  /**
   * Registers a TRACE request handler for the specified route path.
   *
   * @param {...Function} handler - The request handler(s) to execute.
   * @returns {HTTPMethod} The HTTPMethod instance.
   *
   * @example
   * const httpMethod = new HTTPMethod();
   * httpMethod.setBaseRoute('/example').TRACE((req, res) => {
   *   res.send('TRACE request received');
   * });
   */
  TRACE(handler) {
    return this.registerRoute("TRACE", handler);
  }
}

module.exports = HTTPMethod;
