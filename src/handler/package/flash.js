/**
 * FlashHandler class for configuring flash middleware in an Express application.
 */
class FlashHandler {
  /**
   * Creates an instance of FlashHandler.
   * @param {Function} flash - The flash package.
   * @param {Function} use - The Express app's `use` function.
   */
  constructor(flash, use) {
    /** @private */
    this.flash = flash;
    /** @private */
    this.use = use;
    /** @private */
    this.use(this.flash());
  }

  /**
   * Get the configured flash middleware.
   * @returns {Function} The configured flash middleware.
   */
  getFlash() {
    return this.flash;
  }
}

module.exports = FlashHandler;
