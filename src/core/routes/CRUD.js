const start = require("../../shared/app");
const app = start();

class getHandler {
  constructor(app, url) {
    this.app = app;
    this.url = url;
    this.statusCode = 200;
  }
  status(code) {
    this.statusCode = code;
    return this;
  }
  handleResponse(data, method) {
    this.app.get(this.url, (req, res) => {
      res.status(this.statusCode);
      method.call(data, res);
    });
    return this;
  }
  send(data) {
    return this.handleResponse(data, (res) => res.send(data));
  }

  write(data) {
    return this.handleResponse(data, (res) => res.write(data).end());
  }
  redirect(url) {
    return this.handleResponse(url, (res) => {
      res.redirect(url);
    });
  }
  render(file, handler) {
    return this.handleResponse(file, (res) => {
      res.render(file, handler || {});
    });
  }
  json(message) {
    return this.handleResponse(message, (res) => {
      res.json(message || {});
    });
  }
  setHeader(content, text) {
    return this.handleResponse(content, (res) => {
      res.set(content, text);
    });
  }
  contentType(type) {
    return this.set("Content-Type", type);
  }
  setCookie(name, value, options) {
    return this.handleResponse(
      { name, value, options },
      (res, { name, value, options }) => {
        res.cookie(name, value, options);
      }
    );
  }
  setSession(key, value) {
    return this.handleResponse({ key, value }, (res, { key, value }) => {
      res.session[key] = value;
    });
  }
  clearCookie(name, options) {
    return this.handleResponse({ name, options }, (res, { name, options }) => {
      res.clearCookie(name, options);
    });
  }
  download(path, filename) {
    return this.handleResponse(
      { path, filename },
      (res, { path, filename }) => {
        res.download(path, filename);
      }
    );
  }
}

function get(url) {
  return new getHandler(app, url);
}
get("/").setSession('username','mahdi')
