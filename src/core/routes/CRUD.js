const { launch, initApp, listen } = require("../../shared/app");
const app = launch();
const RouteHandler = require('../..//handler/RouteHandler')
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
