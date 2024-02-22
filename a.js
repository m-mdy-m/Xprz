const XPress = require('./index')

const { App,AppManager,Database,HttpMethod,Package,Route,Utils,} = new XPress()

const { closeServer,getExpress,initApp,launch,listen,use} = new App()
launch()
const { getApp} = Utils
const app = getApp()
const router = new Route()
router.setRoute('/').get(()=>{
  const { send } =router.res()
  send('hi')
}).attachTo(app)