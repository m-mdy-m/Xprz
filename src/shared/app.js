const express = require("express");
const using = require("../Using");

class AppManager {
    constructor() {
        this.app = null;
        this.runApp = false;
    }

    initApp() {
        this.runApp = true;
        this.app = express();
        using.setAppInstance(this.app);
        return this.app;
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
module.exports = new AppManager()
