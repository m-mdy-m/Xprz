const { getExpress } = require("../../shared/AppManager");
let saveRouter;
class RouterManager {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
    this.save();
  }
  save() {
    saveRouter = this.router;
  }
  getRoute(){
    return saveRouter
  }
}
module.exports = RouterManager;
