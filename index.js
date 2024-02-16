const { initApp, listen, launch } = require("./src/shared/app");
const get = require("./src/core/CRUD/read");
initApp();
get("/", { send: "hi" });
listen();
