const MongoDb = require('../handler/database/MongoDB'), MySql = require('../handler/database/MySql')
function checkPkg(packageName) {
    try {
      const requiredPackage = require(packageName);
      return requiredPackage;
    } catch {throw new Error(`The '${packageName}' module is not installed. Please make sure to install it by running 'npm install ${packageName}' before using sessions.`);
    }
  }
  class DataBaseManager {
    constructor() {}

    /**
     * Create and return a new instance of MySql.
     * @returns {MySql} A new instance of MySql.
     * @example
     * const dbManager = new DataBaseManager();
     * const mysql = dbManager.MySql();
     */
    MySql() {
        const pkg = checkPkg("mysql" || "mysql2");
        return new MySql(pkg);
    }

    /**
     * Create and return a new instance of MongoDb.
     * @returns {MongoDb} A new instance of MongoDb.
     * @example
     * const dbManager = new DataBaseManager();
     * const mongodb = dbManager.MongoDb();
     */
    MongoDb() {
        const pkg = checkPkg('mongodb');
        return new MongoDb(pkg);
    }
}
module.exports = DataBaseManager