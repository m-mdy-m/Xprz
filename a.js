const App = require("./src/shared/App");
const RouteManager = require("./src/shared/RouteManager");

const { launch} = new App()

const router = new RouteManager()

router.setRoute('/').get((req,res,next)=>{
    const { /* for example => **/  send , write , render /** other method ... */} = res

    send('hi')
}).attachTo(launch())
