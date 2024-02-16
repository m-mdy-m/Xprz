const { getExpress } = require("../../shared/AppManager");

function CreateRouter(){
  const express = getExpress();
  return express.Router();
}

module.exports = CreateRouter
