const express = require("express");
function app(app) {
  if (!app) {
    app = express();
  }
  
  return app;
}
function listen(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  const ap = app()
  ap.listen(port, () => {
    if (log) {
      console.log(textLog);
    }
  });
}
function start(app, listen,port = 3000,textLog = `Server is running on port ${port}`,log = true){
  app(app)
  listen(port,textLog,log)
  return app
}
module.exports = {app,listen,start}