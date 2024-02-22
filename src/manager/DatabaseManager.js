const MongoDb = require("../handler/database/MongoDB"),
  MySql = require("../handler/database/MySql"),
  {ModuleNotInstalledError} = require("../Errors/database.error");
function checkPkg(packageName) {
  try {
    const requiredPackage = require(packageName);
    return requiredPackage;
  } catch {
    throw new ModuleNotInstalledError(packageName);
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
    const pkg = checkPkg("mysql") || checkPkg("mysql2");
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
    const pkg = checkPkg("mongodb");
    return new MongoDb(pkg);
  }
}
module.exports = DataBaseManager;
