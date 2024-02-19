const Multer = require("../../src/handler/package/multer"); // Adjust the path as needed

// Mock Multer methods
const multerInstance = jest.fn((options) => ({
  single: jest.fn(),
  array: jest.fn(),
  fields: jest.fn(),
  any: jest.fn(),
}));

describe("Multer", () => {
  let multer;

  beforeEach(() => {
    multer = new Multer(multerInstance, jest.fn()); // Mocking 'use' function
  });

  describe("single", () => {
    it("should call use with single file upload middleware", () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.single({ dest: "uploads/" }, "image");
      expect(useMock).toHaveBeenCalledWith(expect.any(Function)); // Ensure useMock is called with a function
      expect(multerInstance().single).toHaveBeenCalledWith("image");
    });
  });

  describe("array", () => {
    it("should call use with array file upload middleware", () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.array({ dest: "uploads/" }, "images");
      expect(useMock).toHaveBeenCalledWith(expect.any(Function)); // Ensure useMock is called with a function
      expect(multerInstance().array).toHaveBeenCalledWith("images");
    });
  });

  describe("fields", () => {
    it("should call use with fields file upload middleware", () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.fields({ dest: "uploads/" }, "avatar", "photos");
      expect(useMock).toHaveBeenCalledWith(expect.any(Function)); // Ensure useMock is called with a function
      expect(multerInstance().fields).toHaveBeenCalledWith("avatar", "photos");
    });
  });

  describe("any", () => {
    it("should call use with any file upload middleware", () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.any({ dest: "uploads/" }, "files");
      expect(useMock).toHaveBeenCalledWith(expect.any(Function)); // Ensure useMock is called with a function
      expect(multerInstance().any).toHaveBeenCalledWith("files");
    });
  });
});
