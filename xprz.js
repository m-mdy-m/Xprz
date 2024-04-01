// Import necessary modules
const App = require("./src/shared/App");
const PackageManager = require("./src/manager/PackageManager");
const RouteManager = require("./src/shared/RouteManager");
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
    // Initialize managers
    this.App = App;
    this.Package = PackageManager;

    // Expose route manager
    this.Route = RouteManager;
  }
  /**
   * Retrieve a new instance of the App.
   * @static
   * @returns {App} A new instance of the App.
   */
  static App() {
    return new App();
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
}

// Expose $install and $read globally
/** @global */
global.$read  = $read
globalThis.$read = $read;
// Export the Xprz class
module.exports = Xprz;
