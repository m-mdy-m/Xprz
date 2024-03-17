// Import the `getApp` function from the "../Using" module
const { getApp } = require("../shareApp");
const $install = require("./installPkg");

/**
 * A class for configuring template engines in an Express.js application.
 */
class TemplateEngineConfigurator {
  /**
   * Creates an instance of TemplateEngineConfigurator.
   * @param {string} engineName - Name of the template engine to configure ('ejs', 'hbs', or 'pug').
   * @throws {Error} Throws an error if the application is not initialized.
   */
  constructor(engineName) {
    /**
     * The Express.js application instance.
     * @type {object}
     * @private
     */
    this._app = getApp();
    if (!this._app) {
      throw new Error("Application not initialized.");
    }
    this.ejs = this.ejs.bind(this)
    this.hbs = this.hbs.bind(this)
    this.pug = this.pug.bind(this)
    // Call the appropriate method based on the engineName
    switch (engineName) {
      case 'ejs':
        this.ejs();
        break;
      case 'hbs':
        this.hbs();
        break;
      case 'pug':
        this.pug();
        break;
      default:
        throw new Error('Invalid template engine specified.');
    }
  }

  /**
   * Configures the EJS template engine.
   * @param {string} [dir="views"] - The directory where EJS views are located.
   */
  ejs(dir = "views") {
    $install("ejs");
    // Set the view engine to EJS
    this._app.set("view engine", "ejs");
    // Set the views directory, defaulting to "views" if dir is not provided
    this._app.set("views", dir);
  }

  /**
   * Configures the Handlebars template engine.
   * @param {Function} hbs - The Handlebars function.
   * @param {string} dir - The directory where Handlebars views are located.
   * @param {Object} [options={}] - Additional options for configuring Handlebars.
   */
  hbs(hbs, dir, options = {}) {
    // Default options for Handlebars
    const defaultOptions = {
      defaultLayout: "main",
      layoutsDir: `${dir}/layouts`,
      partialsDir: `${dir}/partials`,
      extname: ".hbs",
    };

    // Combine the default options with any provided options
    const combinedOptions = { ...defaultOptions, ...options };

    // Set the view engine to Handlebars
    this._app.set("view engine", "hbs");
    // Set the views directory
    this._app.set("views", dir);
    // Configure Handlebars engine with the combined options
    this._app.engine(".hbs", hbs(combinedOptions));
  }

  /**
   * Configures the Pug template engine.
   * @param {string} [dir="views"] - The directory where Pug views are located.
   */
  pug(dir = "views") {
    // Set the view engine to Pug
    this._app.set("view engine", "pug");
    // Set the views directory, defaulting to "views" if dir is not provided
    this._app.set("views", dir);
  }
}

// Export an instance of the TemplateEngineConfigurator
module.exports = TemplateEngineConfigurator;
