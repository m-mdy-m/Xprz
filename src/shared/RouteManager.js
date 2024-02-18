const { getExpress } = require("./AppManager");


class Route {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
    this.middleware = []
  }
  use(middleware){
    this.middleware.push(middleware)
    return this
  }
  setRoute(path) {
    this.path = path;
    return this;
  }

  group(mainRoute, callback) {
    const r = new Route();
    callback(r);
    this.router.use(mainRoute, r.router);
    return this;
  }

  get(...handler) {
    this.router.get(this.path, ...handler);
    return this;
  }

  post(...handler) {
    this.router.post(this.path, ...handler);
    return this;
  }

  del(...handler) {
    this.router.delete(this.path, ...handler);
    return this;
  }

  put(...handler) {
    this.router.put(this.path, ...handler);
    return this;
  }
  
  attachTo(app) {
    app.use(this.router);
  }
}

module.exports = Route;
