const Response = require("../response");

class AdvanceMethods extends Response {
  constructor() {
    super();
    this.res = this.res;
  }
  // Set cache control header
  cacheControl(maxAge, isPrivate = false) {
    const directive = isPrivate ? "private" : "public";
    this.res.header("Cache-Control", `${directive}, max-age=${maxAge}`);
  }
  redirectWithCache(url, maxAge, isPrivate = false) {
    this.res.cacheControl(maxAge, isPrivate);
    this.res.redirect(url);
  }
  setCookieWithExpiration(name, value, expirationSeconds, options = {}) {
    const expirationDate = new Date(Date.now() + expirationSeconds * 1000);
    this.res.cookie(name, value, { expires: expirationDate, ...options });
  }
  setCorsHeaders(origin, methods, headers) {
    this.res.header("Access-Control-Allow-Origin", origin);
    this.res.header("Access-Control-Allow-Methods", methods);
    this.res.header("Access-Control-Allow-Headers", headers);
  }
  
}
module.exports = AdvanceMethods;
