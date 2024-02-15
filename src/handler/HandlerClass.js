const {createMiddlewareContext} = require("../core/middleware/MiddlewareProvider");
class RouteHandlerFactory {
  setupGetRoute(app, url) {
    return async (method, data, callback = undefined) => {
      const response = await new Promise((resolve, reject) => {
        app.get(url, (_, res) => {
          try {
            res[method](data);
            if (callback) {
              callback(res);
            }
            resolve(res);
          } catch (error) {
            reject(error);
          }
        });
      });
      return response;
    };
  }
  async setCookieMiddleware(app, options) {
    const { req, res, nxt } = await new createMiddlewareContext(app);
    res.cookie(options.name, options.val, options.options);
    nxt();
  }
}
module.exports = RouteHandlerFactory;
