const { response } = require("express");
console.log("res =>", response);
class Response {
  constructor(res) {
    /** @private */
    this.res = res;
  }
  jsonp(obj) {
    return this.res.json(obj);
  }
  sendStatus(statusCode) {
    return this.res.sendStatus(statusCode);
  }
  sendFile(path, fn = undefined) {
    return this.res.sendFile(path, fn);
  }

  download(path, fn = undefined) {
    return this.res.download(path, fn);
  }
  contentType(type) {
    return this.type(type);
  }
  type(type) {
    return this.res.type(type);
  }
  format(obj) {
    return this.res.format(obj);
  }
  attachment(filename) {
    return this.res.attachment(filename);
  }
}
module.exports = Response;
