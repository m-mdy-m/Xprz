const { launch } = require("../../shared/app");
const RouteHandler = require("../../handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");
function get(url, callbackObj) {
  const handler = new RouteHandler(app, url);
  applyCallbacks(handler, callbackObj);
  return handler;
}
module.exports = get;
