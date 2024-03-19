// Import necessary modules
const AppManager = require("./src/manager/AppManager");
const DatabaseManager = require("./src/manager/DatabaseManager");
const PackageManager = require("./src/manager/PackageManager");
const AppSharedManager = require("./src/utils/shared.app");
const httpMethod = require("./src/shared/HTTPMethod");
const RouteManager = require("./src/shared/RouteManager");
const $install = require("./src/utils/installPkg");
const $read = require("./src/utils/read");

/**
 * Represents the main application class.
 * @m-mdy-m
 * @package
 */
class Xprz {
  /**
   * Constructs a new instance of the Xprz application.
   */
  constructor() {
    // Expose shared modules
    this.SharedApp = AppSharedManager;

    // Initialize managers
    this.App = AppManager;
    this.Database = DatabaseManager;
    this.Package = PackageManager;

    // Expose HTTP methods
    this.HttpMethod = httpMethod;

    // Expose route manager
    this.Route = RouteManager;
  }
}

// Expose $install and $read globally
global.$install = $install;
global.$read = $read;

// Export the Xprz class
module.exports = Xprz;
