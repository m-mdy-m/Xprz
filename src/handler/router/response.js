const { response } = require("express");
console.log("res =>", response);
class Response {
  constructor(res) {
    /** @private */
    this.res = res;
  }

  status(code){
    this.res.status(code)
  }
  links(links){
    this.res.links(links)
  }
  send(body){
    this.res.send(body)
  }
  json(obj){
    this.res.json(obj)
  }
  end
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
  redirect(url){
    this.res.redirect(url)
  }
  vary(field){
    this.res.vary(field)
  }
  render(view,options,callback){
    this.res.render(view,options,callback)
  }
}
module.exports = Response;
