const App = require("../../src/shared/BaseApp");
const {getExpress,initApp,launch,listen,use} = new App()
describe("App", () => {
  test("initApp initializes the Express application", () => {
    const app = initApp();
    expect(app.app).toBeDefined();
    expect(app.runApp).toBe(true);
  });
  test("listen throws error if app is not initialized", () => {
    expect(() => {
      listen();
    }).toThrowError("Express app has not been initialized yet.");
  });
  test("use adds middleware when app is initialized", () => {
    initApp();
    const mockMiddleware = jest.fn();
    use(mockMiddleware);
    expect(mockMiddleware).toHaveBeenCalled();
  });
});
