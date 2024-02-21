const Response = require("../response");
const JsonHandler = require("./Json");
const CookieHandler = require("./cookie");
const HeadersHandler = require("./header");

class ResEnhancer extends Response {
  constructor() {
    super();
  }

  // Method to get an advanced cookie handler
  getCookieHandler() {
    return new CookieHandler(this.cookie);
  }

  // Method to get an advanced headers handler
  getHeadersHandler() {
    return new HeadersHandler(this.header, this.res);
  }

  // Method to get an advanced JSON handler
  getJsonHandler() {
    return new JsonHandler(this.json, this.status);
  }
}
module.exports = ResEnhancer;
