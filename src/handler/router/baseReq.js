/**
 * Represents a base request handler providing utility methods for handling HTTP requests.
 * @class
 */
class baseReq {
  /**
   * Creates a new baseReq instance.
   * @param {object} req - The Express request object.
   */
  constructor(req) {
    this.req = req;

    // Bind all methods to the current instance
    this.getQuery = this.getQuery.bind(this);
    this.getBody = this.getBody.bind(this);
    this.getHeaders = this.getHeaders.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.getPath = this.getPath.bind(this);
    this.isAjax = this.isAjax.bind(this);
    this.isSecure = this.isSecure.bind(this);
    this.getIp = this.getIp.bind(this);
    this.getCookies = this.getCookies.bind(this);
    this.hasHeader = this.hasHeader.bind(this);
    this.getHeader = this.getHeader.bind(this);
    this.getProtocol = this.getProtocol.bind(this);
    this.accepts = this.accepts.bind(this);
    this.param = this.param.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.is = this.is.bind(this);
    this.getPath = this.getPath.bind(this);
    this.getMethod = this.getMethod.bind(this);
    this.getSubdomains = this.getSubdomains.bind(this);
    this.getHostname = this.getHostname.bind(this);
    this.getHost = this.getHost.bind(this);
    this.isFresh = this.isFresh.bind(this);
    this.isStale = this.isStale.bind(this);
    this.isXhr = this.isXhr.bind(this);
    this.getLanguages = this.getLanguages.bind(this);
    this.getEncodings = this.getEncodings.bind(this);
    this.getCharsets = this.getCharsets.bind(this);
  }

  /**
   * Retrieves the query parameters from the request.
   * @returns {object} The request query parameters.
   * @example
   * const queryParams = req.getQuery();
   */
  getQuery() {
    return this.req.query;
  }

  /**
   * Retrieves the request body.
   * @returns {object} The request body.
   * @example
   * const requestBody = req.getBody();
   */
  getBody() {
    return this.req.body;
  }

  /**
   * Retrieves the request headers.
   * @returns {object} The request headers.
   * @example
   * const requestHeaders = req.getHeaders();
   */
  getHeaders() {
    return this.req.headers;
  }

  /**
   * Retrieves the request URL.
   * @returns {string} The request URL.
   * @example
   * const requestUrl = req.getUrl();
   */
  getUrl() {
    return this.req.url;
  }

  /**
   * Retrieves the request path.
   * @returns {string} The request path.
   * @example
   * const requestPath = req.getPath();
   */
  getPath() {
    return this.req.path;
  }

  /**
   * Checks if the request is an AJAX request.
   * @returns {boolean} True if the request is an AJAX request, false otherwise.
   * @example
   * const isAjaxRequest = req.isAjax();
   */
  isAjax() {
    return (
      this.req.xhr ||
      (this.req.headers.accept && this.req.headers.accept.includes("json"))
    );
  }

  /**
   * Checks if the request is secure (HTTPS).
   * @returns {boolean} True if the request is secure (HTTPS), otherwise false.
   * @example
   * const isSecure = req.isSecure();
   */

  isSecure() {
    return this.req.secure;
  }

  /**
   * Gets the IP address of the request.
   * @returns {string} The IP address of the request.
   * @example
   * const ipAddress = req.getIp();
   */

  getIp() {
    return this.req.ip;
  }

  /**
   * Retrieves the cookies from the request.
   * @returns {object} The cookies sent with the request.
   * @example
   * const cookies = req.getCookies();
   */

  getCookies() {
    return this.req.cookies;
  }

  /**
   * Checks if the request has a specific header.
   * @param {string} headerName - The name of the header to check.
   * @returns {boolean} True if the request has the specified header, otherwise false.
   * @example
   * const hasHeader = req.hasHeader('Content-Type');
   */

  hasHeader(headerName) {
    return this.req.headers.hasOwnProperty(headerName);
  }

  /**
   * Gets the value of a specific request header.
   * @param {string} headerName - The name of the header.
   * @returns {string} The value of the specified header.
   * @example
   * const contentType = req.getHeader('Content-Type');
   */

