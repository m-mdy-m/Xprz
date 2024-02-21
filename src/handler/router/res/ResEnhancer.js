const Response = require("../response");
const JsonHandler = require("./Json");
const HandlerCookie = require("./cookie");
const HeadersHandler = require("./header");

class ResEnhancer extends Response {
  constructor() {
    super();
  }
  redirectWithCache(url, maxAge, isPrivate = false) {
    this.cacheControl(maxAge, isPrivate);
    this.redirect(url);
  }
  setCookieWithExpiration(name, value, expirationSeconds, options = {}) {
    const expirationDate = new Date(Date.now() + expirationSeconds * 1000);
    this.cookie(name, value, { expires: expirationDate, ...options });
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
