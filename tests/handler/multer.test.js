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
      const multerInstanceResult = multerInstance();
      expect(useMock).toHaveBeenCalledWith(expect.any(Function)); // Ensure useMock is called with a function

      // Check if the returned function from useMock is called with the correct parameters
      const singleMiddlewareFunction = useMock.mock.calls[0][0];
      singleMiddlewareFunction(null, null, () => {});
      expect(multerInstanceResult.single).toHaveBeenCalledWith("image");
    });
  });

  describe("array", () => {
    it("should call use with array file upload middleware", () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.array({ dest: "uploads/" }, "images");
      const multerInstanceResult = multerInstance();
      expect(useMock).toHaveBeenCalledWith(expect.any(Function)); // Ensure useMock is called with a function

      // Check if the returned function from useMock is called with the correct parameters
      const arrayMiddlewareFunction = useMock.mock.calls[0][0];
      arrayMiddlewareFunction(null, null, () => {});
      expect(multerInstanceResult.array).toHaveBeenCalledWith("images");
    });
  });

  describe("fields", () => {
    it("should call use with fields file upload middleware", () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.fields({ dest: "uploads/" }, "avatar", "photos");
      const multerInstanceResult = multerInstance();
      expect(useMock).toHaveBeenCalledWith(expect.any(Function)); // Ensure useMock is called with a function

      // Check if the returned function from useMock is called with the correct parameters
      const fieldsMiddlewareFunction = useMock.mock.calls[0][0];
      fieldsMiddlewareFunction(null, null, () => {});
      expect(multerInstanceResult.fields).toHaveBeenCalledWith(
        "avatar",
        "photos"
      );
    });
  });

  describe("any", () => {
    it("should call use with any file upload middleware", () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.any({ dest: "uploads/" }, "files");
      const multerInstanceResult = multerInstance();
      expect(useMock).toHaveBeenCalledWith(expect.any(Function)); // Ensure useMock is called with a function

      // Check if the returned function from useMock is called with the correct parameters
      const anyMiddlewareFunction = useMock.mock.calls[0][0];
      anyMiddlewareFunction(null, null, () => {});
      expect(multerInstanceResult.any).toHaveBeenCalledWith("files");
    });
  });
});
