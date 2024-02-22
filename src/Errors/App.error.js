class CustomError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}
class ExpressNotInitializedError extends CustomError {
  constructor() {
    super("Express app has not been initialized yet.");
  }
}

module.exports = {ExpressNotInitializedError}