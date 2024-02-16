const { initApp, listen, launch } = require("./src/shared/app");
const get = require("./src/core/CRUD/read");
const { setEjs } = require("./src/utils/templateEngines");
initApp();
get("/", { send: "hi" });
listen();
