const express = require("express");
const supertest = require("supertest");
const HTTPMethod = require("../../src/shared/HTTPMethod");

// Mock Express app
const mockApp = express();

// Create an instance of HTTPMethod with the mocked app
const httpMethod = new HTTPMethod(mockApp);

describe("HTTPMethod", () => {
  // Define a test handler function
  const testHandler = (req, res) => {
    res.send("Test response");
  };

  // Test GET method
  test("GET method should register route with GET HTTP method", () => {
    httpMethod.setBaseRoute("/test").GET(testHandler);

    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.path
    ).toBe("/test");
    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.methods.get
    ).toBeTruthy();
  });

  // Test POST method
  test("POST method should register route with POST HTTP method", () => {
    httpMethod.setBaseRoute("/test").POST(testHandler);

    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.path
    ).toBe("/test");
    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.methods.post
    ).toBeTruthy();
  });

  // Test PUT method
  test("PUT method should register route with PUT HTTP method", () => {
    httpMethod.setBaseRoute("/test").PUT(testHandler);

    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.path
    ).toBe("/test");
    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.methods.put
    ).toBeTruthy();
  });

  // Test DELETE method
  test("DELETE method should register route with DELETE HTTP method", () => {
    httpMethod.setBaseRoute("/test").DELETE(testHandler);

    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.path
    ).toBe("/test");
    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.methods
        .delete
    ).toBeTruthy();
  });

  // Test PATCH method
  test("PATCH method should register route with PATCH HTTP method", () => {
    httpMethod.setBaseRoute("/test").PATCH(testHandler);

    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.path
    ).toBe("/test");
    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.methods
        .patch
    ).toBeTruthy();
  });

  // Test OPTIONS method
  test("OPTIONS method should register route with OPTIONS HTTP method", () => {
    httpMethod.setBaseRoute("/test").OPTIONS(testHandler);

    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.path
    ).toBe("/test");
    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.methods
        .options
    ).toBeTruthy();
  });

  // Test HEAD method
  test("HEAD method should register route with HEAD HTTP method", () => {
    httpMethod.setBaseRoute("/test").HEAD(testHandler);

    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.path
    ).toBe("/test");
    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.methods.head
    ).toBeTruthy();
  });

  // Test TRACE method
  test("TRACE method should register route with TRACE HTTP method", () => {
    httpMethod.setBaseRoute("/test").TRACE(testHandler);

    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.path
    ).toBe("/test");
    expect(
      mockApp._router.stack[mockApp._router.stack.length - 1].route.methods
        .trace
    ).toBeTruthy();
  });
});
