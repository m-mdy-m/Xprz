class CsrfHandler {
  constructor(csrf, use) {
    // /** @private */
    this.csrf = csrf;
    // /** @private */
    this.use = use;
    // /** @private */
    this.Protection = this.csrf();
    // /** @private☻ */
    this.use(this.Protection);
  }
  get() {
    return this.csrf;
  }
  configure(options) {
    return this.csrf(options);
  }
}
module.exports = CsrfHandler