const AppManager = require('../../src/manager/AppManager');
describe('AppManager Class', () => {
  let appManager;

  beforeEach(() => {
    appManager = new AppManager();
    appManager.initApp(); // Initialize Express app
  });

  test('setErrorHandler sets error handler middleware', () => {
    const errorHandler = (err, req, res, next) => {
      // Your error handling logic
    };
    appManager.setErrorHandler(errorHandler);
    // Ensure middleware is added to the Express app
    const middlewareCount = appManager.app._router.stack.length;
    expect(middlewareCount).toBeGreaterThan(0);
  });

  test('middleware adds middleware function(s)', () => {
    const middlewareFunction = (req, res, next) => {
      // Your middleware logic
    };
    appManager.middleware(middlewareFunction);
    // Ensure middleware is added to the Express app
    const middlewareCount = appManager.app._router.stack.length;
    expect(middlewareCount).toBeGreaterThan(0);
  });
});