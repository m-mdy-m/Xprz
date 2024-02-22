// CustomError class extends the built-in Error class to create custom error types.
class CustomError extends Error {
  constructor(message) {
    // Call the constructor of the Error class with the provided message.
    super(message);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
    // Capture the stack trace for better error logging.
    Error.captureStackTrace(this, this.constructor);
  }
}

// ExpressNotInitializedError class extends CustomError to represent errors related to uninitialized Express apps.
class ExpressNotInitializedError extends CustomError {
  constructor() {
    // Call the constructor of CustomError with a specific message.
    super("Express app has not been initialized yet.");
  }
}

// AppManagerError class extends the built-in Error class to represent errors related to the AppManager.
class AppManagerError extends Error {
  constructor(message) {
    // Call the constructor of the Error class with the provided message.
    super(message);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// AppManagerConfigurationError class extends AppManagerError to represent configuration errors in the AppManager.
class AppManagerConfigurationError extends AppManagerError {
  constructor(message) {
    // Call the constructor of AppManagerError with a default message if no message is provided.
    super(message || "Error occurred in AppManager configuration.");
  }
}

// ShutdownError class extends AppManagerError to represent errors that occur during the shutdown process of the AppManager.
class ShutdownError extends AppManagerError {
  constructor(message) {
    // Call the constructor of AppManagerError with a default message if no message is provided.
    super(message || "Error occurred during AppManager shutdown.");
  }
}

// Export ExpressNotInitializedError and ShutdownError for use in other modules.
module.exports = { ExpressNotInitializedError, ShutdownError };
