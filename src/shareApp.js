/**
 * Utility class for managing the Express application instance.
 */
class ShareApp {
  /**
   * Creates an instance of ShareApp.
   */
  constructor() {
    // Initialize properties
    this.appInstance = null;
    this.express = null;
  }
  setExp(express) {
    this.express = express;
  }
  getExp() {
    return this.express;
  }
  setAppInstance(app) {
    this.appInstance = app;
  }
  useApp(...handlers) {
    return this.appInstance.use(...handlers);
  }
  getAppInstance() {
    return this.appInstance;
  }
}

// Create an instance of ShareApp
const shareApp = new ShareApp();

// Export methods bound to the ShareApp instance
module.exports = {
  setApp: shareApp.setAppInstance.bind(shareApp),
  getApp: shareApp.getAppInstance.bind(shareApp),
  useApp: shareApp.useApp.bind(shareApp),
  setExp: shareApp.setExp.bind(shareApp),
  getExp: shareApp.getExp.bind(shareApp),
};
