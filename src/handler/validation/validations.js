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
    this._validator = new RequestValidator();
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
    return this._validator.validate(this._req.body, rules, options);
  }
  /**
   * Available validators:
   * - **Type Validators**
   *   - *string*: Validates that the data is a string.
   *   - *number*: Validates that the data is a number.
   *   - *array*: Validates that the data is an array.
   *   - *object*: Validates that the data is an object.
   *   - *boolean*: Validates that the data is a boolean.
   *
   * - **Length Validators**
   *   - *min*: Validates that the length of the data meets a minimum requirement.
   *   - *max*: Validates that the length of the data does not exceed a maximum limit.
   *   - *lengthRange*: Validates that the length of the data falls within a specified range.
   *   - *dateRange*: Validates that a date falls within a specified range.
   *   - *arrayLength*: Validates the length of an array.
   *   - *arrayRange*: Validates that the number of elements in an array falls within a specified range.
   *   - *objectKeys*: Validates the number of keys in an object.
   *
   * - **Case Validators**
   *   - *uppercase*: Validates that the data contains uppercase letters.
   *   - *lowercase*: Validates that the data contains lowercase letters.
   *
   * - **Format Validators**
   *   - *specialCharacter*: Validates that the data contains special characters.
   *   - *email*: Validates that the data is a valid email address.
   *   - *date*: Validates that the data is a valid date.
   *   - *url*: Validates that the data is a valid URL.
   *   - *phoneNumber*: Validates that the data is a valid phone number.
   *   - *ipv4*: Validates that the data is a valid IPv4 address.
   *   - *ipv6*: Validates that the data is a valid IPv6 address.
   *   - *http*: Validates that the data is a valid HTTP URL.
   *   - *https*: Validates that the data is a valid HTTPS URL.
   *
   * - **Additional Validators**
   *   - *whitespace*: Validates that the data does not contain leading or trailing whitespace.
   *   - *trim*: Trims whitespace from the data.
   *   - *file*: Validates file uploads.
   *   - *enum*: Validates that the data is one of a specified set of values.
   *   - *regex*: Validates the data against a regular expression pattern.
   *
   * - **Security Validators**
   *   - *sqlInjection*: Detects SQL injection attempts.
   *   - *noSQLInjection*: Detects NoSQL injection attempts.
   *   - *xss*: Detects cross-site scripting (XSS) attacks.
   *   - *passwordHash*: Validates password hashes.
   *   - *authToken*: Validates authentication tokens.
   */
}

module.exports = Validation;
