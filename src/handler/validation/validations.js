const { RequestValidator } = require('vfyjs')
class Validation{
    constructor(request) {
        this._req = request
    }
    body(rules,options={}){
        const validator = new RequestValidator(this._req.body);
        return validator.validate(rules, options);
    }
    query(rules,options={}){
        const validator = new RequestValidator(this._req.query);
        return validator.validate(rules, options);
    }
    param(rules,options={}){
        const validator = new RequestValidator(this._req.param);
        return validator.validate(rules, options);
    }
}