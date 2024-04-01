/**
 * Example setup for defining routes using the Xprz framework.
 * This module demonstrates how to define routes for redirecting and accessing protected resources, while applying authentication middleware.
 */

// Import the Route module from Xprz
const {expose,route} = require("xprz").Route();

// Import the 'verifyToken' middleware for authentication
const { verifyToken } = $read("./example/middleware/auth");

// Define a route to redirect to '/home' when accessing '/'
route("/").mid([verifyToken]).get(({redirect}) => redirect("/home"));

// Define a route for accessing the '/home' endpoint with authentication middleware applied
route("/home").mid([verifyToken]).get(getHome);

// Define the getHome handler function to be executed when accessing '/home'
function getHome(ctx) {
  // Logic for handling GET requests to '/home'
}

module.exports = expose
