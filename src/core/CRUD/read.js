const { getApp, setApp } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");
let handler

function saveRouter(router) {
  callback(router)
} 

function get(url, callbackObj) {
  saveRouter((rout)=>{
    console.log(rout);
  })
  let router;
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
