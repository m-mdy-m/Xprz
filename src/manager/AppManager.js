const App = require("../shared/App");
const express = this.getExpress();

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
    this.use(express.static(...handlers));
  }
  EnableJson() {
    this.use(express.json());
    this.use(express.urlencoded({ extended: false }));
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
