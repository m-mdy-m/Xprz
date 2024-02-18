class MySql {
  constructor(pkg) {
    this.mysql = pkg;
  }
  connect(db, log = true, textLog = "MySqlConnected") {
    this.connection = this.mysql({
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
  /** @private */
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
  endConnect(log = true, textLog = "MySQL connection ended") {
    if (this.connection) {
      this.connection.end();
      if (log) {
        console.log(textLog);
      }
    }
    throw new Error("No MySql Connection");
  }
  async create(tableName, values) {
    const sql = `INSERT INTO ${tableName} SET ?`;
    const result = await this.query(sql, values);
    return result;
  }

  async read(tableName, condition) {
    const sql = `SELECT * FROM ${tableName} WHERE ?`;
    const result = await this.query(sql, condition);
    return result;
  }

  async update(tableName, values, condition) {
    const sql = `UPDATE ${tableName} SET ? WHERE ?`;
    const result = await this.query(sql, [values, condition]);
    return result;
  }

  async delete(tableName, condition) {
    const sql = `DELETE FROM ${tableName} WHERE ?`;
    const result = await this.query(sql, condition);
    return result;
  }
}
