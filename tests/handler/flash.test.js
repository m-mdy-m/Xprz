const FlashHandler = require('../../src/handler/package/flash');
const flashMock = jest.fn();
const useMock = jest.fn();

describe('FlashHandler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should call use with the configured flash middleware', () => {
      const flashHandler = new FlashHandler(flashMock, useMock);
      expect(useMock).toHaveBeenCalledWith(flashMock());
    });
  });

  describe('get', () => {
    it('should return the configured flash middleware', () => {
      const flashHandler = new FlashHandler(flashMock, useMock);
      expect(flashHandler.get()).toEqual(flashMock);
    });
  });
});
