const App = require("./src/shared/App");
const RouteManager = require("./src/shared/RouteManager");

const { launch} = new App()

const router = new RouteManager()

router.setRoute('/').get((req,res,nxt)=>{
    const {send,write  }= router.res()
    // send('hi' ) === res.send('hi') /// send for GET for / route
})
.post((req,res,nxt)=>{
    const {send , write} = router.res()
    // send("hi") === res.send("hi") // send for POST for / route
})
.attachTo(launch())
