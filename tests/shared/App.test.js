const App = require("../../src/shared/App");

describe("App", () => {
  let app;

  beforeEach(() => {
    app = new App();
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
    expect(mockMiddleware).toHaveBeenCalled();
  });

  test("launch initializes and starts the Express application", () => {
    const port = 3000; // Set the port for testing
    const textLog = `Server is running on port ${port}`;
    const log = false; // Set log to false for testing

    // Mock the console.log method
    const originalConsoleLog = console.log;
    console.log = jest.fn();

    // Execute the launch method
    app.launch(port, textLog, log);

    // Expectations
    expect(app.app).toBeDefined(); // Ensure app is defined
    expect(app.runApp).toBe(true); // Ensure runApp is true

    // Restore the original console.log method
    console.log = originalConsoleLog;
  });
});
