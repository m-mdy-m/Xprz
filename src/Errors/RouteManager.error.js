class RouteManagerError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
class RouteManagerValidationError extends RouteManagerError {
  constructor(message) {
    super(message || "Route validation error occurred.");
  }
}
class RouteNotFoundError extends RouteManagerError {
  constructor(message) {
    super(message || "Route not found.");
  }
}
class RouteMethodError extends RouteManagerError {
  constructor(message) {
    super(message || "Invalid HTTP method specified.");
  }
}
class RouteRegistrationError extends RouteManagerError {
  constructor(message) {
    super(message || "Error occurred while registering route.");
  }
}
class RouteInitializationError extends RouteManagerError {
  constructor(message) {
    super(message || "Error occurred during RouteManager initialization.");
  }
}
module.exports = {
  RouteManagerValidationError,
  RouteMethodError,
  RouteRegistrationError,
  RouteNotFoundError,
  RouteInitializationError,
};
