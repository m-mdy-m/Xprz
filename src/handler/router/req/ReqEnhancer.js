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
    this.validation = new Validation(req.body);
    // Bind methods to ensure they have access to the correct 'this' context
    this.hasQueryParam = this.hasQueryParam.bind(this);
    this.validate = this.validate.bind(this)
    this.verifyBody = this.verifyBody.bind(this);
    this.getQueryParam = this.getQueryParam.bind(this);
    this.hasBodyParam = this.hasBodyParam.bind(this);
    this.hasCookie = this.hasCookie.bind(this);
    this.getCookieName = this.getCookieName.bind(this);
    this.hasHeaderIgnoreCase = this.hasHeaderIgnoreCase.bind(this);
    this.getHeaderIgnoreCase = this.getHeaderIgnoreCase.bind(this);
    this.isMethod = this.isMethod.bind(this);
    this.getAcceptedContentTypes = this.getAcceptedContentTypes.bind(this);
  }

  /**
   * Validates a request object against specified rules.
   * @param {object} req - The request object to be validated.
   * @param {object} rules - The validation rules to be applied.
   * @param {object} [options={}] - Additional options for validation.
   * @returns {object} - The validation result.
   * @example
   * // Define the request object and validation rules
   * const request = { body: { username: 'example', age: 25 } };
   * const rules = { username: 'string|username', age: 'number|min:18' };
   * // Validate the request
   * const errors = validate(ctx.body, rules);
   * // Handle the validation result
   * if (Object.keys(errors).length === 0) {
   *   res.status(200).json({ success: true });
   * } else {
   *   res.status(400).json({ success: false, errors });
   * }
   */
  validate(req, rules, options = {}) {
    // Create a new instance of RequestValidator
    const validator = new Validation(req);
    // Perform validation using the provided rules and options
    return validator.validate(rules, options);
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
   * const errors = ctx.req.verifyBody(validationRules, validationOptions);
   * if (Object.keys(errors).length === 0) {
   *   console.log('Request body is valid.');
   * } else {
   *   console.error('Validation errors:', errors);
   * }
   */
  verifyBody(rules, options = {}) {
    // Perform validation and return the result
    return this.validation.body(rules, options);
  }

  /**
   * Checks if the request is sent with a specific HTTP method.
   * @param {string} method - The HTTP method to check (e.g., 'GET', 'POST').
   * @returns {boolean} True if the request method matches the specified method, otherwise false.
   * @example
   * 
   * const isGetMethod = ctx.req.isMethod('GET');
   */
  isMethod(method) {
    return this.req.method.toLowerCase() === method.toLowerCase();
  }
  /**
   * Retrieves the accepted content types by the request.
   * @returns {string[]} An array of accepted content types.
   * @example
   * 
   * const acceptedTypes = ctx.req.getAcceptedContentTypes();
   */
  getAcceptedContentTypes() {
    return this.req.accepts();
  }
}

module.exports = ReqEnhancer;
