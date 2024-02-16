const { getApp, setApp } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");
let handler,router

function setRoute(r) {
  router = r;
}
function get(url, callbackObj) {
  if (router) {
    console.log('with route');
    handler = new RouteHandler(router, url);
  } else {
    console.log('no route');
    const app = getApp();
    handler = new RouteHandler(app, url);
  }
  applyCallbacks(handler, callbackObj);
  return handler;
}
module.exports = { get, setRoute };
