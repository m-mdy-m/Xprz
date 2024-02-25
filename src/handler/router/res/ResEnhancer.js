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
   * Methods for interacting with JsonHandler instances.
   * @typedef {Object} JsonHandler
   * @method success - Sends a success response with a message.
   * @method list - Sends a response with a list of items along with pagination details.
   * @method created - Sends a response indicating that the resource was created successfully.
   * @method updated - Sends a response indicating that the resource was updated successfully.
   * @method opSuccess - Sends a response indicating that the operation was completed successfully.
   * @method validationFailed - Sends a response indicating that the operation failed due to validation errors.
   * @method deleted - Sends a response indicating that the resource was deleted successfully.
   * @method error - Sends an error response with a status code and message.
   * @method downloadLink - Sends a response with a download link.
   * @method advancedJson - Sends a JSON response with metadata and additional details.
   * @method authRequired - Sends a response indicating that the request requires authentication.
   * @method authzRequired - Sends a response indicating that the request requires authorization.
   * @method internalServerError - Sends a response indicating that the server encountered an unexpected error.
   * @method serviceUnavailable - Sends a response indicating that the resource is temporarily unavailable.
   * @method notFound - Sends a response indicating that the resource was not found.
   * @method redirectResponse - Sends a redirect response.
   * @method fileUploadSuccess - Sends a response for successful file upload.
   * @method badRequest - Sends a response for a bad request.
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
