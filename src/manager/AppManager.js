const App = require("../shared/App");

class AppManager extends App {
  constructor() {
    super();
  }
  use(...handler) {
    this.app.use(...handler);
  }
  middleware(...handler) {
    this.use(...handler);
  }
  set(...handler) {
    this.app.set(...handler);
  }
  static(...handlers) {
    const express = this.getExpress();
    this.use(express.static(...handlers));
  }

  async shutdown() {
    return new Promise((resolve, reject) => {
      this.app.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
module.exports = AppManager;
