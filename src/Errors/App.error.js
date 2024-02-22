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

module.exports = { ExpressNotInitializedError };
