/**
 * Example setup for defining API routes using the Xprz framework.
 * This module demonstrates how to define various HTTP methods (POST, GET, PUT, DELETE) for different endpoints within a RESTful API.
 * Additionally, global middleware is applied to all routes within the '/api' group to ensure authentication using the 'verifyToken' middleware.
 */

// Import the Route module from Xprz
const route = require("xprz").Route();

// Import the 'verifyToken' middleware for authentication
const { verifyToken } = $read("middleware/is-auth");

// Apply global middleware to all routes within the '/api' group
route.globalMiddleware([verifyToken]);

// Define routes within the '/api' group
route.group("/api", (r) => {
  
  // POST method for creating a resource
  r.route("/").post((req, res) => {
    // Logic for handling POST requests to '/api'
  });
  
  // GET method for retrieving a resource
  r.route("/").get((req, res) => {
    // Logic for handling GET requests to '/api'
  });
  
  // PUT method for updating a resource
  r.route("/").put((req, res) => {
    // Logic for handling PUT requests to '/api'
  });
  
  // DELETE method for deleting a resource
  r.route("/").del((req, res) => {
    // Logic for handling DELETE requests to '/api'
  });
  // POST method for creating a new resource
  r.route("/new").post((req, res) => {
    // Logic for handling POST requests to '/api/new'
  });

  // PUT method for updating an existing resource
  r.route("/update").put((req, res) => {
    // Logic for handling PUT requests to '/api/update'
  });
});

module.exports = route;
