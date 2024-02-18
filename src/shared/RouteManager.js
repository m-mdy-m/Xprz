const { getExpress } = require("./AppManager");

let middleware = [],
  has;
function isMiddleware() {
  return middleware.length > 0 ? true : false;
}
function registerRoute(method, route, path, ...handler) {
  const routeHandlers = [...middleware, ...handler];
  route[method](path, routeHandlers);
  return;
}
class Route {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
  }
  use(m) {
    middleware.push(m);
    has = isMiddleware();
    return this;
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
    if (has) {
      registerRoute("get", this.router, this.path, handler);
    }
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
