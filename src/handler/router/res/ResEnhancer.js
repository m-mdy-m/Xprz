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
   * Methods for interacting with HeadersHandler instances.
   * @typedef {Object} HeadersHandler
   * @property {Function} cacheControl - Sets the Cache-Control header.
   * @property {Function} setCorsHeaders - Sets Cross-Origin Resource Sharing (CORS) headers.
   * @property {Function} setLocation - Sets the Location header for redirection.
   * @property {Function} setCorsMaxAge - Sets the Access-Control-Max-Age header for CORS preflight requests.
   * @property {Function} setVaryHeader - Sets the Vary header to inform caching mechanisms.
   * @property {Function} setPragma - Sets the Pragma header for HTTP 1.0 compatibility.
   * @property {Function} setTrailer - Sets the Trailer header.
   * @property {Function} setTransferEncoding - Sets the Transfer-Encoding header.
   * @property {Function} setUpgrade - Sets the Upgrade header.
   * @property {Function} setWarning - Sets the Warning header.
   * @property {Function} setWWWAuthenticate - Sets the WWW-Authenticate header.
   * @property {Function} setXForwardedFor - Sets the X-Forwarded-For header.
   * @property {Function} setXForwardedProto - Sets the X-Forwarded-Proto header.
   * @property {Function} setXRealIP - Sets the X-Real-IP header.
   * @property {Function} setRetryAfter - Sets the Retry-After header.
   * @property {Function} setExpires - Sets the Expires header.
   * @property {Function} setContentTypeOptions - Sets the X-Content-Type-Options header.
   * @property {Function} setContentSecurityPolicy - Sets the Content-Security-Policy header.
   * @property {Function} setHSTSHeader - Sets the HTTP Strict Transport Security (HSTS) header.
   * @property {Function} setNoSniffHeader - Sets the X-Content-Type-Options nosniff header.
   * @property {Function} setReferrerPolicy - Sets the Referrer-Policy header.
   * @property {Function} setStrictTransportSecurity - Sets the Strict-Transport-Security header.
   * @property {Function} setFrameOptions - Sets the X-Frame-Options header.
   * @property {Function} setXssProtection - Sets the X-XSS-Protection header.
   * @property {Function} setExpectCTHeader - Sets the Expect-CT header.
   * @property {Function} setFeaturePolicy - Sets the Feature-Policy header.
   * @property {Function} setPublicKeyPinsHeader - Sets the Public-Key-Pins header.
   * @property {Function} setCrossOriginEmbedderPolicy - Sets the Cross-Origin-Embedder-Policy header.
   * @property {Function} setCrossOriginOpenerPolicy - Sets the Cross-Origin-Opener-Policy header.
   * @property {Function} setCrossOriginResourcePolicy - Sets the Cross-Origin-Resource-Policy header.
   * @property {Function} clearHeader - Clears the specified header.
   * @property {Function} clearAllHeaders - Clears all headers.
   */
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
   * @property {Function} success - Sends a success response with a message.
   * @property {Function} list - Sends a response with a list of items along with pagination details.
   * @property {Function} created - Sends a response indicating that the resource was created successfully.
   * @property {Function} updated - Sends a response indicating that the resource was updated successfully.
   * @property {Function} opSuccess - Sends a response indicating that the operation was completed successfully.
   * @property {Function} validationFailed - Sends a response indicating that the operation failed due to validation errors.
   * @property {Function} deleted - Sends a response indicating that the resource was deleted successfully.
   * @property {Function} error - Sends an error response with a status code and message.
   * @property {Function} downloadLink - Sends a response with a download link.
   * @property {Function} advancedJson - Sends a JSON response with metadata and additional details.
   * @property {Function} authRequired - Sends a response indicating that the request requires authentication.
   * @property {Function} authzRequired - Sends a response indicating that the request requires authorization.
   * @property {Function} internalServerError - Sends a response indicating that the server encountered an unexpected error.
   * @property {Function} serviceUnavailable - Sends a response indicating that the resource is temporarily unavailable.
   * @property {Function} notFound - Sends a response indicating that the resource was not found.
   * @property {Function} redirectResponse - Sends a redirect response.
   * @property {Function} fileUploadSuccess - Sends a response for successful file upload.
   * @property {Function} badRequest - Sends a response for a bad request.
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
