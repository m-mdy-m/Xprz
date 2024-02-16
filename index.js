const { initApp, listen, launch, getExpress } = require("./src/shared/AppManager");
launch()
const RouterManager  = require('./src/core/routes/router')
const get = require("./src/core/CRUD/read");
const {setEjs }= require('./src/utils/templateEngines');
setEjs('views')
const router = new RouterManager()
console.log(router);
get('/',{send : 'hi'})