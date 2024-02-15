const { launch, initApp, listen } = require("../../shared/app");
const app = launch();
class getHandler {
  constructor(app, url) {
    this.statusCode = 200;
    this.handlerPromise = new Promise((resolve )=>{
      app.get(url, (req, res) => {
        this.handler = function (method, data,callback=undefined) {
          res[method](data)
          if (callback) {
            callback(res)
          }
        }
        resolve(this.handler)
      });
    })
  }
  status(code) {
    this.statusCode = code;
    return this;
  }
  async _awaitHandler() {
    return await this.handlerPromise;
  }

  async send(data) {
    const handler = await this._awaitHandler();
    return handler('send', data);
  }

  async write(data) {
    const handler = await this._awaitHandler();
    return handler('write', data, (res) => {
      res.end();
    });
  }

  async redirect(url) {
    const handler = await this._awaitHandler();
    return handler('redirect', url);
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
  send:"hi mahdi",
  redirect: "/s"
});
get('/s',{
  send:'hi',
})
