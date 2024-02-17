const { getApp } = require("./src/Using")
const { launch, initApp, listen } = require("./src/shared/AppManager")
const Route = require("./src/shared/RouteManager")
initApp()
// const router = new Route();
// router.setRoute('/')


// router.get('hi');
const app = getApp()
const route = new Route()
route.setRoute('/').get((req,res,nxt)=>{
    res.send(`Hello World!`)
})
app.use(route)
listen()