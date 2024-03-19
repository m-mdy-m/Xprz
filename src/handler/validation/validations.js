const { RequestValidator } = require("vfyjs");

class Validation {
  constructor(request) {
    this._req = request;
    this._validator = new RequestValidator();
  }

  _validate(data, rules, options = {}) {
    return this._validator.validate(data, rules, options);
  }
}

module.exports = Validation;
