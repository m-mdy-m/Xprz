/**
 * Wrapper class for bcryptjs functions.
 */
class BcryptjsHandler {
  /**
   * Create a new instance of BcryptjsHandler.
   * @param {Object} bcryptjs - The bcryptjs module.
   */
  constructor(bcryptjs) {
    /** @private */
    this.bcryptjs = bcryptjs;
  }

  /**
   * Get the bcryptjs module.
   * @returns {Object} The bcryptjs module.
   */
  getBcryptjs() {
    return this.bcryptjs;
  }

  /**
   * Hashes a password.
   * @param {string} password - The password to hash.
   * @param {number} [saltRounds=10] - The number of salt rounds to use (default is 10).
   * @returns {string} The hashed password.
   * @example
   * const bcrypt = require('bcryptjs');
   * const bcryptHandler = new BcryptjsHandler(bcrypt);
   * const hashedPassword = await bcryptHandler.hash('myPassword');
   */
  async hash(password, saltRounds = 10) {
    const hashedPassword = await this.bcryptjs.hash(password, saltRounds);
    return hashedPassword;
  }

  /**
   * Compares a password with a hashed password to check for a match.
   * @param {string} basePassword - The original password.
   * @param {string} hashedPassword - The hashed password to compare against.
   * @returns {boolean} True if the passwords match, false otherwise.
   * @example
   * const bcrypt = require('bcryptjs');
   * const bcryptHandler = new BcryptjsHandler(bcrypt);
   * const isMatch = await bcryptHandler.compare('myPassword', hashedPassword);
   */
  async compare(basePassword, hashedPassword) {
    const isMatch = await this.bcryptjs.compare(basePassword, hashedPassword);
    return isMatch;
  }
}

module.exports = BcryptjsHandler;
