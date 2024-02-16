const { getApp, setApp } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { getExpress } = require("../../shared/AppManager");
const { applyCallbacks } = require("../../utils/callbackHandler");
const Route = require('../routes/router')
let hasRouteInit = false;

const router = Route()

function hasRoute() {
  console.log('router =>',router);
  if (router.stack.length > 0) {
    hasRouteInit = true;
  }
}
function get(url, callbackObj) {
  if (hasRouteInit) {
    console.log('with route');
   const handler = new RouteHandler(router,url)
   applyCallbacks(handler,callbackObj)
   return handler    
  }else{
    console.log('without route');
    const app = getApp();
    const handler = new RouteHandler(app, url);
    applyCallbacks(handler, callbackObj);
    return handler;
  }
}
hasRoute();
module.exports = get;
