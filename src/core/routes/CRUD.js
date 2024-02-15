const { launch, initApp, listen } = require("../../shared/app");
const app = launch();
class getHandler {
  constructor(app, url) {
    this.statusCode = 200;
    this.handlerPromise = new Promise((resolve )=>{
      app.get(url, (req, res) => {
        this.handler = function (method, data) {
          res[method](data)
        }
        resolve(this.handler)
      });
    })
  }
  status(code) {
    this.statusCode = code;
    return this;
  }

  // handleResponse(data, method) {
  //   this.app.get(this.url, (req, res) => {
  //     res.status(this.statusCode);
  //     method.call(data, res);
  //   });
  //   return this;
  // }
  async send(data) {
    const handler = await this.handlerPromise;
    return handler('send', data);
  }
  // write(data) {
  //   return this.handleResponse(data, (res) => {
  //     res.write(data)
  //     res.end()
  //   });
  // }
  // redirect(url) {
  //   return this.handleResponse(url, (res) => {
  //     res.redirect(url);
  //   });
  // }
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
  send: "hisss",
});
