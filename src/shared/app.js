const express = require("express");
let app
function initApp() {
  app = express()
  return app;
}
function listen(server=app,port = 3000,textLog = `Server is running on port ${port}`,log = true){
  server.listen(port, () => {
    if (log) {
      console.log(textLog);
    }
  });
}
function launch(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  const app = initApp()
  listen(app,port,textLog,log)
  return app
}
module.exports = {initApp,listen,launch}