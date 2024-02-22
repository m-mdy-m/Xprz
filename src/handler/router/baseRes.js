const http = require("http");
class Response {
  constructor(res) {
    this.res = res;
  }
  write(data) {
    this.res.write(data);
    this.res.end();
  }
  status(code) {
    this.res.status(code);
  }
  links(links) {
    this.res.links(links);
  }
  send(body) {
    this.res.send(body);
  }
  json(obj) {
    this.setHeader("Content-Type", "application/json");
    this.send(JSON.stringify(obj));
  }
  end(any = undefined) {
    this.res.end(any);
  }
  jsonp(obj) {
    this.res.json(obj);
  }
  setHeaders(headers) {
    for (const [field, val] of Object.entries(headers)) {
      this.setHeader(field, val);
    }
  }
  setHeader(field, val) {
    this.res.setHeader(field, val);
  }
  getHeader(field) {
    return this.res.getHeader(field);
  }
  sendStatus(statusCode) {
    this.res.statusCode = statusCode;
    this.res.statusMessage = http.STATUS_CODES[statusCode];
    this.res.end(`${statusCode} ${http.STATUS_CODES[statusCode]}`);
  }
  sendFile(path, fn = undefined) {
    this.res.sendFile(path, fn);
  }
  download(path, filename, callback) {
    this.res.download(path, filename, callback);
  }
  contentType(type) {
    this.res.contentType(type);
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
  append(field, val) {
    this.res.append(field, val);
  }
  set(field, val) {
    this.header(field, val);
  }
  header(field, val) {
    this.res.header(field, val);
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
  redirect(url) {
    this.setHeader("Location", url);
    this.res.statusCode = 302;
    this.res.end();
  }
  vary(field) {
    const existingVary = this.res.getHeader("Vary") || "";
    const newVary = existingVary ? `${existingVary}, ${field}` : field;
    this.setHeader("Vary", newVary);
  }
  render(view, options, callback) {
    this.res.render(view, options, callback);
  }
}
module.exports = Response;
