const { getExpress } = require("./AppManager");

/**
 * Represents a route manager for defining routes using Express.
 */
class Route {
  /**
   * Creates an instance of Route.
   */
  constructor() {
    const express = getExpress();
    // Create a new router instance from Express
    this.router = express.Router();
  }

  /**
   * Sets the route path for the current route.
   * 
   * @param {string} path - The route path.
   * @returns {Route} The Route instance for method chaining.
   * 
   * @example
   * const route = new Route();
   * route.setRoute("/users");
   */
  setRoute(path) {
    this.path = path;
    return this;
  }

  /**
   * Defines a GET route.
   * 
   * @param {...Function} handler - The route handler functions.
   * @returns {Route} The Route instance for method chaining.
   * 
   * @example
   * const route = new Route();
   * route.setRoute("/users").get((req, res) => {
   *   res.send("GET request to /users");
   * });
   */
  get(...handler) {
    this.router.get(this.path, ...handler);
    return this;
  }

  /**
   * Defines a POST route.
   * 
   * @param {...Function} handler - The route handler functions.
   * @returns {Route} The Route instance for method chaining.
   * 
   * @example
   * const route = new Route();
   * route.setRoute("/users").post((req, res) => {
   *   res.send("POST request to /users");
   * });
   */
  post(...handler) {
    this.router.post(this.path, ...handler);
    return this;
  }

  /**
   * Defines a DELETE route.
   * 
   * @param {...Function} handler - The route handler functions.
   * @returns {Route} The Route instance for method chaining.
   * 
   * @example
   * const route = new Route();
   * route.setRoute("/users").del((req, res) => {
   *   res.send("DELETE request to /users");
   * });
   */
  del(...handler) {
    this.router.delete(this.path, ...handler);
    return this;
  }

  /**
   * Defines a PUT route.
   * 
   * @param {...Function} handler - The route handler functions.
   * @returns {Route} The Route instance for method chaining.
   * 
   * @example
   * const route = new Route();
   * route.setRoute("/users").put((req, res) => {
   *   res.send("PUT request to /users");
   * });
   */
  put(...handler) {
    this.router.put(this.path, ...handler);
    return this;
  }

  /**
   * Attaches the route to the specified Express application.
   * 
   * @param {Object} app - The Express application instance.
   * @returns {void}
   * 
   * @example
   * const app = getApp()
   * const route = new Route();
   * route.setRoute("/users").get((req, res) => {
   *   res.send("GET request to /users");
   * }).attachTo(app);
   */
  attachTo(app) {
    app.use(this.router);
  }
}

module.exports = Route;
