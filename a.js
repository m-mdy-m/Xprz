const XPress = require('./index')
const {App,Database,Package,Route,HttpMethod,Utils } = new XPress()

const { initApp,listen} = new App()
initApp()
const {getApp,setApp,useApp} = Utils
const app = getApp()
const router = new Route()
router.setRoute('/').get((req,res,nxt)=>{
    res.send('hi')
}).attachTo(app)
listen()
