class Using {
  constructor() {
      this.appInstance = null;
  }

  setAppInstance(app) {
      this.appInstance = app;
  }

  getAppInstance() {
      if (!this.appInstance) {
          throw new Error('Express app instance has not been initialized yet.');
      }
      return this.appInstance;
  }
}

module.exports = new Using();