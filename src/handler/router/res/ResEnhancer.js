const Response = require("../baseRes");
const JsonHandler = require("./Json");
const CookieHandler = require("./cookie");
const HeadersHandler = require("./header");

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
    this.getCookieHandler = this.getCookieHandler.bind(this);
    this.getHeadersHandler = this.getHeadersHandler.bind(this);
    this.getJsonHandler = this.getJsonHandler.bind(this);
  }

  /**
   * Gets an advanced cookie handler.
   * @returns {CookieHandler} Advanced cookie handler.
   * @example
   * const cookieHandler = resEnhancer.getCookieHandler();
   * cookieHandler.set("myCookie", "cookieValue").send();
   */
  getCookieHandler() {
    return new CookieHandler(this.cookie);
  }

  /**
   * Gets an advanced headers handler.
   * @returns {HeadersHandler} Advanced headers handler.
   * @example
   * const headersHandler = resEnhancer.getHeadersHandler();
   * headersHandler.set("Cache-Control", "no-cache").send();
   */
  getHeadersHandler() {
    return new HeadersHandler(this.header, this.res);
  }
  /**
 * Methods for interacting with res.
 * @typedef {Object} JsonHandler
 * @method success
 * @method list
 * @method created
 * @method updated
 * @method opSuccess
 * @method validationFailed
 * @method deleted
 * @method error
 * @method downloadLink
 * @method advancedJson
 * @method authRequired
 * @method authzRequired
 * @method internalServerError
 * @method serviceUnavailable
 * @method notFound
 * @method redirectResponse
 * @method fileUploadSuccess
 * @method badRequest
 */

  /**
   * Gets an advanced JSON handler.
   * @returns {JsonHandler} Advanced JSON handler.
   * @example
   * const jsonHandler = resEnhancer.getJsonHandler();
   * jsonHandler.send({ message: "Success" });
   */
  getJsonHandler() {
    return new JsonHandler(this.json, this.status);
  }
}
module.exports = ResEnhancer;
