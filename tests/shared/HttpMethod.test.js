const express = require("express");
const supertest = require("supertest");
const HTTPMethod = require("../../src/shared/HTTPMethod");

describe("HTTPMethod", () => {
  let app;
  let httpMethod;
  let request;

  beforeEach(() => {
    app = express();
    httpMethod = new HTTPMethod(app);
    request = supertest(app);
  });

  describe("setBaseRoute", () => {
    test("should set the base route path", () => {
      const path = "/example";
      httpMethod.setBaseRoute(path);
      expect(httpMethod.path).toBe(path);
    });
  });

  describe("addPrefix", () => {
    test("shoulds  add prefix to the route path", () => {
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
        httpMethod[method](handler);

        // Perform the HTTP request
        await request[method.toLowerCase()](routePath);

        // Expect the handler to be called
        expect(handler).toHaveBeenCalled();
      });
    });
  });
});
