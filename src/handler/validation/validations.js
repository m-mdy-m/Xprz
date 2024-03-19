const { RequestValidator } = require("vfyjs");

/**
 * A class for validating request data using vfyjs library.
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
      this._validator = new RequestValidator();
    }
  
    /**
     * Validates the provided data against the given rules.
     * @param {object} data - The data to be validated.
     * @param {object} rules - The validation rules.
     * @param {object} [options={}] - Additional options for validation.
     * @returns {object} - The validation result.
     * @private
     */
    _validate(data, rules, options = {}) {
      return this._validator.validate(data, rules, options);
    }
  }
  
  module.exports = Validation;
  