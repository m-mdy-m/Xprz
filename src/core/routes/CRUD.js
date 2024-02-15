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
}

function get(url) {
  return new getHandler(app, url);
}

get("/").send('test')
