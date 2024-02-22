const JsonHandler = require('../../../../src/handler/router/res/Json');

describe('JsonHandler', () => {
  let jsonHandler;

  beforeEach(() => {
    // Mocking json and status functions
    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
    jsonHandler = new JsonHandler(mockJson, mockStatus);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('success', () => {
    it('should return a success response with a message', () => {
      const message = 'Success message';
      jsonHandler.success(message);
      expect(jsonHandler.json).toHaveBeenCalledWith({ success: true, message });
    });
  });

  describe('list', () => {
    it('should return a response with a list of items and pagination info', () => {
      const items = [1, 2, 3];
      const totalCount = 3;
      const totalPages = 1;
      const currentPage = 1;
      jsonHandler.list(items, totalCount, totalPages, currentPage);
      expect(jsonHandler.json).toHaveBeenCalledWith({
        items,
        pagination: {
          totalCount,
          totalPages,
          currentPage,
        },
      });
    });
  });

  // Write similar tests for other methods...
});
