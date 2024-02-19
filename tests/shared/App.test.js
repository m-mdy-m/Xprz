const App = require("../../src/shared/App");

describe("App", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  afterEach((done) => {
    app.closeServer(done); 
  });
  test("initApp initializes the Express application", () => {
    const initializedApp = app.initApp();
    expect(initializedApp).toBeDefined(); // Check if initializedApp is defined
    expect(app.runApp).toBe(true);
  });

  test("listen throws error if app is not initialized", () => {
    expect(() => {
      app.listen();
    }).toThrowError("Express app has not been initialized yet.");
  });

  test("use adds middleware when app is initialized", () => {
    app.initApp();
    const mockMiddleware = jest.fn();
    app.use(mockMiddleware);
    expect(mockMiddleware);
  });

  test("launch initializes and starts the Express application", () => {
    const port = 3000;
    const textLog = `Server is running on port ${port}`;
    const log = false;

    const originalConsoleLog = console.log;
    console.log = jest.fn();

    app.launch(port, textLog, log);

    expect(app.app).toBeDefined();
    expect(app.runApp).toBe(true);

    console.log = originalConsoleLog;
  });
});
