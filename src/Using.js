const express = require("express");
class UsingApp {
  constructor() {
    this.appInstance = null;
  }
  Using(app){
    return this.appInstance = app
  }
  getAppInstance() {
    if (!this.appInstance) {
      console.log("not app");
    }
    return this.appInstance;
  }
  initApp(){
    if (!this.appInstance) {
      this.appInstance = express()
    }
    return this.appInstance
  }
}
const usingInstance = new UsingApp();
let initApp = usingInstance.initApp,getApp = usingInstance.getAppInstance, Using = usingInstance.Using

module.exports ={initApp,getApp,Using};
