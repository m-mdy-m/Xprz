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
      test(`should register handler for ${method}`, () => {
        const handler = jest.fn();
        const routePath = "/example";

        httpMethod.setBaseRoute(routePath);
        httpMethod[method.toLowerCase()](handler); // This line is causing the error

        // Mock request and response objects
        const req = {};
        const res = { send: jest.fn() };

        // Trigger the registered handler
        app[method.toLowerCase()](routePath, (req, res) => {
          handler(req, res);
        });

        // Simulate the HTTP request
        app[method.toLowerCase()](routePath, (req, res) => {
          handler(req, res);
        });

        // Expect the handler to be called with request and response objects
        expect(handler).toHaveBeenCalledWith(req, res);
      });
    });
  });
});
