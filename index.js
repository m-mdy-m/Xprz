const { initApp, listen, launch } = require("./src/shared/AppManager");
const get = require("./src/core/CRUD/read");
initApp();
get("/", { send: "hi" });
listen();
