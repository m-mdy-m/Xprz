// Import the `getApp` function from the "../Using" module
const { getApp } = require("../shareApp");
const $install = require("./installPkg");

class TemplateEngineConfigurator {
  constructor() {
    this.app = getApp();
    if (!this.app) {
      throw new Error("Application not initialized.");
    }
  }

  ejs(dir = "views") {
    $install("ejs");
    // Set the view engine to EJS
    this.app.set("view engine", "ejs");
    // Set the views directory, defaulting to "views" if dir is not provided
    this.app.set("views", dir);
  }

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
    this.app.set("view engine", "hbs");
    // Set the views directory
    this.app.set("views", dir);
    // Configure Handlebars engine with the combined options
    this.app.engine(".hbs", hbs(combinedOptions));
  }

  pug(dir = "views") {
    // Set the view engine to Pug
    this.app.set("view engine", "pug");
    // Set the views directory, defaulting to "views" if dir is not provided
    this.app.set("views", dir);
  }
}

// Export an instance of the TemplateEngineConfigurator
module.exports = new TemplateEngineConfigurator();
