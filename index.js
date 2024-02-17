const { launch } = require("./src/shared/AppManager");
launch();
const Route= require("./src/core/routes/router");
const { get } = require("./src/core/CRUD/GET");
const { setEjs } = require("./src/utils/templateEngines");
const { use } = require("./src/utils/funcs");

setEjs("views");
const router = new Route();
router.setRoute('/')
  .get((req, res, next) => {
    console.log('hi');
    res.send('Root path handler');
  });