const { launch, initApp, listen } = require("../../shared/app");
const app = launch();

function Use(app) {
  app.use((req, res, nxt) => {
    return { nxt, res, req };
  });
}

class Handler {
  setup(app, url) {
    return async (method, data, callback = undefined) => {
      const response = await new Promise((resolve, reject) => {
        app.get(url, (_, res) => {
          try {
            res[method](data);
            if (callback) {
              callback(res);
            }
            resolve(res);
          } catch (error) {
            reject(error);
          }
        });
      });
      return response;
    };
  }
  handlerCookie(app, options) {
    const { nxt, req, res } = new Use(app);
    res.cookie(options.name, options.val, options.options);
    nxt();
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
  async setCookie(name, val, options) {
    new Handler().handlerCookie(this.app, { name, val, options });
  }
}

function get(url, callbackObj) {
  const handler = new RouteHandler(app, url);
  if (callbackObj) {
    Object.entries(callbackObj).forEach(([method, data]) => {
      if (Array.isArray(data)) {
        handler[method](...data);
      } else {
        handler[method](data);
      }
    });
  }
  return handler;
}
get("/", {
  setCookie: ["username", "mahdi", { maxAge: 30000 }],
  send: "set cookie",
});
