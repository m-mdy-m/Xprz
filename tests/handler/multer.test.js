const Multer = require("../../src/handler/package/multer");
const express = require("express");

// Mock the express app
const app = express();

// Mock Multer methods
const multerInstance = jest.fn((options) => ({
  single: jest.fn(),
  array: jest.fn(),
  fields: jest.fn(),
  any: jest.fn(),
}));

// Mock the app.use() method
const useMock = jest.fn();
app.use = useMock;

describe("Multer", () => {
  let multer;

  beforeEach(() => {
    multer = new Multer(multerInstance, app.use);
  });

  describe("single", () => {
    it("should call use with single file upload middleware", () => {
      multer.single({ dest: "uploads/" }, "image");
      expect(useMock).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe("array", () => {
    it("should call use with array file upload middleware", () => {
      multer.array({ dest: "uploads/" }, "images");
      expect(useMock).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe("fields", () => {
    it("should call use with fields file upload middleware", () => {
      multer.fields({ dest: "uploads/" }, "avatar", "photos");
      expect(useMock).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  describe("any", () => {
    it("should call use with any file upload middleware", () => {
      multer.any({ dest: "uploads/" }, "files");
      expect(useMock).toHaveBeenCalledWith(expect.any(Function));
    });
  });
});
