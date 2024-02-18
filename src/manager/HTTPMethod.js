const { getApp } = require("../Using");
const app = getApp();
const AppManager = require("./AppManager");

class HTTPMethod extends AppManager {
  constructor() {
    super();
    this.app = app;
  }
  setRoute(path){
    this.patch = path
    return this;
  }
  get(...handler) {
    this.app.get(this.patch, ...handler);
    return this;
  }

  post(...handler) {
    this.app.post(this.patch, ...handler);
    return this;
  }

  put(...handler) {
    this.app.put(this.patch, ...handler);
    return this;
  }

  del(...handler) {
    this.app.delete(this.patch, ...handler);
    return this;
  }

  patch(...handler) {
    this.app.patch(this.patch, ...handler);
    return this;
  }

  options(...handler) {
    this.app.options(this.patch, ...handler);
    return this;
  }

  head(...handler) {
    this.app.head(this.patch, ...handler);
    return this;
  }

  trace(...handler) {
    this.app.trace(this.patch, ...handler);
    return this;
  }
  prefix(prefixPath) {
    this.path = prefixPath + this.path;
    return this;
  }
}

module.exports = HTTPMethod;
