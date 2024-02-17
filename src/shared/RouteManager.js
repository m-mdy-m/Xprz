const { getApp } = require("../Using");
const { getExpress } = require("./AppManager");
class Route {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
  }
  setRoute(path) {
    this.path = path;
    return this;
  }
  get(...handler) {
    this.router.get(this.path, ...handler);
    return this;
  }
  attachTo(app) {
    app.use(this.router); // Attach the router to the app
  }
}

module.exports = Route;
