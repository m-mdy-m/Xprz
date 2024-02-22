// RouteManagerError class extends the built-in Error class to represent errors related to route management.
class RouteManagerError extends Error {
  constructor(message) {
    // Call the constructor of the Error class with the provided message.
    super(message);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// RouteManagerValidationError class extends RouteManagerError to represent errors that occur during route validation.
class RouteManagerValidationError extends RouteManagerError {
  constructor(message) {
    // Call the constructor of RouteManagerError with a default message if no message is provided.
    super(message || "Route validation error occurred.");
  }
}

// RouteNotFoundError class extends RouteManagerError to represent errors when a route is not found.
class RouteNotFoundError extends RouteManagerError {
  constructor(message) {
    // Call the constructor of RouteManagerError with a default message if no message is provided.
    super(message || "Route not found.");
  }
}

// RouteMethodError class extends RouteManagerError to represent errors related to invalid HTTP methods.
class RouteMethodError extends RouteManagerError {
  constructor(message) {
    // Call the constructor of RouteManagerError with a default message if no message is provided.
    super(message || "Invalid HTTP method specified.");
  }
}

// RouteRegistrationError class extends RouteManagerError to represent errors during route registration.
class RouteRegistrationError extends RouteManagerError {
  constructor(message) {
    // Call the constructor of RouteManagerError with a default message if no message is provided.
    super(message || "Error occurred while registering route.");
  }
}

// Export RouteManagerValidationError, RouteMethodError, RouteRegistrationError, and RouteNotFoundError for use in other modules.
module.exports = {
  RouteManagerValidationError,
  RouteMethodError,
  RouteRegistrationError,
  RouteNotFoundError,
};
