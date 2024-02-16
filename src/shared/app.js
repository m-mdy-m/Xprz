const {getApp,initApp, Using} = require("../Using");
let runApp=false,app
function listen(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  if (runApp) {
        app.listen(port, () => {
            if (log) {
                console.log(textLog);
            }
        });
    } else {
        console.log(runApp);
        console.log('hi');
    }
}
function launch(port = 3000,textLog = `Server is running on port ${port}`,log = true){
  let app = initApp()
  Using(app)
  listen(port,textLog,log)
  return app
}

module.exports = {initApp,listen,launch}