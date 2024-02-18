class MySql {
  constructor(pkg) {
    this.mysql = pkg;
  }
  connect(
    host,
    user,
    password,
    database,
    log = true,
    textLog = "MySqlConnected"
  ) {
    this.connection = this.mysql({
      host: host,
      user: user,
      password: password,
      database: database,
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
  endConnect(log = true, textLog = "MySQL connection ended") {
    if (this.connection) {
      this.connection.end();
      if (log) {
        console.log(textLog);
      }
    }
    throw new Error('No MySql Connection')
  }
}
