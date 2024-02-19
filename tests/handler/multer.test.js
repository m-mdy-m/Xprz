const Multer = require("../../src/handler/package/multer");
const express = require("express");

// Mock Multer methods
const multerInstance = jest.fn((options) => ({
  single: jest.fn().mockReturnValue((req, res, next) => {}),
  array: jest.fn().mockReturnValue((req, res, next) => {}),
  fields: jest.fn().mockReturnValue((req, res, next) => {}),
  any: jest.fn().mockReturnValue((req, res, next) => {}),
}));

describe("Multer", () => {
  let multer;
  let app;

  beforeEach(() => {
    // Mock the Express app
    app = express();

    // Bind the app.use method to the app instance
    const use = app.use.bind(app);

    // Spy on the app.use() method
    jest.spyOn(app, "use");

    multer = new Multer(multerInstance, use);
  });

  afterEach(() => {
    // Restore the mocked app.use() method
    jest.restoreAllMocks();
  });

  describe("single", () => {
    it("should call use with single file upload middleware", () => {
      multer.single({ dest: "uploads/" }, "image");
      expect(app.use).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe("array", () => {
    it("should call use with array file upload middleware", () => {
      multer.array({ dest: "uploads/" }, "images");
      expect(app.use).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe("fields", () => {
    it("should call use with fields file upload middleware", () => {
      multer.fields({ dest: "uploads/" }, "avatar", "photos");
      expect(app.use).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe("any", () => {
    it("should call use with any file upload middleware", () => {
      multer.any({ dest: "uploads/" }, "files");
      expect(app.use).toHaveBeenCalledWith(expect.any(Function));
    });
  });
});
