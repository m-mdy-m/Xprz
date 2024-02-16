const express = require("express");
const {getAppInstance, Using,hasUsing} = require("../Using");
let runApp=false,app=undefined
if (hasUsing) {
  app = getAppInstance()
}
function initApp() {
  runApp=true  
  return express()
}
function listen(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  if (hasUsing && runApp) {
    app.listen(port, ()=>{
      if (log) {
        console.log(textLog);
      }
    })
  }else{
    console.log(hasUsing);
    console.log(runApp);
    console.log('hi');
  }
}
function launch(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  let app = initApp()
  Using(app)
  listen(app,port,textLog,log)
  return app
}

module.exports = {initApp,listen,launch}