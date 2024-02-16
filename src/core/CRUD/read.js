const { getApp,setApp } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");

function getHandler(){
  
}


let hasRouteInit = false
function get(url, callbackObj) {
  const app = getApp()
  const handler = new RouteHandler(app, url);
  applyCallbacks(handler, callbackObj);
  return handler;
}

module.exports = get
