const {createMiddlewareContext,} = require("../core/middleware/MiddlewareProvider");
class RouteHandlerFactory {
  setupGetRoute(app, url) {
    return async (method, data, callback = undefined) => {
      const handle = await new Promise((resolve, reject) => {
        app.get(url, (req, res, nxt) => {
          if (res) {
            res[method](data);
            resolve(res);
          }
          if (req) {
            req[method];
            resolve(req);
          }
          if (nxt) {
            nxt();
            resolve(nxt);
          }
        });
      });
      return handle;
    };
  }
  async setCookieMiddleware(app, options) {
    const { req, res, nxt } = await new createMiddlewareContext(app);
    res.cookie(options.name, options.val, options.options);
    nxt();
  }
}
module.exports = RouteHandlerFactory;