  getHeader(headerName) {
    return this.req.headers[headerName];
  }

  /**
   * Retrieves the protocol used by the request (HTTP or HTTPS).
   * @returns {string} The protocol used by the request.
   * @example
   * const protocol = req.getProtocol();
   */

  getProtocol() {
    return this.req.protocol;
  }

  /**
   * Checks if the request accepts a specific content type.
   * @param {string|string[]} type - The content type to check.
   * @returns {string|false|null} The best matching content type, or false if none of the given types is accepted, or null if the request does not specify a content type preference.
   * @example
   * const contentType = req.accepts('json');
   */

  accepts(type) {
    return this.req.accepts(type);
  }
  /**
   * Retrieves the value of a parameter from the request.
   * @param {string} name - The name of the parameter.
   * @param {Function[]} [handlers] - Optional middleware for processing the parameter.
   * @returns {*} The value of the specified parameter.
   * @example
   * const userId = req.param('userId');
   */

  param(name, handlers) {
    return this.req.param(name, handlers);
  }
  /**
   * Retrieves the URL of the request.
   * @returns {string} The URL of the request.
   * @example
   * const requestUrl = req.getUrl();
   */

  getUrl() {
    return this.req.url;
  }
  /**
   * Checks if the request matches the given types.
   * @param {string|string[]} types - The types to check against.
   * @returns {string|false|null} The first type that matches, or false if none match, or null if the request does not specify a content type.
   * @example
   * const isJSON = req.is('json');
   */

  is(types) {
    return this.req.is(types);
  }
  /**
   * Retrieves the path of the request.
   * @returns {string} The path of the request.
   * @example
   * const requestPath = req.getPath();
   */

  getPath() {
    return this.req.path;
  }
  /**
   * Retrieves the HTTP method of the request.
   * @returns {string} The HTTP method of the request (e.g., GET, POST).
   * @example
   * const method = req.getMethod();
   */

  getMethod() {
    return this.req.method;
  }

  /**
   * Retrieves an array of subdomains in the domain name of the request.
   * @returns {string[]} An array of subdomains.
   * @example
   * const subdomains = req.getSubdomains();
   */

  getSubdomains() {
    return this.req.subdomains;
  }

  /**
   * Retrieves the hostname from the request.
   * @returns {string} The hostname.
   * @example
   * const hostname = req.getHostname();
   */

  getHostname() {
    return this.req.hostname;
  }

  /**
   * Retrieves the host from the request.
   * @returns {string} The host.
   * @example
   * const host = req.getHost();
   */

  getHost() {
    return this.req.host;
  }
  /**
   * Checks if the request is fresh.
   * @returns {boolean} True if the request is fresh, false otherwise.
   * @example
   * const isFreshRequest = req.isFresh();
   */

  isFresh() {
    return this.req.fresh;
  }
  /**
   * Checks if the request is stale.
   * @returns {boolean} True if the request is stale, false otherwise.
   * @example
   * const isStaleRequest = req.isStale();
   */

  isStale() {
    return this.req.stale;
  }
  /**
   * Checks if the request is an XMLHttpRequest (AJAX) request.
   * @returns {boolean} True if the request is an XMLHttpRequest, false otherwise.
   * @example
   * const isXhrRequest = req.isXhr();
   */

  isXhr() {
    return this.req.xhr;
  }
  /**
   * Retrieves the request language preferences.
   * @returns {string[]} An array of language preferences.
   * @example
   * const languages = req.getLanguages();
   */

  getLanguages() {
    return this.req.languages;
  }

  /**
   * Retrieves the request encoding preferences.
   * @returns {string[]} An array of encoding preferences.
   * @example
   * const encodings = req.getEncodings();
   */

  getEncodings() {
    return this.req.encodings;
  }

  /**
   * Retrieves the request charset preferences.
   * @returns {string[]} An array of charset preferences.
   * @example
   * const charsets = req.getCharsets();
   */

  getCharsets() {
    return this.req.charsets;
  }
}

module.exports = baseReq;
