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
  ejs(dir = "views") {
    $install("ejs");
    this._app.set("view engine", "ejs");
    this._app.set("views", dir);
  }
  hbs(hbs, dir, options = {}) {
    const defaultOptions = {
      defaultLayout: "main",
      layoutsDir: `${dir}/layouts`,
      partialsDir: `${dir}/partials`,
      extname: ".hbs",
    };
    // Combine the default options with any provided options
    const combinedOptions = { ...defaultOptions, ...options };
    this._app.set("view engine", "hbs");
    this._app.set("views", dir);
    this._app.engine(".hbs", hbs(combinedOptions));
  }
  pug(dir = "views") {
    this._app.set("view engine", "pug");
    this._app.set("views", dir);
  }
}
module.exports = TemplateEngineConfigurator;