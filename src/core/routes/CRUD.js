const { launch, initApp, listen } = require("../../shared/app");
const app = launch();
class Handler {
  setup(app, url) {
    return async (method, data, callback = undefined) => {
      const response = await new Promise((resolve) => {
        app.get(url, (_, res) => {
          res[method](data);
          if (callback) {
            callback(res);
          }
          resolve(res);
        });
      });
      return response;
    };
  }
}
class RouteHandler {
  constructor(app, url) {
    this.statusCode = 200;
    this.app = app;
    this.url = url;
    this.statusCode = 2000;
    this.handler = new Handler().setup(this.app, this.url);
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
  async setCookie(name,value,options){
    const handler = await this.handler
    return handler('cookie',{name,value,options})
  }
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
  setCookie : ('username','mahdi',{maxAge : 30000}),
  send: "set cookie",
});
