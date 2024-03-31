const Response = require("../baseRes");
const JsonHandler = require("./Json");
const CookieHandler = require("./cookie");

/**
 * ResEnhancer extends the base Response class to provide additional handlers for cookies, headers, and JSON.
 * @class
 */
class ResEnhancer extends Response {
  /**
   * Creates a new ResEnhancer instance.
   */
  constructor(res) {
    super(res);
    // Bind methods to ensure they have access to the correct 'this' context
    this.cookieManager = this.cookieManager.bind(this);
    this.jsonSender = this.jsonSender.bind(this);
  }
  /**
   * Gets an advanced cookie handler.
   * @returns {CookieHandler} Advanced cookie handler.
   * @example
   * const cookieHandler = resEnhancer.cookieManager();
   * cookieHandler.set("myCookie", "cookieValue").send();
   */
  cookieManager() {
    return new CookieHandler(this.cookie);
  }
  /**
   * Gets an advanced JSON handler.
   * @returns {JsonHandler} Advanced JSON handler.
   * @example
   * const jsonHandler = resEnhancer.jsonSender();
   * jsonHandler.send({ message: "Success" });
   */
  jsonSender() {
    return new JsonHandler(this.json, this.status);
  }
}
module.exports = ResEnhancer;
