const { initApp, listen, launch } = require("./src/shared/AppManager");
launch()
const get = require("./src/core/CRUD/read");
const {setEjs }= require('./src/utils/templateEngines')
setEjs('views')
get("/", { write:'test' });
