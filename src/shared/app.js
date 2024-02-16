const express = require("express");
const {getApp,setApp} = require("../Using");
class AppManager {
    constructor() {
        this.app = null;
        this.runApp = false;
    }

    initApp() {
        this.app = express();
        setApp(this.app)
        this.runApp = true;
        return this.app;
    }
    getApp(){
      if (this.app) {
        return this.app
      }
      return null
    }
    listen(port = 3000, textLog = `Server is running on port ${port}`, log = true) {
        if (this.runApp) {
            this.app.listen(port, () => {
                if (log) {
                    console.log(textLog);
                }
            });
        } else {
            console.log('Express app has not been initialized yet.');
        }
    }

    launch(port = 3000, textLog = `Server is running on port ${port}`, log = true) {
        this.initApp();
        this.listen(port, textLog, log);
        return this.app;
    }
}
const appManager = new AppManager();

module.exports = {
    isApp : appManager.getApp.bind(appManager),
    initApp: appManager.initApp.bind(appManager),
    listen: appManager.listen.bind(appManager),
    launch: appManager.launch.bind(appManager)
};
