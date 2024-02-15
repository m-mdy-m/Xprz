const { launch, initApp, listen } = require("../../shared/app");
const app = launch();
class getHandler {
  constructor(app, url) {
    this.statusCode = 200;
    this.app = app;
    this.url = url;
    this.statusCode = 2000;
    this.handler = this.setupHandler();
  }
  setupHandler() {
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
  status(code) {
    this.statusCode = code;
    return this;
  }
  async _awaitHandler() {
    return await this.handlerPromise;
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
  const handler = new getHandler(app, url);
  if (callbackObj) {
    Object.entries(callbackObj).forEach(([method, data]) => {
      handler[method](data);
    });
  }
  return handler;
}
get("/", {
  send: "hi mahdi",
  // redirect: "/s"
});
// get('/s',{
//   send:'hi',
// })
