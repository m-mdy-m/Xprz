const {response} = require('express')
console.log('res =>',response);
class Response {
  constructor(res) {
    /** @private */
    this.res = res

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
    this.attachment = this.attachment.bind(this);
    this.append = this.append.bind(this);
    this.cookie = this.cookie.bind(this);
    this.clearCookie = this.clearCookie.bind(this);
    this.download = this.download.bind(this);
    this.end = this.end.bind(this);
    this.format = this.format.bind(this);
    this.get = this.get.bind(this);
    this.getHeader = this.getHeader.bind(this);
    this.getHeaderNames = this.getHeaderNames.bind(this);
    this.getHeaders = this.getHeaders.bind(this);
    this.json = this.json.bind(this);
    this.jsonp = this.jsonp.bind(this);
    this.links = this.links.bind(this);
    this.location = this.location.bind(this);
    this.redirect = this.redirect.bind(this);
    this.render = this.render.bind(this);
    this.send = this.send.bind(this);
    this.sendFile = this.sendFile.bind(this);
    this.sendStatus = this.sendStatus.bind(this);
    this.set = this.set.bind(this);
    this.status = this.status.bind(this);
    this.type = this.type.bind(this);
    this.vary = this.vary.bind(this);
  }
  send(data){
    this.res.send(data)
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

  set(field, value) {
    this.res.set(field, value);
  }

  get(field) {
    return this.res.get(field);
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

  vary(field) {
    this.res.vary(field);
  }

  render(view, options, callback) {
    this.res.render(view, options, callback);
  }
  attachment(filename) {
    this.res.attachment(filename);
  }

  append(field, value) {
    this.res.append(field, value);
  }

  cookie(name, value, options) {
    this.res.cookie(name, value, options);
  }

  clearCookie(name, options) {
    this.res.clearCookie(name, options);
  }

  download(path, filename, callback) {
    this.res.download(path, filename, callback);
  }

  end() {
    this.res.end();
  }

  format(obj) {
    this.res.format(obj);
  }

  get(field) {
    return this.res.get(field);
  }

  getHeader(name) {
    return this.res.getHeader(name);
  }

  getHeaderNames() {
    return this.res.getHeaderNames();
  }

  getHeaders() {
    return this.res.getHeaders();
  }

  json(body) {
    this.res.json(body);
  }

  jsonp(body) {
    this.res.jsonp(body);
  }

  links(links) {
    this.res.links(links);
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

  send(body) {
    this.res.send(body);
  }

  sendFile(path, options, callback) {
    this.res.sendFile(path, options, callback);
  }

  sendStatus(statusCode) {
    this.res.sendStatus(statusCode);
  }

  set(field, value) {
    this.res.set(field, value);
  }

  status(code) {
    this.res.status(code);
  }

  type(type) {
    this.res.type(type);
  }

}
module.exports = Response;
