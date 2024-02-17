const { getApp } = require("../../Using");
const { getExpress } = require("../../shared/AppManager");
let router
class Route {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
  }

  setRoute(path,r) {
    this.currentRoute = path;
    router = r
    return this;
  }
  get(path) {
    if (router) {
      router.get(path, (req, res, nxt) => {
        res.send("hi222");
      });
    }
  }
  post(handler) {}

  put(handler) {}

  del(handler) {}
}

module.exports = Route;
