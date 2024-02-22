class ModuleNotInstalledError extends Error {
  constructor(packageName) {
    super(
      `The '${packageName}' module is not installed. Please make sure to install it by running 'npm install ${packageName}' before using sessions.`
    );
    this.name = this.constructor.name;
  }
}

class MongoDBConnectionError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class MongoDBOperationError extends Error {
  constructor(operation, message) {
    super(`Error during MongoDB ${operation} operation: ${message}`);
    this.name = this.constructor.name;
  }
}


class MySqlConnectionError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  class MySqlQueryError extends Error {
    constructor(query, error) {
      super(`Error executing query '${query}': ${error}`);
      this.name = this.constructor.name;
    }
  }
  
  class MySqlTransactionError extends Error {
    constructor(operation, error) {
      super(`Error during transaction ${operation}: ${error}`);
      this.name = this.constructor.name;
    }
  }
module.exports = { ModuleNotInstalledError,MongoDBConnectionError,MongoDBOperationError,MySqlConnectionError,MySqlQueryError,MySqlTransactionError};
