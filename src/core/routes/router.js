const { getExpress } = require("../../shared/AppManager");
exports.createRouter = function createRouter(){
  const express = getExpress();
  return express.Router();
}
exports.isRoute = function isRoute(router){
  return router
}