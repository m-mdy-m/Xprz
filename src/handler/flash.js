class FlashHandler {
  constructor(flash,use) {
    /** @private */
    this.flash = flash;
    /** @private */
    this.use = use
    /** @private */
    this.use(this.flash())
  }
  get() {
    return this.flash;
  }
}
module.exports = FlashHandler