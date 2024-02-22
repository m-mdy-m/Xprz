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
    this.res.statusCode = code;
    return this;
  }
  links(links) {
    this.res.links(links);
    return this;
  }
  send(body) {
    this.res.end(body);
    return this;
  }
  json(obj) {
    this.setHeader("Content-Type", "application/json");
    const jsonString = JSON.stringify(obj);
    console.log(`Sending JSON: ${jsonString}`);
    this.send(jsonString);
    return this;
  }
  end(any = undefined) {
    this.res.end(any);
  }
  jsonp(obj) {
    this.json(obj);
  }
  setHeaders(headers) {
    for (const [field, val] of Object.entries(headers)) {
      this.setHeader(field, val);
    }
    return this;
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
    this.setHeader(field, val);
    return this;
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
    return this;
  }
  vary(field) {
    const existingVary = this.res.getHeader("Vary") || "";
    const newVary = existingVary ? `${existingVary}, ${field}` : field;
    this.setHeader("Vary", newVary);
  }
  render(view, options, callback) {
    this.res.render(view, options, callback);
  }
  setContentType(type) {
    this.setHeader("Content-Type", type);
    return this;
  }
  sendHTML(html) {
    this.setContentType("text/html").send(html);
  }
}
module.exports = Response;
