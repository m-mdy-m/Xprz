/**
 * Class representing a MySQL database connection manager.
 */
class MySql {
  /**
   * Create a MySQL instance.
   * @param {object} pkg - The MySQL package.
   */
  constructor(pkg) {
    /** @private */
    this.mysql = pkg;
  }

  /**
   * Get the MySQL package.
   * @returns {object} The MySQL package.
   * @example
   * const mysql = new MySql(require('mysql'));
   * const mysqlPackage = mysql.getMySql();
   */
  getMySql() {
    return this.mysql;
  }

  /**
   * Establish a connection to the MySQL database.
   * @param {object} config - The database configuration.
   * @param {boolean} [log=true] - Whether to log connection status.
   * @param {string} [textLog="Database Connected"] - The text to log when connection is successful.
   * @example
   * const config = {
   *   host: 'localhost',
   *   user: 'root',
   *   password: 'password',
   *   database: 'mydatabase'
   * };
   * mysql.connect(config);
   */
  connect(config, log = true, textLog = "Database Connected") {
    this.connection = this.mysql.createConnection(config);
    this.connection.connect((err) => {
      if (err) {
        throw new Error(err.stack);
      }
      if (log) {
        console.log(textLog);
      }
    });
  }

  /**
   * Get the current database connection.
   * @returns {object} The database connection.
   * @example
   * const connection = mysql.getConnection();
   */
  getConnection() {
    return this.connection;
  }

  /**
   * Perform a SQL query.
   * @param {string} sql - The SQL query.
   * @param {Array} values - The values to insert into the query.
   * @returns {Promise} A promise that resolves with the query results.
   * @example
   * const result = await mysql.query('SELECT * FROM users');
   */
  async query(sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  }

  /**
   * Execute a SQL query.
   * @param {string} sql - The SQL query to execute.
   * @returns {Promise} A promise that resolves with the query results.
   * @example
   * const result = await mysql.execute('CREATE TABLE users (id INT, name VARCHAR(255))');
   */
  async execute(sql) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  }

  /**
   * Perform a transaction with multiple queries.
   * @param {Array} queries - An array of query objects containing `sql` and `values`.
   * @returns {Promise} A promise that resolves if the transaction is successful.
   * @example
   * const queries = [
   *   { sql: 'INSERT INTO users SET ?', values: { name: 'John' } },
   *   { sql: 'INSERT INTO addresses SET ?', values: { city: 'New York' } }
   * ];
   * await mysql.transaction(queries);
   */
  async transaction(queries) {
    return new Promise((resolve, reject) => {
      this.connection.beginTransaction(async (err) => {
        if (err) {
          reject(err);
          return;
        }
        try {
          for (let query of queries) {
            await this.query(query.sql, query.values);
          }
          this.connection.commit((err) => {
            if (err) {
              reject(err);
              return;
            }
            resolve("Transaction successful");
          });
        } catch (error) {
          this.connection.rollback(() => {
            reject(error);
          });
        }
      });
    });
  }

  /**
   * End the database connection.
   * @param {boolean} [log=true] - Whether to log disconnection status.
   * @param {string} [textLog="Database connection ended"] - The text to log when connection is closed.
   * @example
   * mysql.endConnection();
   */
  endConnection(log = true, textLog = "Database connection ended") {
    if (this.connection) {
      this.connection.end();
      if (log) {
        console.log(textLog);
      }
    }
    throw new Error("No database connection");
  }

  /**
   * Insert a record into a table.
   * @param {string} tableName - The name of the table.
   * @param {object} values - The values to insert into the table.
   * @returns {Promise} A promise that resolves with the query results.
   * @example
   * await mysql.Create('users', { name: 'John', age: 30 });
   */
  async Create(tableName, values) {
    const sql = `INSERT INTO ${tableName} SET ?`;
    const result = await this.query(sql, values);
    return result;
  }

  /**
   * Read records from a table.
   * @param {string} tableName - The name of the table.
   * @param {object} condition - The condition to filter records.
   * @param {object} [options={}] - Additional options like sorting, limiting, and offsetting.
   * @returns {Promise} A promise that resolves with the query results.
   * @example
   * const users = await mysql.read('users', { id: 1 });
   */
  async read(tableName, condition, options = {}) {
    let sql = `SELECT * FROM ${tableName}`;
    if (condition) {
      sql += " WHERE ?";
    }
    if (options.sortBy) {
      sql += ` ORDER BY ${options.sortBy}`;
    }
    if (options.limit) {
      sql += ` LIMIT ${options.limit}`;
    }
    if (options.offset) {
      sql += ` OFFSET ${options.offset}`;
    }
    const result = await this.query(sql, condition);
    return result;
  }

  /**
   * Update records in a table.
   * @param {string} tableName - The name of the table.
   * @param {object} values - The values to update.
   * @param {object} condition - The condition to filter records.
   * @returns {Promise} A promise that resolves with the query results.
   * @example
   * await mysql.update('users', { age: 25 }, { id: 1 });
   */
  async update(tableName, values, condition) {
    const sql = `UPDATE ${tableName} SET ? WHERE ?`;
    const result = await this.query(sql, [values, condition]);
    return result;
  }

  /**
   * Delete records from a table.
   * @param {string} tableName - The name of the table.
   * @param {object} condition - The condition to filter records.
   * @returns {Promise} A promise that resolves with the query results.
   * @example
   * await mysql.delete('users', { id: 1 });
   */
  async delete(tableName, condition) {
    const sql = `DELETE FROM ${tableName} WHERE ?`;
    const result = await this.query(sql, condition);
    return result;
  }
}

module.exports = MySql;
