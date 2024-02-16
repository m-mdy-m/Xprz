const { getExpress } = require("../../shared/AppManager");
class Route {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
    return this.router
  }
}
module.exports = Route;
