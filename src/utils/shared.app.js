const { getApp, useApp, setApp, getExp } = require("../shareApp");

class AppSharedManager {
    constructor() {
        this.getApp = getApp;
        this.useApp = useApp;
        this.setApp = setApp;
        this.getExpress = getExp;
    }
}

module.exports = AppSharedManager;
