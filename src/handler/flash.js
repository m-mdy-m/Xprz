class FlashHandler {
  constructor(flash) {
    /** @private */
    this.flash = flash;
    this.flash();
  }
  get() {
    return this.flash;
  }
}
module.exports = FlashHandler