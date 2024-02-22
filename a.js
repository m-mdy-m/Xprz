const XPress = require("./index");

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
loadRoutes("routes");
const { session } = new Package();
const a = session()
