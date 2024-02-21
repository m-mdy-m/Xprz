const Response = require("../response");
const JsonHandler = require("./Json");
const HandlerCookie = require("./cookie");
const HeadersHandler = require("./header");

class ResEnhancer extends Response {
  constructor() {
    super();
  }
  advCookie(){
    return new HandlerCookie(this.cookie)
  }
  advHeader(){
    return new HeadersHandler(this.header,this.res)
  }
  advJson(){
    return new JsonHandler(this.json,this.status)
  }
}
module.exports = ResEnhancer;
