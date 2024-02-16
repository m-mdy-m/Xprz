class Using {
  constructor() {
    this.appInstance = null;
    this.setAppInstance = function (app) {
      this.appInstance = app;
    };
  }
  getAppInstance() {
    if (!this.appInstance) {
      console.log("Express app instance has not been initialized yet.");
    }
    return this.appInstance;
  }
}
const using = new Using();
module.exports = {
  setApp: using.setAppInstance.bind(using),
  getApp: using.getAppInstance.bind(using),
};
