const { RequestValidator } = require("vfyjs");

/**
 * A class for validating request data using the vfyjs library.
 */
class Validation {
  /**
   * Create a Validation instance.
   * @param {object} request - The request object containing data to be validated.
   */
  constructor(request) {
    /**
     * The request object.
     * @type {object}
     * @private
     */
    this._req = request;

    /**
     * The RequestValidator instance.
     * @type {RequestValidator}
     * @private
     */
    this._validator = new RequestValidator(this._req);
  }
  /**
   * Validates the request data against the provided rules and options.
   * @param {object} rules - The validation rules to be applied.
   * @param {object} [options={}] - Additional options for validation.
   * @returns {object} - The validation result.
   * @public
   * @example
   * const validationRules = {
   *   username: 'string',
   *   password: 'string|min:6',
   * };
   * const errors = req.validate(req.body,validationRules);
   */
  validate(rules, options = {}) {
    return this._validator.validate(rules, options);
  }
  /**
   * Validates the body of the request against the provided rules.
   * @param {object} rules - The validation rules to be applied.
   * @param {object} [options={}] - Additional options for validation.
   * @returns {object} - The validation result.
   * @public
   * @example
   * const validationRules = {
   *   username: 'string',
   *   password: 'string|min:6',
   * };
   * const validationResult = request.verifyBody(validationRules);
   */
  body(rules, options = {}) {
    return this._validator.validate(rules, options);
  }
}

module.exports = Validation;
