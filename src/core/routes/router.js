const { getExpress } = require("../../shared/AppManager");
const get = require("../CRUD/read");
function router() {
  const express = getExpress();
  const router = express.Router();
  return router
}
module.exports = router