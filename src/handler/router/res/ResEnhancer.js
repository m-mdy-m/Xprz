const Response = require("../response");

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
}
module.exports = ResEnhancer;
