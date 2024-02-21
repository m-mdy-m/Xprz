const Response = require("../response");

class AdvanceMethods extends Response {
  constructor() {
    super();
    this.res = this.res;
  }
  getAllCookies() {
    return this.res.cookies;
  }
  setHeaders(headers) {
    for (const [key, value] of Object.entries(headers)) {
      this.res.setHeader(key, value);
    }
  }
  getHeaders() {
    return this.res.getHeaders();
  }
  getHeaderValue(headerName) {
    return this.getHeader(headerName);
  }
  clearAllCookies() {
    const cookies = this.getAllCookies();
    for (const cookieName in cookies) {
      this.clearCookie(cookieName);
    }
  }
  endResponse() {
    this.end();
  }
}
module.exports = AdvanceMethods;
