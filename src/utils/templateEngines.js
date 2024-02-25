// Import the `getApp` function from the "../Using" module
const { getApp } = require("../shareApp");
const $install = require("./installPkg");
let app = getApp();
if (!app) {
  return app;
} else {
  function setEjs(dir = "views") {
    $install("ejs");
    // Set the view engine to EJS
    app.set("view engine", "ejs");
    // Set the views directory, defaulting to "views" if dir is not provided
    app.set("views", dir);
  }
  function setHBS(hbs, dir, options = {}) {
    // Default options for Handlebars
    const defaultOptions = {
      defaultLayout: "main",
      layoutsDir: `${dir}/layouts`, // Corrected line
      partialsDir: `${dir}/partials`, // Corrected line
      extname: ".hbs",
    };

    // Combine the default options with any provided options
    const combinedOptions = { ...defaultOptions, ...options };

    // Set the view engine to Handlebars
    app.set("view engine", "hbs");
    // Set the views directory
    app.set("views", dir);
    // Configure Handlebars engine with the combined options
    app.engine(".hbs", hbs(combinedOptions));
  }
  function setPug(dir = "views") {
    // Set the view engine to Pug
    app.set("view engine", "pug");
    // Set the views directory, defaulting to "views" if dir is not provided
    app.set("views", dir);
  }
  // Export the functions to be used elsewhere
  module.exports = { setEjs, setHBS, setPug };
}
