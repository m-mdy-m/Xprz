const { launch } = require("./src/shared/AppManager");
launch();
const { getApp } = require("./src/Using");
const Route = require("./src/shared/RouteManager");
const app = getApp();
const router = new Route();
function middleware(req, res, next) {
    console.log("hi");
    next(); 
}
router
  .setRoute("/")
  .get((req, res, nxt) => {
    res.send("hi");
  });
