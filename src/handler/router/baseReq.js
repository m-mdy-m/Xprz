class baseReq {
  constructor(req) {
    this.req = req;
  }

  // Method to get request query parameters
  getQueryParams() {
    return this.req.query;
  }

  // Method to get request body
  getBody() {
    return this.req.body;
  }

  // Method to get request headers
  getHeaders() {
    return this.req.headers;
  }

  // Method to get request URL
  getUrl() {
    return this.req.url;
  }

  // Method to get request path
  getPath() {
    return this.req.path;
  }

  // Method to check if the request is an AJAX request
  isAjax() {
    return (
      this.req.xhr ||
      (this.req.headers.accept && this.req.headers.accept.includes("json"))
    );
  }

  // Method to check if the request is secure (HTTPS)
  isSecure() {
    return this.req.secure;
  }

  // Method to get request IP address
  getIp() {
    return this.req.ip;
  }

  // Method to get request cookies
  getCookies() {
    return this.req.cookies;
  }

  // Method to check if a request has a specific header
  hasHeader(headerName) {
    return this.req.headers.hasOwnProperty(headerName);
  }

  // Method to get a specific request header
  getHeader(headerName) {
    return this.req.headers[headerName];
  }

  // Method to get request protocol
  getProtocol() {
    return this.req.protocol;
  }

  // Method to check if the request accepts a specific content type
  accepts(type) {
    return this.req.accepts(type);
  }
  param(name, handlers) {
    return this.req.param(name, handlers);
  }
  // Method to get the request URL
  getUrl() {
    return this.req.url;
  }
  // Method to check if the request matches the given types
  is(types) {
    return this.req.is(types);
  }
  getPath() {
    return this.req.path;
  }
  // Method to get the request method (GET, POST, etc.)
  getMethod() {
    return this.req.method;
  }

  // Method to get an array of subdomains in the domain name of the request
  subdomains() {
    return this.req.subdomains;
  }

  hostname() {
    return this.req.hostname;
  }
  // Method to get the host from the request
  host() {
    return this.req.host;
  }
  // Method to check if the request is fresh
  fresh() {
    return this.req.fresh;
  }
  // Method to check if the request is stale
  stale() {
    return this.req.stale;
  }
  xhr() {
    return this.req.xhr;
  }
}

module.exports = baseReq;
