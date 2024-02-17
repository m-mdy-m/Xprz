const { getApp } = require("./src/Using");
const { launch, initApp, listen } = require("./src/shared/AppManager");
const Route = require("./src/shared/RouteManager");
initApp();
const app = getApp();
const route = new Route();
route.setRoute("/");
route.get((req, res, nxt) => {
  res.send("hello ");
});
listen();
