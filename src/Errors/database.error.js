// ModuleNotInstalledError class extends the built-in Error class to represent errors when required modules are not installed.
class ModuleNotInstalledError extends Error {
  constructor(packageName) {
    // Call the constructor of the Error class with a dynamically generated message.
    super(
      `The '${packageName}' module is not installed. Please make sure to install it by running 'npm install ${packageName}' before using sessions.`
    );
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// MongoDBConnectionError class extends Error to represent errors related to MongoDB connection.
class MongoDBConnectionError extends Error {
  constructor(message) {
    // Call the constructor of the Error class with the provided message.
    super(message);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// MongoDBOperationError class extends Error to represent errors during MongoDB operations.
class MongoDBOperationError extends Error {
  constructor(operation, message) {
    // Call the constructor of the Error class with a dynamically generated message.
    super(`Error during MongoDB ${operation} operation: ${message}`);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// MySqlConnectionError class extends Error to represent errors related to MySQL connection.
class MySqlConnectionError extends Error {
  constructor(message) {
    // Call the constructor of the Error class with the provided message.
    super(message);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// MySqlQueryError class extends Error to represent errors during MySQL queries.
class MySqlQueryError extends Error {
  constructor(query, error) {
    // Call the constructor of the Error class with a dynamically generated message.
    super(`Error executing query '${query}': ${error}`);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// MySqlTransactionError class extends Error to represent errors during MySQL transactions.
class MySqlTransactionError extends Error {
  constructor(operation, error) {
    // Call the constructor of the Error class with a dynamically generated message.
    super(`Error during transaction ${operation}: ${error}`);
    // Set the name of the error to the name of the constructor.
    this.name = this.constructor.name;
  }
}

// Export all custom error classes for use in other modules.
module.exports = {
  ModuleNotInstalledError,
  MongoDBConnectionError,
  MongoDBOperationError,
  MySqlConnectionError,
  MySqlQueryError,
  MySqlTransactionError,
};
