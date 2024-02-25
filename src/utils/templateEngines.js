// Import the `getApp` function from the "../Using" module
const { getApp } = require("../shareApp");
const $install = require("./installPkg");
const $read = require("./read");

let app = getApp();
if (!app) {
  return app
}else{
/**
 * Sets up EJS as the view engine for rendering views.
 * 
 * @param {string} [dir='views'] - The directory containing view files.
 * 
 * @example
 * // Set up EJS with default views directory
 * ejs();
 * 
 * // Set up EJS with custom views directory
 * ejs('custom_views');
 */
function setEjs(dir="views") {
  $install('ejs')
  // Set the view engine to EJS
  app.set("view engine", "ejs");
  // Set the views directory, defaulting to "views" if dir is not provided
  app.set("views", dir);
}

/**
 * Sets up Handlebars (HBS) as the view engine for rendering views.
 * 
 * @param {function} hbs - The Handlebars instance.
 * @param {string} dir - The directory containing view files.
 * @param {Object} [options={}] - Additional options for Handlebars.
 * 
 * @example
 * // Set up Handlebars with default options and views directory
 * hbs(hbs, 'views');
 * 
 * // Set up Handlebars with custom options and views directory
 * hbs(hbs, 'custom_views', { defaultLayout: 'main' });
 */
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

/**
 * Sets up Pug as the view engine for rendering views.
 * 
 * @param {string} [dir='views'] - The directory containing view files.
 * 
 * @example
 * // Set up Pug with default views directory
 * pug();
 * 
 * // Set up Pug with custom views directory
 * pug('custom_views');
 */
function setPug(dir="views") {
  // Set the view engine to Pug
  app.set("view engine", "pug");
  // Set the views directory, defaulting to "views" if dir is not provided
  app.set("views", dir);
}
// Export the functions to be used elsewhere
module.exports = {setEjs,setHBS,setPug}
}