// validation.js
const { RequestValidator } = require("vfyjs");

class Validation {
  constructor(request) {
    this._req = request;
    this._validator = new RequestValidator();
  }

  body(rules, options = {}) {
    return this._validator.validate(this._req.body, rules, options);
  }
}

module.exports = Validation;
