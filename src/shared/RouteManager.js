const { getApp } = require("../Using");
const { getExpress } = require("./AppManager");

let router;
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
}

module.exports = Route;
