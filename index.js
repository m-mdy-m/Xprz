const { launch } = require("./src/shared/AppManager");
launch()
const { getApp } = require("./src/Using");
const Route = require('./src/shared/RouteManager')
const {static} = require('./src/utils/expressUtils');
const { use } = require("./src/utils/funcs");
const app = getApp()
const router  = new Route()
router.setRoute('/').get((req,res)=>{
    res.send('hi')
}).attachTo(app)