const {app,listen,start} = require("../../shared/app");
const cookieParser = require('cookie-parser')
const server = app()
server.use(cookieParser())
class getHandler {
  constructor(app, url) {
    this.app = app;
    this.url = url;
    this.statusCode = 200;
  }
  status(code) {
    this.statusCode = code;
    return this;
  }
  handleResponse(data, method) {
    this.app.get(this.url, (req, res) => {
        res.status(this.statusCode);
        method.call(data,res);
    });
    return this;
}
  send(data) {
    return this.handleResponse(data, (res) => res.send(data));
  }

  write(data) {
    return this.handleResponse(data, (res) => res.write(data).end());
  }
  redirect(url) {
    return this.handleResponse(url, (res) => {
      res.redirect(url);
    });
  }
  render(file, handler) {
    return this.handleResponse(file, (res) => {
      res.render(file, handler || {});
    });
  }
  json(message) {
    return this.handleResponse(message, (res) => {
      res.json(message || {});
    });
  }
  setHeader(content, text) {
    return this.handleResponse(content, (res) => {
      res.set(content, text);
    });
  }
  contentType(type) {
    return this.setHeader("Content-Type", type);
  }
  setCookie(name, value, options) {
    let cookie = { name, value, options };
    return this.handleResponse(cookie,(res)=>{
      res.cookie(name, value, { path: '/', ...options });
    });
  }
  clearCookie(name, options) {
    return this.handleResponse({ name, options }, (res, { name, options }) => {
      res.clearCookie(name, options);
    });
  }
  download(path, filename) {
    return this.handleResponse(
      { path, filename },
      (res, { path, filename }) => {
        res.download(path, filename);
      }
    );
  }
}

function get(url) {
  return  new getHandler(app,url) ;
}
get("/").render('./test.html')
listen(3000)
