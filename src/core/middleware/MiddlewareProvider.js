exports.createMiddlewareContext = function createMiddlewareContext(app) {
  const response = new Promise((resolve, reject) => {
    app.use((req, res, nxt) => {
      resolve({ req, res, nxt });
    });
  });
  return response;
};
