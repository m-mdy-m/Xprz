const CorsHandler = require('./CorsHandler');
const corsMock = jest.fn();
const useMock = jest.fn();

describe('CorsHandler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should call use with the configured CORS middleware', () => {
      const options = { origin: '*' };
      const corsHandler = new CorsHandler(corsMock, useMock, options);
      expect(useMock).toHaveBeenCalledWith(corsMock(options));
    });
  });

  describe('get', () => {
    it('should return the configured CORS middleware', () => {
      const options = { origin: '*' };
      const corsHandler = new CorsHandler(corsMock, useMock, options);
      expect(corsHandler.get()).toEqual(corsMock(options));
    });
  });
});
