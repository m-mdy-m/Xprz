const { response } = require("express");
console.log("res =>", response);
class Response {
  constructor(res) {
    /** @private */
    this.res = res;
  }
  jsonp(obj) {
    this.res.json(obj);
  }
  sendStatus(statusCode) {
    this.res.sendStatus(statusCode);
  }
  sendFile(path, fn = undefined) {
    this.res.sendFile(path, fn);
  }

  download(path, fn = undefined) {
    this.res.download(path, fn);
  }
  contentType(type) {
    this.type(type);
  }
  type(type) {
    this.res.type(type);
  }
  format(obj) {
    this.res.format(obj);
  }
  attachment(filename) {
    this.res.attachment(filename);
  }
  append(field,val){
    this.res.append(field,val)
  }
  set(field,val){
    this.header(field,val)
  }
  header(field,val){
    this.res.header(field,val)
  }
  get(field){
    return this.res.get(field)
  }
  clearCookie(name,options){
    this.res.clearCookie(name,options)
  }
  cookie(name,value,options){
    this.res.cookie(name,value,options)
  }
  location(url){
    this.res.location(url)
  }
  red
}
module.exports = Response;
