const { getExpress } = require("../../shared/AppManager");
class RouterSingleton {
  constructor() {
    if (!RouterSingleton.instance) {
      this.router = null;
      RouterSingleton.instance = this;
    }
    return RouterSingleton.instance;
  }

  createRouter() {
    const express = getExpress();
    return express.Router();
  }

  getRouter() {
    console.log(this.router);
    return this.router;
  }

  setRouter(router) {
    this.router = router;
  }
}

const routerInstance = new RouterSingleton();
module.exports = {
  createRouter : routerInstance.createRouter.bind(routerInstance),
  getRouter : routerInstance.getRouter.bind(routerInstance),
  setRouter : routerInstance.setRouter.bind(routerInstance)
}
