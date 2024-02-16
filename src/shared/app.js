const express = require("express");
const using = require('../Using')
const app = new using().appInstance()
function initApp() {
  return express()
}
function listen(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  app.listen(port, () => {
    if (log) {
      console.log(textLog);
    }
  });
}
function launch(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  let app = initApp()
  listen(port,textLog,log)
  return app
}

module.exports = {initApp,listen,launch}