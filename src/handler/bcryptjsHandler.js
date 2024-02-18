class bcryptjsHandler {
  constructor(bcryptjs) {
    this.bcryptjs = bcryptjs;
  }
  async has(password, range) {
    const has = await this.bcryptjs.has(password, range);
    return has;
  }
  async compare(basePassword, password) {
    const isMatch = await this.bcryptjs.compare(basePassword, password);
    return isMatch;
  }
}
module.exports = bcryptjsHandler