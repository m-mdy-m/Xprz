const { launch } = require("./src/shared/AppManager");
launch();
const Route = require("./src/core/routes/router");
const { get, setRoute } = require("./src/core/CRUD/read");
const { setEjs } = require("./src/utils/templateEngines");

setEjs("views");
const router = new Route();
setRoute(router);
get("/", { send: "hi" });
