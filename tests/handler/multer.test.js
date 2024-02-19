const Multer = require("../../src/handler/package/multer");
const express = require("express");

describe("Multer", () => {
  let multer;
  let app;

  beforeEach(() => {
    // Mock the Express app
    app = express();

    // Spy on the app.use() method
    jest.spyOn(app, "use");

    // Create a mock function for multerInstance
    const multerInstance = jest.fn((options) => ({
      single: jest.fn().mockReturnValue((req, res, next) => {}),
      array: jest.fn().mockReturnValue((req, res, next) => {}),
      fields: jest.fn().mockReturnValue((req, res, next) => {}),
      any: jest.fn().mockReturnValue((req, res, next) => {}),
    }));

    // Instantiate Multer with mocked multerInstance and app.use spy
    multer = new Multer(multerInstance, app.use);
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
