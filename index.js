const { launch } = require("./src/shared/AppManager");
launch();
const RouterManager = require("./src/core/routes/router");
const { get, saveRouter } = require("./src/core/CRUD/read");
const { setEjs } = require("./src/utils/templateEngines");

setEjs("views");
const router = new RouterManager();
saveRouter(router);
get("/", { send: "hi" });
