/**
 * Class for handling HTTP response headers.
 */
class HeadersHandler {
  /**
   * Creates an instance of HeadersHandler.
   * @param {Function} header - The function used to set headers in the response.
   * @param {Object} res - The HTTP response object.
   */
  constructor(header, res) {
    this.header = header;
    this.res = res;
  }
  /**
   * Sets the Cache-Control header for caching directives.
   * @param {number} maxAge - The maximum age of the cached content in seconds.
   * @param {boolean} [isPrivate=false] - Indicates if the cache is private to a user.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.cacheControl(3600, true);
   */
  cacheControl(maxAge, isPrivate = false) {
    const directive = isPrivate ? "private" : "public";
    this.header("Cache-Control", `${directive}, max-age=${maxAge}`);
  }
  /**
   * Sets CORS headers to allow cross-origin resource sharing.
   * @param {string} origin - The allowed origin domain.
   * @param {string} methods - The allowed HTTP methods.
   * @param {string} headers - The allowed HTTP headers.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setCorsHeaders('https://example.com', 'GET, POST', 'Content-Type');
   */
  setCorsHeaders(origin, methods, headers) {
    this.header("Access-Control-Allow-Origin", origin);
    this.header("Access-Control-Allow-Methods", methods);
    this.header("Access-Control-Allow-Headers", headers);
  }
  /**
   * Sets the Location header for redirection.
   * @param {string} location - The URL to redirect to.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setLocation('/new-location');
   */
  setLocation(location) {
    this.header("Location", location);
  }
  /**
   * Sets the Access-Control-Max-Age header for preflight requests caching.
   * @param {number} maxAge - The maximum age of the preflight request caching.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setCorsMaxAge(3600);
   */
  setCorsMaxAge(maxAge) {
    this.header("Access-Control-Max-Age", maxAge);
  }
  /**
   * Sets the Vary header to specify which request header fields are used to select a representation.
   * @param {string} headers - The request headers to base the selection on.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setVaryHeader('Accept-Encoding');
   */
  setVaryHeader(headers) {
    this.header("Vary", headers);
  }
  /**
   * Sets the Pragma header for backward compatibility.
   * @param {string} value - The value of the Pragma header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setPragma('no-cache');
   */
  setPragma(value) {
    this.header("Pragma", value);
  }

  /**
   * Sets the Trailer header for indicating the presence of trailer fields in a chunked transfer-coding.
   * @param {string} value - The value of the Trailer header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setTrailer('My-Trailer-Field');
   */
  setTrailer(value) {
    this.header("Trailer", value);
  }

  /**
   * Sets the Transfer-Encoding header for indicating the form of encoding used to safely transfer the entity to the user.
   * @param {string} encoding - The value of the Transfer-Encoding header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setTransferEncoding('chunked');
   */
  setTransferEncoding(encoding) {
    this.header("Transfer-Encoding", encoding);
  }

  /**
   * Sets the Upgrade header for specifying additional communication protocols.
   * @param {string} value - The value of the Upgrade header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setUpgrade('WebSocket');
   */
  setUpgrade(value) {
    this.header("Upgrade", value);
  }

  /**
   * Sets the Warning header to provide additional information about the status or transformation of a message.
   * @param {string} value - The value to set for the Warning header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setWarning("299 - Miscellaneous persistent warning");
   */
  setWarning(value) {
    this.header("Warning", value);
  }

  /**
   * Sets the WWW-Authenticate header to indicate the authentication method that should be used to access a resource.
   * @param {string} value - The value to set for the WWW-Authenticate header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setWWWAuthenticate("Bearer realm='example'");
   */
  setWWWAuthenticate(value) {
    this.header("WWW-Authenticate", value);
  }

  /**
   * Sets the X-Forwarded-For header to indicate the client IP address when behind a proxy or a load balancer.
   * @param {string} value - The IP address to set for the X-Forwarded-For header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setXForwardedFor("203.0.113.195");
   */
  setXForwardedFor(value) {
    this.header("X-Forwarded-For", value);
  }

  /**
   * Sets the X-Forwarded-Proto header to indicate the protocol (HTTP or HTTPS) that a client used to connect to a proxy or a load balancer.
   * @param {string} value - The protocol value to set for the X-Forwarded-Proto header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setXForwardedProto("https");
   */
  setXForwardedProto(value) {
    this.header("X-Forwarded-Proto", value);
  }

  /**
   * Sets the X-Real-IP header to indicate the actual client IP address, particularly useful when behind a proxy or a load balancer.
   * @param {string} value - The IP address to set for the X-Real-IP header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setXRealIP("203.0.113.195");
   */
  setXRealIP(value) {
    this.header("X-Real-IP", value);
  }

  /**
   * Sets the Retry-After header to indicate when a resource will be available after a temporary error.
   * @param {string} value - The value to set for the Retry-After header, either a number of seconds or a HTTP-date.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setRetryAfter("3600");
   */
  setRetryAfter(value) {
    this.header("Retry-After", value);
  }

