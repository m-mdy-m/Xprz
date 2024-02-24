const AppManager = require("./src/manager/AppManager");
const DatabaseManager = require("./src/manager/DatabaseManager");
const PackageManager = require("./src/manager/PackageManager");
const AppSharedManager = require("./src/utils/shared.app");
const httpMethod = require("./src/shared/HTTPMethod");
const RouteManager = require("./src/shared/RouteManager");
const $install = require("./src/utils/setup.pkg");
class Xprz {
  constructor() {
    this.$install = $install
    this.SharedApp  = AppSharedManager;
    this.App = AppManager;
    this.Database = DatabaseManager;
    this.Package = PackageManager;
    this.HttpMethod = httpMethod;
    this.Route = RouteManager;
  }
}
module.exports = Xprz;
