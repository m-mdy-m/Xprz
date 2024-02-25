const MongoDb = require("../handler/database/MongoDB"),
  MySql = require("../handler/database/MySql"),$install = require('../utils/installPkg')

class DataBaseManager {
  constructor() {}

  /**
   * Create and return a new instance of MySql.
   * @returns {MySql} A new instance of MySql.
   * @example
   * const dbManager = new DataBaseManager();
   * const mysql = dbManager.MySql();
   */
  MySql(pkgname='mysql2') {
    const pkg = $install(pkgname);
    return new MySql(pkg);
  }

  /**
   * Create and return a new instance of MongoDb.
   * @returns {MongoDb} A new instance of MongoDb.
   * @example
   * const dbManager = new DataBaseManager();
   * const mongodb = dbManager.MongoDb();
   */
  MongoDB() {
    const pkg = $install("mongodb");
    return new MongoDb(pkg);
  }
}
module.exports = DataBaseManager;
