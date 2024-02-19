const XPress = require('./index')
const {App,Database,Package,Route,HttpMethod,Utils ,AppManager} = new XPress()
const {getExpress,initApp,launch,listen,use } = new App()
launch()
