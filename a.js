const XPress = require('./index')

const {AppManager,Database,HttpMethod,Package,Route,Utils,} = new XPress()

const { launch} = new AppManager()
const router = new Route()
router.setRoute('/').get(()=>{
  const { send } =router.res()
  send('hi')
}).attachTo(launch())