const XPress = require("./index");
const path = require('path');

const { App, Database, HttpMethod, Package, Route, Utils } = new XPress();

const { launch, loadRoutes } = new App();
const router = new Route();
router
  .setRoute("/")
  .get(() => {
    const { send } = router.res();
    send("hi");
  })
  .attachTo(launch());
// Use __dirname to reference the routes directory
const routesDirectory = path.join(__dirname, "routes");
loadRoutes(routesDirectory);
