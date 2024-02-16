const { getApp } = require("../Using");
let app = getApp();
function setEjs(dir) {
  app.set("view engine", "ejs");
  app.set("views", dir ? dir : "views");
}
function setHBS(hbs, dir, options = {}) {
  const defaultOptions = {
    defaultLayout: "main",
    layoutsDir: (dir, "layouts"),
    partialsDir: (dir, "partials"),
    extname: ".hbs",
  };

  const combinedOptions = { ...defaultOptions, ...options };

  app.set("view engine", "hbs");
  app.set("views", dir);
  app.engine(".hbs", hbs(combinedOptions));
}
function setPug(dir) {
  app.set("view engine", "pug");
  app.set("views", dir ? dir : "views");
}
module.exports = {
  setEjs,
  setHBS,
  setPug,
};
