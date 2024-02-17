const { getExpress } = require("../../shared/AppManager");
function handleMethod(router, method, handler, path) {
  if (typeof handler !== 'function') {
    throw new Error('Handler must be a function');
  }
  if (!path) {
    throw new Error('Route path not set. Call setRoute() first.');
  }

  router[method](path, handler);
  return router;
}

class Route {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
  }

  setRoute(path) {
    this.currentRoute = path;
    return this;
  }

  get(handler) {
    return handleMethod(this.router, 'get', handler, this.currentRoute);
  }

  post(handler) {
    return handleMethod(this.router, 'post', handler, this.currentRoute);
  }

  put(handler) {
    return handleMethod(this.router, 'put', handler, this.currentRoute);
  }

  del(handler) {
    return handleMethod(this.router, 'delete', handler, this.currentRoute);
  }
}
module.exports = Route