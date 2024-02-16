const { getExpress } = require("../shared/AppManager");

const express = getExpress();
exports.static = function (...handler) {
  return express.static(...handler);
};
