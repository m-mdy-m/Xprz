const { RequestValidator } = require('vfyjs');

class Validation {
    constructor(request) {
        this._req = request;
        this._validator = new RequestValidator();
    }

    _validate(data, rules, options = {}) {
        return this._validator.validate(data, rules, options);
    }

    body(rules, options = {}) {
        return this._validate(this._req.body, rules, options);
    }

    query(rules, options = {}) {
        return this._validate(this._req.query, rules, options);
    }

    param(rules, options = {}) {
        return this._validate(this._req.param, rules, options);
    }
}

module.exports = Validation;
