const { launch } = require("./src/shared/AppManager");
launch()
const { getApp } = require("./src/Using");
const Route = require("./src/shared/RouteManager");
const app = getApp(); 
const route = new Route();
route.setRoute("/").get((req, res, nxt) => {
    res.send("hello2");
}).attachTo(app)