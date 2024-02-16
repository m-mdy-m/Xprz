const { getAppInstance } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");
function get(url, callbackObj) {
  const app = getAppInstance()
  const handler = new RouteHandler(app, url);
  applyCallbacks(handler, callbackObj);
  return handler;
}
module.exports = get;
