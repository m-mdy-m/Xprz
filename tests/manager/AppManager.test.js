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

  test('set sets properties on the Express application', () => {
    const propertyName = 'title';
    const propertyValue = 'My Express App';
    appManager.set(propertyName, propertyValue);
    // Ensure the property is set on the Express app
    expect(appManager.app.get(propertyName)).toBe(propertyValue);
  });

  test('static serves static files and directories with Express', () => {
    const directoryPath = 'public';
    appManager.static(directoryPath);
    // Ensure static files are served by Express
    // You may need to inspect appManager.app._router.stack to check if static middleware is added
    // and verify the correct directory is being served
  });

  test('useJsonBody enables JSON and URL-encoded parsing for request bodies', () => {
    appManager.useJsonBody();
    // Ensure JSON and URL-encoded parsing middleware are added to the Express app
    // You may need to inspect appManager.app._router.stack to check if the middleware is added
  });

  test('shutdown shuts down the Express application', async () => {
    // Mock the server close function
    const closeMock = jest.fn((callback) => {
      callback(); // Simulate successful server shutdown
    });
    appManager.app.close = closeMock;

    await expect(appManager.shutdown()).resolves.toBeUndefined();
    // Ensure app.close method is called during shutdown
    expect(closeMock).toHaveBeenCalled();
  });
});
