const { getExpress } = require("../../shared/AppManager");
class UsedRoute {
  constructor() {
    this.router = this.createRouter();
  }
  createRouter() {
    const express = getExpress();
    return express.Router();
  }
  getRouter() {
    return this.router;
  }
}
const route = new UsedRoute();
module.exports = {
  createRouter: route.createRouter.bind(route),
  getRouter: route.getRouter.bind(route),
}