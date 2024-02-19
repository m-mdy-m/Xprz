const CsrfHandler = require('../../src/handler/package/csrf');
const csrfMock = jest.fn();
const useMock = jest.fn();

describe('CsrfHandler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should call use with the configured CSRF middleware', () => {
      const csrfHandler = new CsrfHandler(csrfMock, useMock);
      expect(useMock).toHaveBeenCalledWith(csrfHandler.protection);
    });
  });

  describe('get', () => {
    it('should return the CSRF middleware', () => {
      const csrfHandler = new CsrfHandler(csrfMock, useMock);
      expect(csrfHandler.get()).toEqual(csrfMock);
    });
  });

  describe('configure', () => {
    it('should call csrf with custom options', () => {
      const options = { cookie: true };
      const csrfHandler = new CsrfHandler(csrfMock, useMock);
      const csrfProtectionWithCustomOptions = csrfHandler.configure(options);
      expect(csrfMock).toHaveBeenCalledWith(options);
      expect(csrfProtectionWithCustomOptions).toEqual(csrfHandler.protection);
    });
  });
});
