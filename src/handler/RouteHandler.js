const factoryRoute = require("./HandlerClass");
class RouteHandler {
  constructor(app, url) {
    this.statusCode = 200;
    this.app = app;
    this.url = url;
    this.statusCode = 2000;
    this.handler = new factoryRoute().setupGetRoute(this.app, this.url);
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
    new factoryRoute().setCookieMiddleware(this.app, { name, val, options });
  }
}
module.exports = RouteHandler;
