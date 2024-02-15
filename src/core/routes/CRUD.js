const start = require("../../shared/app");
const app = start();

class handler {
  constructor(app, url, router) {
    console.log("ro =>", router);
    this.app = app;
    this.url = url;
    this.router = router;
    this.statusCode = 200;
  }
  status(code) {
    this.statusCode = code;
    return this;
  }
  handleResponse(data, method) {
    this.app.get(this.url, (req, res) => {
      res.status(this.statusCode);
      method.call(res, data);
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
  return new handler(app, url, "get");
}

get("/").write("hdsadasdasd");
