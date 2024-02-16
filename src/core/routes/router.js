const { getExpress } = require("../../shared/AppManager");
module.exports = function createRouter() {
  const express = getExpress();
  return express.Router();
};