const { launch } = require("../../shared/app");
const app = launch();
const RouteHandler = require("../..//handler/RouteHandler");
const { applyCallbacks } = require("../../utils/callbackHandler");
function get(url, callbackObj) {
  const handler = new RouteHandler(app, url);
  applyCallbacks(handler, callbackObj);
  return handler;
}
get("/", {
  setCookie: ["username", "mahdi", { maxAge: 30000 }],
  send: "set cookie",
});
