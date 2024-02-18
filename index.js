const { launch } = require("./src/shared/App");
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
  .use(middleware)
  .setRoute("/")
  .get((req, res, nxt) => {
    res.send("hi222");
  })
  .attachTo(app);
