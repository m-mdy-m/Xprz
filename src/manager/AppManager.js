const App = require("../shared/App"),
  { static } = require("../utils/expressUtils")
class AppManager extends App {
  constructor() {
    super();
  }
  use(...handler){
    this.app.use(...handler)
  }
  set(...handler){
    this.app.set(...handler)
  }
  static(...handlers){
    const express = this.getExpress()
    this.use(express.static(...handlers))
  }
  Session(...options) {
    if (!this.app) {
      throw new Error("Express app has not been initialized yet.");
    }
    const session = require("express-session");
    if (!session) {
      throw new Error(
        "The 'express-session' module is not installed. Please make sure to install it by running 'npm install express-session' before using sessions."
      );
    }
    this.app.use(session(...options));
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
