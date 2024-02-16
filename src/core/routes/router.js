const { getExpress } = require("../../shared/AppManager");

class RouterManager {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
    ;
  }
  setRouter(router) {
    this.router = router;
  }

  getRouter() {
    return this.router;
  }
}

module.exports = RouterManager
