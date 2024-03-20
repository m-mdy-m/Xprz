// Import necessary modules
const AppManager = require("./src/manager/AppManager");
const PackageManager = require("./src/manager/PackageManager");
const AppSharedManager = require("./src/utils/shared.app");
const RouteManager = require("./src/shared/RouteManager");
const $install = require("./src/utils/installPkg");
const $read = require("./src/utils/read");

/**
 * Represents the main application class.
 * @m-mdy-m
 * @class
 * @package
 * @module Xprz
 * @example
 * const Xprz = require("xprz");
 * const { App } = new Xprz();
 * const { initApp, listen, launch } = new App();
 *
 * // Initialize the Express application
 * initApp();
 *
 * // Start the server
 * listen(3000);
 * // Or use the alternative
 * launch();
 */
class Xprz {
  /**
   * Constructs a new instance of the Xprz application.
   * @constructor
   * @m-mdy-m
   * @package
   * @module Xprz
   * @example
   * const Xprz = require("xprz");
   * const { App } = new Xprz();
   * const { initApp, listen, launch } = new App();
   *
   * // Initialize the Express application
   * initApp();
   *
   * // Start the server
   * listen(3000);
   * // Or use the alternative
   * launch();
   */
  constructor() {
    // Expose shared modules
    this.SharedApp = AppSharedManager;

    // Initialize managers
    this.App = AppManager;
    this.Package = PackageManager;

    // Expose route manager
    this.Route = RouteManager;
  }
  /**
   * Retrieve a new instance of the AppManager.
   * @static
   * @returns {AppManager} A new instance of the AppManager.
   */
  static App() {
    return new AppManager();
  }

  /**
   * Retrieve a new instance of the PackageManager.
   * @static
   * @returns {PackageManager} A new instance of the PackageManager.
   */
  static Package() {
    return new PackageManager();
  }

  /**
   * Retrieve a new instance of the RouteManager.
   * @static
   * @returns {RouteManager} A new instance of the RouteManager.
   */
  static Route() {
    return new RouteManager();
  }

  /**
   * Retrieve a new instance of the AppSharedManager.
   * @static
   * @returns {AppSharedManager} A new instance of the AppSharedManager.
   */
  static GetUtilsApp() {
    return new AppSharedManager();
  }
}

// Expose $install and $read globally
/** @global */
global.$read  = $read
global.$install = $install
globalThis.$read = $read;
globalThis.$install = $install;
// Export the Xprz class
module.exports = Xprz;
