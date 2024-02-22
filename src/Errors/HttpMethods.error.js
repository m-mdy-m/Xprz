class HTTPMethodError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class HTTPMethodRouteError extends HTTPMethodError {
  constructor(message) {
    super(message || "Error occurred during route registration.");
  }
}

class HTTPMethodExecutionError extends HTTPMethodError {
  constructor(message) {
    super(message || "Error occurred during route execution.");
  }
}

module.exports = { HTTPMethodRouteError, HTTPMethodExecutionError };
