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
    /** @private */
    this.req = req;

    // Bind all methods to the current instance
    this.getQuery = this.getQuery.bind(this);
    this.getBody = this.getBody.bind(this);
    this.getHeadersReq = this.getHeadersReq.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.getPath = this.getPath.bind(this);
    this.isAjax = this.isAjax.bind(this);
    this.isSecure = this.isSecure.bind(this);
    this.getIp = this.getIp.bind(this);
    this.getCookies = this.getCookies.bind(this);
    this.hasHeader = this.hasHeader.bind(this);
    this.getHeaderName = this.getHeaderName.bind(this);
    this.getProtocol = this.getProtocol.bind(this);
    this.accepts = this.accepts.bind(this);
    this.param = this.param.bind(this);
    this.getParams = this.getParams.bind(this)
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
   * Retrieves the value of a specific query parameter by its name.
   * @param {string} name - The name of the query parameter.
   * @returns {string|undefined} The value of the query parameter, or undefined if not found.
   * @example
   * const paramValue = query('paramName');
   */
  query(name) {
    return this.req.query[name];
  }
  /**
   * Retrieves the query parameters from the request.
   * @returns {object} The request query parameters.
   * @example
   * const queryParams = getQuery();
   */
  getQuery() {
    return this.req.query;
  }
    /**
   * Sets the request body with the provided properties.
   * @param {object} bodyData - An object containing properties to be assigned to the request body.
   * @example
   * bodyies({ username, name, email });
   */
  bodyies(bodyData) {
    // Assign properties from bodyData to the request body
    Object.assign(this.req.body, bodyData);
  }
  /**
   * Retrieves the request body.
   * @returns {object} The request body.
   * @example
   * const requestBody = getBody();
   */
  getBody() {
    return this.req.body;
  }

  /**
   * Retrieves the request headers.
   * @returns {object} The request headers.
   * @example
   * const requestHeaders = getHeadersReq();
   */
  getHeadersReq() {
    return this.req.headers;
  }

  /**
   * Retrieves the request URL.
   * @returns {string} The request URL.
   * @example
   * const requestUrl = getUrl();
   */
  getUrl() {
    return this.req.url;
  }

  /**
   * Retrieves the request path.
   * @returns {string} The request path.
   * @example
   * const requestPath = getPath();
   */
  getPath() {
    return this.req.path;
  }

  /**
   * Checks if the request is an AJAX request.
   * @returns {boolean} True if the request is an AJAX request, false otherwise.
   * @example
   * const isAjaxRequest = isAjax();
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
   * const isSecure = isSecure();
   */

  isSecure() {
    return this.req.secure;
  }

  /**
   * Gets the IP address of the request.
   * @returns {string} The IP address of the request.
   * @example
   * const ipAddress = getIp();
   */

  getIp() {
    return this.req.ip;
  }

  /**
   * Retrieves the cookies from the request.
   * @returns {object} The cookies sent with the request.
   * @example
   * const cookies = getCookies();
   */

  getCookies() {
    return this.req.cookies;
  }

  /**
   * Checks if the request has a specific header.
   * @param {string} headerName - The name of the header to check.
   * @returns {boolean} True if the request has the specified header, otherwise false.
   * @example
   * const hasHeader = hasHeader('Content-Type');
   */

  hasHeader(headerName) {
    return this.req.headers.hasOwnProperty(headerName);
  }

  /**
   * Gets the value of a specific request header.
   * @param {string} headerName - The name of the header.
   * @returns {string} The value of the specified header.
   * @example
   * const contentType = getHeaderName('Content-Type');
   */

  getHeaderName(headerName) {
    return this.req.headers[headerName];
  }

  /**
   * Retrieves the protocol used by the request (HTTP or HTTPS).
   * @returns {string} The protocol used by the request.
   * @example
   * const protocol =getProtocol();
   */

  getProtocol() {
    return this.req.protocol;
  }

  /**
   * Checks if the request accepts a specific content type.
   * @param {string|string[]} type - The content type to check.
   * @returns {string|false|null} The best matching content type, or false if none of the given types is accepted, or null if the request does not specify a content type preference.
   * @example
   * const contentType = accepts('json');
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
   * const userId = param('userId');
   */
  param(name, handlers) {
    let value = this.req.params[name];

    // Apply optional middleware handlers
    if (handlers && Array.isArray(handlers)) {
      handlers.forEach(handler => {
        value = handler(value);
      });
    }

    return value;
  }
  /**
   * Retrieves all parameters from the request.
   * @returns {object} All parameters from the request.
   * @example
   * const params = getParams();
   */
  getParams() {
    return this.req.params;
  }
  /**
   * Retrieves the URL of the request.
   * @returns {string} The URL of the request.
   * @example
   * const requestUrl = getUrl();
   */

  getUrl() {
    return this.req.url;
  }
  /**
   * Checks if the request matches the given types.
   * @param {string|string[]} types - The types to check against.
   * @returns {string|false|null} The first type that matches, or false if none match, or null if the request does not specify a content type.
   * @example
   * const isJSON = is('json');
   */

  is(types) {
    return this.req.is(types);
  }
  /**
   * Retrieves the path of the request.
   * @returns {string} The path of the request.
   * @example
   * const requestPath = getPath();
   */

  getPath() {
    return this.req.path;
  }
  /**
   * Retrieves the HTTP method of the request.
   * @returns {string} The HTTP method of the request (e.g., GET, POST).
   * @example
   * const method = getMethod();
   */

  getMethod() {
    return this.req.method;
  }

  /**
   * Retrieves an array of subdomains in the domain name of the request.
   * @returns {string[]} An array of subdomains.
   * @example
   * const subdomains = getSubdomains();
   */

  getSubdomains() {
    return this.req.subdomains;
  }

  /**
   * Retrieves the hostname from the request.
   * @returns {string} The hostname.
   * @example
   * const hostname = getHostname();
   */

  getHostname() {
    return this.req.hostname;
  }

  /**
   * Retrieves the host from the request.
   * @returns {string} The host.
   * @example
   * const host = getHost();
   */

  getHost() {
    return this.req.host;
  }
  /**
   * Checks if the request is fresh.
   * @returns {boolean} True if the request is fresh, false otherwise.
   * @example
   * const isFreshRequest = isFresh();
   */

  isFresh() {
    return this.req.fresh;
  }
  /**
   * Checks if the request is stale.
   * @returns {boolean} True if the request is stale, false otherwise.
   * @example
   * const isStaleRequest = isStale();
   */

  isStale() {
    return this.req.stale;
  }
  /**
   * Checks if the request is an XMLHttpRequest (AJAX) request.
   * @returns {boolean} True if the request is an XMLHttpRequest, false otherwise.
   * @example
   * const isXhrRequest = isXhr();
   */

  isXhr() {
    return this.req.xhr;
  }
  /**
   * Retrieves the request language preferences.
   * @returns {string[]} An array of language preferences.
   * @example
   * const languages = getLanguages();
   */

  getLanguages() {
    return this.req.languages;
  }

  /**
   * Retrieves the request encoding preferences.
   * @returns {string[]} An array of encoding preferences.
   * @example
   * const encodings = getEncodings();
   */

  getEncodings() {
    return this.req.encodings;
  }

  /**
   * Retrieves the request charset preferences.
   * @returns {string[]} An array of charset preferences.
   * @example
   * const charsets = getCharsets();
   */

  getCharsets() {
    return this.req.charsets;
  }
}

module.exports = baseReq;
