const BaseApp = require("../../src/shared/BaseApp"); // Require the BaseApp class
const { initApp, listen, use } = new BaseApp(); // Destructure methods from the BaseApp instance

describe("App", () => {
  test("initApp initializes the Express application", () => {
    const app = initApp();
    expect(app).toBeDefined(); // You're not accessing app.app directly, so just check if app is defined
    expect(app.runApp).toBe(true);
  });

  test("listen throws error if app is not initialized", () => {
    expect(() => {
      listen();
    }).toThrowError("Express app has not been initialized yet.");
  });

  test("use adds middleware when app is initialized", () => {
    initApp(); // Initialize the Express app first
    const mockMiddleware = jest.fn();
    use(mockMiddleware);
    expect(mockMiddleware).toHaveBeenCalled();
  });
});
