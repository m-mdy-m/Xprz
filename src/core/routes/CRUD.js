const { launch, initApp, listen } = require("../../shared/app");
const app = launch();

class Handler {
  setup() {
    return async (method, data, callback) => {
      const res = await new Promise((resolve) => {
        this.app.get(this.url, (req, res) => resolve(res));
      });
      res[method](data);
      if (callback && typeof callback === "function") {
        callback(res);
      }
    };
  }
}
class RouteHandler {
  constructor(app, url) {
    this.statusCode = 200;
    this.app = app;
    this.url = url;
    this.statusCode = 2000;
    this.handler = new Handler().setup();
  }
  status(code) {
    this.statusCode = code;
    return this;
  }
  async send(data) {
    const handler = await this.handler;
    return handler("send", data);
  }

  async write(data) {
    const handler = await this.handler;
    return handler("write", data, (res) => {
      res.end();
    });
  }
  async redirect(url) {
    const handler = await this.handler;
    return handler("redirect", url);
  }
  // setCookie(name,value,options){

  // }
}

function get(url, callbackObj) {
  const handler = new RouteHandler(app, url);
  if (callbackObj) {
    Object.entries(callbackObj).forEach(([method, data]) => {
      handler[method](data);
    });
  }
  return handler;
}
get("/", {
  send: "hi mahdi",
});
