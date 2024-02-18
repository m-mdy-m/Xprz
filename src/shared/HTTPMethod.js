const { getApp } = require("../shareApp");
const app = getApp();
class HTTPMethod {
  constructor() {
    /** @private */
    this.app = app;
    /** @private */
    this.path = "";
  }
  setRoute(path) {
    /** @private */
    this.path = path;
    return this;
  }

  prefix(prefixPath) {
    this.path = prefixPath + this.path;
    return this;
  }

  get(...handler) {
    this.app.get(this.path, ...handler);
    return this;
  }

  post(...handler) {
    this.app.post(this.path, ...handler);
    return this;
  }

  put(...handler) {
    this.app.put(this.path, ...handler);
    return this;
  }

  del(...handler) {
    this.app.delete(this.path, ...handler);
    return this;
  }

  patch(...handler) {
    this.app.patch(this.path, ...handler);
    return this;
  }

  options(...handler) {
    this.app.options(this.path, ...handler);
    return this;
  }

  head(...handler) {
    this.app.head(this.path, ...handler);
    return this;
  }

  trace(...handler) {
    this.app.trace(this.path, ...handler);
    return this;
  }
}
const {} = new HTTPMethod();
module.exports = HTTPMethod;
