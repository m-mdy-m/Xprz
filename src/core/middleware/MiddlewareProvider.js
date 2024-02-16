const { getApp } = require("../../Using");
const { getExpress } = require("../../shared/AppManager");

const app = getApp();
const express = getExpress();
exports.createMiddlewareContext = function createMiddlewareContext(app) {
  const response = new Promise((resolve, reject) => {
    app.use((req, res, nxt) => {
      resolve({ req, res, nxt });
    });
  });
  return response;
};
exports.use = function (...handler) {
  return app.use(...handler);
};
exports.set = function (...handler) {
  return app.set(...handler);
};
exports.static = function (...handler) {
  return express.static(...handler);
};
