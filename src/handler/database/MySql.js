class MySql {
  constructor(pkg) {
    /** @private */
    this.mysql = pkg;
  }
  getMySql() {
    return this.mysql;
  }
  connect(db, log = true, textLog = "Database Connected") {
    this.connection = this.mysql.createConnection({
      host: db.host,
      user: db.user,
      password: db.password,
      database: db.database,
    });
    this.connection.connect((err) => {
      if (err) {
        throw new Error(err.stack);
      }
      if (log) {
        console.log(textLog);
      }
    });
  }
  getConnection() {
    return this.connection;
  }
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
  endConnection(log = true, textLog = "Database connection ended") {
    if (this.connection) {
      this.connection.end();
      if (log) {
        console.log(textLog);
      }
    }
    throw new Error("No database connection");
  }
  async Create(tableName, values) {
    const sql = `INSERT INTO ${tableName} SET ?`;
    const result = await this.query(sql, values);
    return result;
  }

  async Read(tableName, condition) {
    const sql = `SELECT * FROM ${tableName} WHERE ?`;
    const result = await this.query(sql, condition);
    return result;
  }

  async Update(tableName, values, condition) {
    const sql = `UPDATE ${tableName} SET ? WHERE ?`;
    const result = await this.query(sql, [values, condition]);
    return result;
  }

  async Delete(tableName, condition) {
    const sql = `DELETE FROM ${tableName} WHERE ?`;
    const result = await this.query(sql, condition);
    return result;
  }
}
