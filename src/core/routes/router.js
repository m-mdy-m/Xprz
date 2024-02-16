const { getExpress } = require("../../shared/AppManager");
let saveRouter;
class RouterManager {
  constructor() {
    const express = getExpress();
    this.router = express.Router();
    this.save();
    return this.router
  }
  save() {
    saveRouter = this.router;
  }
}
module.exports = RouterManager;
