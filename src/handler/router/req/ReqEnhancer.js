const Request = require('../baseReq')

class ReqEnhancer extends Request{
    constructor() {
        super()
    }
    // Method to check if the request has a specific query parameter
  hasQueryParam(paramName) {
    return paramName in this.req.query;
  }

  // Method to get a specific query parameter from the request
  getQueryParam(paramName) {
    return this.req.query[paramName];
  }

  // Method to check if the request has a specific body parameter
  hasBodyParam(paramName) {
    return paramName in this.req.body;
  }

  // Method to get a specific body parameter from the request
  getBodyParam(paramName) {
    return this.req.body[paramName];
  }

  // Method to check if the request has a specific cookie
  hasCookie(cookieName) {
    return cookieName in this.req.cookies;
  }

  // Method to get a specific cookie from the request
  getCookie(cookieName) {
    return this.req.cookies[cookieName];
  }

  // Method to check if the request has a specific header with a case-insensitive comparison
  hasHeaderIgnoreCase(headerName) {
    const headers = Object.keys(this.req.headers).map(header => header.toLowerCase());
    return headers.includes(headerName.toLowerCase());
  }

  // Method to get a specific header from the request with a case-insensitive comparison
  getHeaderIgnoreCase(headerName) {
    const headers = Object.keys(this.req.headers).reduce((acc, curr) => {
      acc[curr.toLowerCase()] = this.req.headers[curr];
      return acc;
    }, {});
    return headers[headerName.toLowerCase()];
  }
}

module.exports = ReqEnhancer