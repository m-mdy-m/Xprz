const express = require("express");
let app
function initApp() {
  app = express()
  return app;
}
function listen(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  app.listen(port, () => {
    if (log) {
      console.log(textLog);
    }
  });
}
function launch(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  app = initApp()
  listen(port,textLog,log)
  return app
}
module.exports = {initApp,listen,launch}