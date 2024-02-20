const App = require("./src/shared/App");
const RouteManager = require("./src/shared/RouteManager");

const { launch} = new App()

const router = new RouteManager()

router.setRoute('/').get((req,res,nxt)=>{
    router.res()
})
.attachTo(launch())
