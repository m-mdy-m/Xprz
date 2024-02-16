const { initApp, listen, launch, getExpress } = require("./src/shared/AppManager");
launch()
const {createRouter,getRouter} = require('./src/core/routes/router')
const get = require("./src/core/CRUD/read");
const {setEjs }= require('./src/utils/templateEngines');
setEjs('views')
createRouter()
get('/',{send : 'hi'})