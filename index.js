const AppManager = require("./src/manager/AppManager");
const DatabaseManager = require("./src/manager/DatabaseManager");
const PackageManager = require("./src/manager/PackageManager");
const httpMethod = require("./src/shared/HTTPMethod");
const RouteManager = require("./src/shared/RouteManager");

class XPress {
  constructor() {
    this.App = AppManager;
    this.Database = DatabaseManager;
    this.Package = PackageManager;
    this.httpMethod = httpMethod;
    this.RouteManager = RouteManager;
  }
}
module.exports = XPress;
