const { getApp, setApp } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");
let handler,router;

function saveRouter(router) {
  
} 

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
module.exports = {get,saveRouter};
