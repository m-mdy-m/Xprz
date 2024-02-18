const { launch } = require("./src/shared/AppManager");
launch()
const { getApp } = require("./src/Using");
const Route = require('./src/shared/RouteManager')
const app = getApp()
const router  = new Route()
// router.setRoute('/').get((req,res)=>{
//     res.send('hi')
// }).attachTo(app)

router.group('/api',(route)=>{
    route.setRoute('/test').get((req,res,nxt)=>{
        res.send('hi this is test')
    })
}).attachTo(app)