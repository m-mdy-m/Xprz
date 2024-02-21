const { response } = require("express");
console.log("res =>", response);
class Response {
  constructor(res) {
    /** @private */
    this.res = res;

    // bind methods
    this.status = this.status.bind(this);
    this.links = this.links.bind(this);
    this.json = this.json.bind(this);
    this.jsonp = this.jsonp.bind(this);
    this.sendStatus = this.sendStatus.bind(this);
    this.download = this.download.bind(this);
    this.type = this.type.bind(this);
    this.contentType = this.contentType.bind(this);
    this.format = this.format.bind(this);
    this.attachment = this.attachment.bind(this);
    this.append = this.append.bind(this);
    this.header = this.header.bind(this);
    this.clearCookie = this.clearCookie.bind(this);
    this.cookie = this.cookie.bind(this);
    this.location = this.location.bind(this);
    this.redirect = this.redirect.bind(this);
    this.render = this.render.bind(this);
    this.sendFile = this.sendFile.bind(this);
    this.set = this.set.bind(this);
    this.vary = this.vary.bind(this);
  }
  send(data) {
    this.res.send(data);
  }

  status(code) {
    this.res.status(code);
  }

  links(links) {
    this.res.links(links);
  }

  json(data) {
    this.res.json(data);
  }

  jsonp(data) {
    this.res.jsonp(data);
  }

  sendStatus(code) {
    this.res.sendStatus(code);
  }

  sendFile(path, options, callback) {
    this.res.sendFile(path, options, callback);
  }

  download(path, filename, callback) {
    this.res.download(path, filename, callback);
  }

  type(type) {
    this.res.type(type);
  }

  contentType(type) {
    this.res.contentType(type);
  }

  format(obj) {
    this.res.format(obj);
  }

  attachment(filename) {
    this.res.attachment(filename);
  }

  append(field, value) {
    this.res.append(field, value);
  }

  header(field, value) {
    this.res.header(field, value);
  }

  clearCookie(name, options) {
    this.res.clearCookie(name, options);
  }

  cookie(name, value, options) {
    this.res.cookie(name, value, options);
  }

  location(url) {
    this.res.location(url);
  }

  redirect(status, path) {
    this.res.redirect(status, path);
  }

  render(view, options, callback) {
    this.res.render(view, options, callback);
  }

  set(field, value) {
    this.res.set(field, value);
  }

  vary(field) {
    this.res.vary(field);
  }
}
module.exports = Response;