  /**
   * Sets the Expires header to specify a date/time after which the response should be considered stale.
   * @param {Date} expirationDate - The expiration date/time to set for the Expires header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setExpires(new Date(Date.now() + 3600 * 1000));
   */
  setExpires(expirationDate) {
    this.header("Expires", expirationDate.toUTCString());
  }
  /**
   * Sets the X-Content-Type-Options header to prevent MIME-sniffing.
   * @param {string} value - The value to set for the X-Content-Type-Options header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setContentTypeOptions("nosniff");
   */
  setContentTypeOptions(value) {
    this.header("X-Content-Type-Options", value);
  }
  /**
   * Sets the Content-Security-Policy header to specify security policies for the resource.
   * @param {string} policy - The policy to set for the Content-Security-Policy header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setContentSecurityPolicy("default-src 'self'");
   */
  setContentSecurityPolicy(policy) {
    this.header("Content-Security-Policy", policy);
  }
  /**
   * Sets the X-Content-Type-Options header to prevent MIME-sniffing.
   * @param {string} value - The value to set for the X-Content-Type-Options header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setContentTypeOptions("nosniff");
   */
  setContentTypeOptions(value) {
    this.header("X-Content-Type-Options", value);
  }
  /**
   * Sets the HTTP Strict Transport Security (HSTS) header to enforce secure connections.
   * @param {number} maxAge - The maximum age of the HSTS policy in seconds.
   * @param {boolean} [includeSubDomains=true] - Indicates whether to include subdomains in the HSTS policy.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setHSTSHeader(31536000, true); // Max age of 1 year, including subdomains
   */
  setHSTSHeader(maxAge, includeSubDomains = true) {
    const directive = `max-age=${maxAge}${
      includeSubDomains ? "; includeSubDomains" : ""
    }`;
    this.header("Strict-Transport-Security", directive);
  }
  /**
   * Sets the X-Content-Type-Options header to prevent MIME-sniffing by the browser.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setNoSniffHeader();
   */
  setNoSniffHeader() {
    this.header("X-Content-Type-Options", "nosniff");
  }
  /**
   * Sets the Referrer-Policy header to control how much referrer information should be included with requests.
   * @param {string} value - The value to set for the Referrer-Policy header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setReferrerPolicy("no-referrer");
   */

  setReferrerPolicy(value) {
    this.header("Referrer-Policy", value);
  }
  /**
   * Sets the Strict-Transport-Security header to enforce secure connections.
   * @param {string} value - The value to set for the Strict-Transport-Security header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setStrictTransportSecurity("max-age=31536000; includeSubDomains");
   */
  setStrictTransportSecurity(value) {
    this.header("Strict-Transport-Security", value);
  }
  /**
   * Sets the X-Frame-Options header to control whether a browser should be allowed to render a page in a frame or iframe.
   * @param {string} value - The value to set for the X-Frame-Options header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setFrameOptions("deny");
   */
  setFrameOptions(value) {
    this.header("X-Frame-Options", value);
  }
  /**
   * Sets the X-XSS-Protection header to enable the Cross-Site Scripting (XSS) filter built into most modern web browsers.
   * @param {string} value - The value to set for the X-XSS-Protection header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setXssProtection("1; mode=block");
   */
  setXssProtection(value) {
    this.header("X-XSS-Protection", value);
  }

  /**
   * Sets the Expect-CT header to enforce Certificate Transparency requirements.
   * @param {string} value - The value to set for the Expect-CT header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setExpectCTHeader("enforce, max-age=3600");
   */
  setExpectCTHeader(value) {
    this.header("Expect-CT", value);
  }

  /**
   * Sets the Feature-Policy header to control which features and APIs can be used in the browser context.
   * @param {string} value - The value to set for the Feature-Policy header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setFeaturePolicy("geolocation 'self'");
   */
  setFeaturePolicy(value) {
    this.header("Feature-Policy", value);
  }

  /**
   * Sets the Public-Key-Pins header to associate a specific cryptographic public key with a web server.
   * @param {string} value - The value to set for the Public-Key-Pins header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setPublicKeyPinsHeader("pin-sha256=\"base64==\"; max-age=5184000; includeSubDomains");
   */
  setPublicKeyPinsHeader(value) {
    this.header("Public-Key-Pins", value);
  }
  /**
   * Sets the Cross-Origin Embedder Policy (COEP) header to control how a document is embedded in other documents.
   * @param {string} policy - The value to set for the Cross-Origin Embedder Policy (COEP) header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setCrossOriginEmbedderPolicy("require-corp");
   */
  setCrossOriginEmbedderPolicy(policy) {
    this.header("Cross-Origin-Embedder-Policy", policy);
  }

  /**
   * Sets the Cross-Origin Opener Policy (COOP) header to control which documents can be opened in the same origin.
   * @param {string} policy - The value to set for the Cross-Origin Opener Policy (COOP) header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setCrossOriginOpenerPolicy("same-origin-allow-popups");
   */
  setCrossOriginOpenerPolicy(policy) {
    this.header("Cross-Origin-Opener-Policy", policy);
  }

  /**
   * Sets the Cross-Origin Resource Policy (CORP) header to control which origins can fetch resources.
   * @param {string} policy - The value to set for the Cross-Origin Resource Policy (CORP) header.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.setCrossOriginResourcePolicy("same-site");
   */
  setCrossOriginResourcePolicy(policy) {
    this.header("Cross-Origin-Resource-Policy", policy);
  }
  /**
   * Clears the specified header from the HTTP response.
   * @param {string} name - The name of the header to clear.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.clearHeader("Content-Type");
   */
  clearHeader(name) {
    this.res.removeHeader(name);
  }

  /**
   * Clears all headers from the HTTP response.
   * @example
   * const headersHandler = new HeadersHandler();
   * headersHandler.clearAllHeaders();
   */
  clearAllHeaders() {
    this.res.clearHeaders();
  }
}
module.exports = HeadersHandler;
