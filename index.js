const { launch, getExpress } = require("./src/shared/AppManager");
launch();
const Route = require("./src/core/routes/router");
const { get } = require("./src/core/CRUD/GET");
const { setEjs } = require("./src/utils/templateEngines");
const { use } = require("./src/utils/funcs");

setEjs("views");
const router = new Route();
router.get("/");
