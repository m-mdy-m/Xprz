const { initApp, listen, launch } = require("./src/shared/app");
const get = require("./src/core/CRUD/read");
launch()
get("/",{
    send:"hi"
});
