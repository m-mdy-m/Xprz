// HTTPMethodError class extends the built-in Error class to represent errors related to HTTP methods.
class HTTPMethodError extends Error {
  constructor(message) {
    // Call the constructor of the Error class with the provided message.
    super(message);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// HTTPMethodRouteError class extends HTTPMethodError to represent errors that occur during route registration.
class HTTPMethodRouteError extends HTTPMethodError {
  constructor(message) {
    // Call the constructor of HTTPMethodError with a default message if no message is provided.
    super(message || "Error occurred during route registration.");
  }
}

// HTTPMethodExecutionError class extends HTTPMethodError to represent errors that occur during route execution.
class HTTPMethodExecutionError extends HTTPMethodError {
  constructor(message) {
    // Call the constructor of HTTPMethodError with a default message if no message is provided.
    super(message || "Error occurred during route execution.");
  }
}

// Export HTTPMethodRouteError and HTTPMethodExecutionError for use in other modules.
module.exports = { HTTPMethodRouteError, HTTPMethodExecutionError };
