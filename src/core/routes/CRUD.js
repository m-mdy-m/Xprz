const { launch, initApp, listen } = require("../../shared/app");
const app = launch();
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
    return this.handleResponse(data, (res) => {
      res.write(data)
      res.end()
    });
  }
  redirect(url) {
    return this.handleResponse(url, (res) => {
      res.redirect(url);
    });
  }
}

function get(url, callbackObj) {
  const handler = new getHandler(app, url);
  if (callbackObj) {
    Object.entries(callbackObj).forEach(([method, data]) => {
      handler[method](data);
    });
  }
  return handler;}
get("/", {
  redirect:'/ss'
});
