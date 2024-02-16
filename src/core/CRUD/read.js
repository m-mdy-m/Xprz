const { getApp, setApp } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");
let handler;
let router;

function saveRouter(routerInstance) {
  router = routerInstance;
}
function get(url, callbackObj) {
  if (router) {
    handler = new RouteHandler(router, url);
    applyCallbacks(handler, callbackObj);
    return handler;
  } else {
    const app = getApp();
    handler = new RouteHandler(app, url);
    applyCallbacks(handler, callbackObj);
    return handler;
  }
}
module.exports = { get, saveRouter };
