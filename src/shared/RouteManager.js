const { getExpress } = require("./AppManager");

let router;
class Route {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
  }
  setRoute(path) {
    this.path = path; // Set route path
    return this; // For method chaining
  }
  get(...handler) {
    return;
  }
}

module.exports = Route;
