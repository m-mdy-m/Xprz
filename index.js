const { initApp, listen, launch, getExpress } = require("./src/shared/AppManager");
launch()
const CreateRouter  = require('./src/core/routes/router')
const get = require("./src/core/CRUD/read");
const {setEjs }= require('./src/utils/templateEngines');
setEjs('views')
const router = CreateRouter()
console.log(router);
get('/',{send : 'hi'})