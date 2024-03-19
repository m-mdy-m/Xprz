const Validation = require("../../validation/validations");
const Request = require("../baseReq");
/**
 * Class extending the baseReq class to enhance request handling capabilities.
 * @extends Request
 */
class ReqEnhancer extends Request {
  constructor(req) {
    super(req);
    /** @private */
    this.validation = new Validation(req);
    // Bind methods to ensure they have access to the correct 'this' context
    this.hasQueryParam = this.hasQueryParam.bind(this);
    this.verifyBody = this.verifyBody.bind(this)
    this.getQueryParam = this.getQueryParam.bind(this);
    this.hasBodyParam = this.hasBodyParam.bind(this);
    this.getBodyParam = this.getBodyParam.bind(this);
    this.hasCookie = this.hasCookie.bind(this);
    this.getCookieName = this.getCookieName.bind(this);
    this.hasHeaderIgnoreCase = this.hasHeaderIgnoreCase.bind(this);
    this.getHeaderIgnoreCase = this.getHeaderIgnoreCase.bind(this);
    this.isMethod = this.isMethod.bind(this);
    this.getAllParams = this.getAllParams.bind(this);
    this.getAcceptedContentTypes = this.getAcceptedContentTypes.bind(this);
  }
  /**
   * Validates the request body against the provided rules.
   * @param {object} rules - The validation rules to be applied.
   * @param {object} [options={}] - Additional options for validation.
   * @returns {object} - The validation result.
   * @example
   * // Define validation rules
   * const validationRules = {
   *   username: 'string',
   *   password: 'string|min:6',
   * };
   * // Additional options for validation
   * const validationOptions = {
   *   customMessages: {
   *     password: 'Password must be at least 6 characters long.',
   *   },
   * };
   * // Validate request body
   * const errors = request.verifyBody(validationRules, validationOptions);
   * if (Object.keys(errors).length === 0) {
   *   console.log('Request body is valid.');
   * } else {
   *   console.error('Validation errors:', errors);
   * }
   */
  verifyBody(rules, options = {}) {
    return this.validation.body(rules, options);
  }
  /**
   * Checks if the request has a specific query parameter.
   * @param {string} paramName - The name of the query parameter to check.
   * @returns {boolean} True if the query parameter exists, otherwise false.
   * @example
   * const request = new ReqEnhancer();
   * const hasParam = request.hasQueryParam('paramName');
   */
  hasQueryParam(paramName) {
    return paramName in this.req.query;
  }

  /**
   * Retrieves a specific query parameter from the request.
   * @param {string} paramName - The name of the query parameter to retrieve.
   * @returns {*} The value of the query parameter, or undefined if not found.
   * @example
   * const request = new ReqEnhancer();
   * const paramValue = request.getQueryParam('paramName');
   */
  getQueryParam(paramName) {
    return this.req.query[paramName];
  }

  /**
   * Checks if the request has a specific body parameter.
   * @param {string} paramName - The name of the body parameter to check.
   * @returns {boolean} True if the body parameter exists, otherwise false.
   * @example
   * const request = new ReqEnhancer();
   * const hasParam = request.hasBodyParam('paramName');
   */
  hasBodyParam(paramName) {
    return paramName in this.req.body;
  }

  /**
   * Retrieves a specific body parameter from the request.
   * @param {string} paramName - The name of the body parameter to retrieve.
   * @returns {*} The value of the body parameter, or undefined if not found.
   * @example
   * const request = new ReqEnhancer();
   * const paramValue = request.getBodyParam('paramName');
   */
  getBodyParam(paramName) {
    return this.req.body[paramName];
  }

  /**
   * Checks if the request has a specific cookie.
   * @param {string} cookieName - The name of the cookie to check.
   * @returns {boolean} True if the cookie exists, otherwise false.
   * @example
   * const request = new ReqEnhancer();
   * const hasCookie = request.hasCookie('cookieName');
   */
  hasCookie(cookieName) {
    return cookieName in this.req.cookies;
  }

  /**
   * Retrieves a specific cookie from the request.
   * @param {string} cookieName - The name of the cookie to retrieve.
   * @returns {*} The value of the cookie, or undefined if not found.
   * @example
   * const request = new ReqEnhancer();
   * const cookieValue = request.getCookieName('cookieName');
   */
  getCookieName(cookieName) {
    return this.req.cookies[cookieName];
  }

  /**
   * Checks if the request has a specific header with a case-insensitive comparison.
   * @param {string} headerName - The name of the header to check.
   * @returns {boolean} True if the header exists, otherwise false.
   * @example
   * const request = new ReqEnhancer();
   * const hasHeader = request.hasHeaderIgnoreCase('headerName');
   */
  hasHeaderIgnoreCase(headerName) {
    const headers = Object.keys(this.req.headers).map((header) =>
      header.toLowerCase()
    );
    return headers.includes(headerName.toLowerCase());
  }

  /**
   * Retrieves a specific header from the request with a case-insensitive comparison.
   * @param {string} headerName - The name of the header to retrieve.
   * @returns {*} The value of the header, or undefined if not found.
   * @example
   * const request = new ReqEnhancer();
   * const headerValue = request.getHeaderIgnoreCase('headerName');
   */
  getHeaderIgnoreCase(headerName) {
    const headers = Object.keys(this.req.headers).reduce((acc, curr) => {
      acc[curr.toLowerCase()] = this.req.headers[curr];
      return acc;
    }, {});
    return headers[headerName.toLowerCase()];
  }

  /**
   * Checks if the request is sent with a specific HTTP method.
   * @param {string} method - The HTTP method to check (e.g., 'GET', 'POST').
   * @returns {boolean} True if the request method matches the specified method, otherwise false.
   * @example
   * const request = new ReqEnhancer();
   * const isGetMethod = request.isMethod('GET');
   */
  isMethod(method) {
    return this.req.method.toLowerCase() === method.toLowerCase();
  }
  /**
   * Retrieves all parameters from the request, including query parameters, body parameters, and cookies.
   * @returns {Object} An object containing all request parameters.
   * @example
   * const request = new ReqEnhancer();
   * const allParams = request.getAllParams();
   */
  getAllParams() {
    return {
      query: this.getQuery(),
      body: this.getBody(),
      cookies: this.getCookies(),
    };
  }
  /**
   * Retrieves the accepted content types by the request.
   * @returns {string[]} An array of accepted content types.
   * @example
   * const request = new ReqEnhancer();
   * const acceptedTypes = request.getAcceptedContentTypes();
   */
  getAcceptedContentTypes() {
    return this.req.accepts();
  }
}

module.exports = ReqEnhancer;
