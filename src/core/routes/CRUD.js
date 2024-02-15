const start = require("../../shared/app");
const app = start();

function send(app, url, response) {
  app.get(url, (req, res, nxt) => {
    res.send(response);
  });
}

function get(url, handler) {
  app.get(url, handler || ((req, res, next) => {
    
  }));
}
get("/");
