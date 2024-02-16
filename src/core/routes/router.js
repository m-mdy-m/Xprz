const { getExpress } = require("../../shared/AppManager");
exports.createRouter = function createRouter(){
  const express = getExpress();
  return express.Router();
}