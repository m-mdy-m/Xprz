const {initApp,launch,listen,isApp } = require('./shared/app')
class Using {
  constructor() {
    this.appInstance = null;
  }

  setAppInstance(app) {
    this.appInstance = app;
  }

  getAppInstance() {
    if (!this.appInstance) {
      const a = isApp()
      console.log('a =>',a);
    }
    return this.appInstance;
  }
}
const using = new Using()
module.exports = {
  setApp: using.setAppInstance.bind(using),
  getApp: using.getAppInstance.bind(using)
};

