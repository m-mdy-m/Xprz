const { initApp, listen, launch, getExpress } = require("./src/shared/AppManager");
launch()
const a = require('./src/core/routes/router')
const get = require("./src/core/CRUD/read");
const {setEjs }= require('./src/utils/templateEngines');
const router = require("./src/core/routes/router");
setEjs('views')
// router().get('/',(req,res,nxt)=>{
//     res.send('sdasdsa')
// })