// Import the `getApp` function from the "../Using" module
const { getApp } = require("../Using");

// Get the Express application instance
let app = getApp();

// Function to set up EJS as the view engine
function setEjs(dir) {
  // Set the view engine to EJS
  app.set("view engine", "ejs");
  // Set the views directory, defaulting to "views" if dir is not provided
  app.set("views", dir ? dir : "views");
}

// Function to set up Handlebars (HBS) as the view engine
function setHBS(hbs, dir, options = {}) {
  // Default options for Handlebars
  const defaultOptions = {
    defaultLayout: "main",
    layoutsDir: (dir, "layouts"), // Note: This line seems incorrect, it should be `${dir}/layouts`
    partialsDir: (dir, "partials"), // Note: This line seems incorrect, it should be `${dir}/partials`
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

// Function to set up Pug as the view engine
function setPug(dir) {
  // Set the view engine to Pug
  app.set("view engine", "pug");
  // Set the views directory, defaulting to "views" if dir is not provided
  app.set("views", dir ? dir : "views");
}

// Export the functions to be used elsewhere
module.exports = {
  setEjs,
  setHBS,
  setPug,
};
