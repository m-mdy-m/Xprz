const XPress = require("./index");

const { App, Database, HttpMethod, Package, Route, Utils } = new XPress();

const { launch, loadRoutes } = new App();
const router = new Route();
router.setRoute("/").get(() => {
      const { getCookieHandler } = router.res();
      const { } = getCookieHandler()
}).attachTo(launch());
