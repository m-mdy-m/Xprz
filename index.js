const { initApp, listen } = require("./src/shared/app");
const get = require("./src/core/CRUD/read");
const {getApp,setApp} = require("./src/Using");
const app = initApp()
setApp(app)
getApp(app)
get("/",{
    send:"hi"
});
listen();
