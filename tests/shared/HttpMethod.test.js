const request = require("supertest"); // Import supertest for making HTTP requests

// Import your Express app and HTTPMethod class
const express = require("express");
const HTTPMethod = require("../../src/shared/HTTPMethod");

describe("HTTPMethod", () => {
  let app;
  let httpMethod;

  beforeEach(() => {
    app = express();
    httpMethod = new HTTPMethod(app);
  });

  describe("setBaseRoute", () => {
    test("should set the base route path", () => {
      const path = "/example";
      httpMethod.setBaseRoute(path);
      expect(httpMethod.path).toBe(path);
    });
  });

  describe("addPrefix", () => {
    test("should add prefix to the route path", () => {
      const baseRoute = "/example";
      const prefix = "/api";
      const expectedPath = `${prefix}${baseRoute}`;

      httpMethod.setBaseRoute(baseRoute);
      httpMethod.addPrefix(prefix);

      expect(httpMethod.path).toBe(expectedPath);
    });
  });

  describe("HTTP Methods", () => {
    const methods = [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
      "OPTIONS",
      "HEAD",
      "TRACE",
    ];

    methods.forEach((method) => {
      test(`should register handler for ${method}`, async () => {
        const handler = jest.fn();
        const routePath = "/example";

        httpMethod.setBaseRoute(routePath);
        // Register the handler
        httpMethod[method](handler);

        // Mock request and response objects
        const req = {};
        const res = { send: jest.fn() };

        // Trigger the registered handler
        await request(app)
          [method.toLowerCase()](routePath) // Make the HTTP request
          .expect(200) // Assuming 200 for successful requests
          .then(() => {
            // Expect the handler to have been called with request and response objects
            expect(handler).toHaveBeenCalled();
            expect(handler).toHaveBeenCalledWith(req, res);
          });
      });
    });
  });
});
