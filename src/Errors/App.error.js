class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
class ExpressNotInitializedError extends CustomError {
  constructor() {
    super("Express app has not been initialized yet.");
  }
}



class AppManagerError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class AppManagerConfigurationError extends AppManagerError {
  constructor(message) {
    super(message || "Error occurred in AppManager configuration.");
  }
}

class ShutdownError extends AppManagerError {
  constructor(message) {
    super(message || "Error occurred during AppManager shutdown.");
  }
}
module.exports = { ExpressNotInitializedError,ShutdownError };
