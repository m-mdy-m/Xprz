const { getApp, setApp } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");
const {createRouter, isRoute} = require("../routes/router.js");
let hasRouteInit = false,
  handler,router = createRouter()

const route = isRoute()
function get(url, callbackObj) {
  if (hasRouteInit) {
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
function hasRoute() {
  if (router.stack.length > 0) {
    hasRouteInit = true;
  }
}
hasRoute();
module.exports = get;
