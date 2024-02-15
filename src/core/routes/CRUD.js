const { launch, initApp, listen } = require("../../shared/app");
const app = launch();
class getHandler {
  constructor(app, url) {
    this.statusCode = 200;
    this.handlerPromise = new Promise((resolve )=>{
      app.get(url, (req, res) => {
        this.handler = function (method, data,callback) {
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
  async send(data) {
    const handler = await this.handlerPromise;
    return handler('send', data);
  }
  async write(data) {
    const handler = await this.handlerPromise
    return handler('write', data, (res)=>{
      console.log('res');
      res.end()
    })
  }
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
  write: "hisss",
});
