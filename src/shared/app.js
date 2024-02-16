const express = require("express");
const {using, getAppInstance} = require('../Using')
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
  
  listen(port,textLog,log)
  return app
}


const app = initApp()

// module.exports = {initApp,listen,launch}