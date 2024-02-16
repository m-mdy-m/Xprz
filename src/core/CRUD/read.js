const { getApp, setApp } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");
const { createRouter, getRouter } = require("../routes/router.js");
let handler, router;
router = getRouter();
function get(url, callbackObj) {
  if (router) {
    console.log("with route");
    handler = new RouteHandler(router, url);
    applyCallbacks(handler, callbackObj);
    return handler;
  } else {
    console.log("without route");
    const app = getApp();
    handler = new RouteHandler(app, url);
    applyCallbacks(handler, callbackObj);
    return handler;
  }
}
module.exports = get;
