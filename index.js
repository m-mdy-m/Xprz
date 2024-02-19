const AppManager = require("./src/manager/AppManager");
const DatabaseManager = require("./src/manager/DatabaseManager");
const PackageManager = require("./src/manager/PackageManager");
const { getApp, useApp, setApp } = require("./src/shareApp");
const BaseApp = require("./src/shared/App");
const httpMethod = require("./src/shared/HTTPMethod");
const RouteManager = require("./src/shared/RouteManager");

class XPress {
  constructor() {
    this.Utils = { getApp, useApp, setApp };
    this.App = BaseApp;
    this.AppManager = AppManager;
    this.Database = DatabaseManager;
    this.Package = PackageManager;
    this.HttpMethod = httpMethod;
    this.Route = RouteManager;
  }
}
module.exports = XPress;
