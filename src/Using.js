class Using {
  constructor(app) {
    this.appInstance = app;
  }

  getAppInstance() {
    if (!this.appInstance) {
      throw new Error("Express app instance has not been initialized yet.");
    }
    return this.appInstance;
  }
}

module.exports = Using;