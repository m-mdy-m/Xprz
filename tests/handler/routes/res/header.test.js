const HeadersHandler = require('../../../../src/handler/router/res/header');

describe('HeadersHandler', () => {
  let mockHeader;
  let mockRes;
  let headersHandler;

  beforeEach(() => {
    mockHeader = jest.fn();
    mockRes = {
      header: mockHeader,
      removeHeader: jest.fn(),
      clearHeaders: jest.fn(),
    };
    headersHandler = new HeadersHandler(mockHeader, mockRes);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('cacheControl method sets Cache-Control header correctly', () => {
    headersHandler.cacheControl(3600, true);
    expect(mockHeader).toHaveBeenCalledWith('Cache-Control', 'private, max-age=3600');
  });

  test('setCorsHeaders method sets CORS headers correctly', () => {
    headersHandler.setCorsHeaders('example.com', 'GET, POST', 'Content-Type');
    expect(mockHeader).toHaveBeenCalledWith('Access-Control-Allow-Origin', 'example.com');
    expect(mockHeader).toHaveBeenCalledWith('Access-Control-Allow-Methods', 'GET, POST');
    expect(mockHeader).toHaveBeenCalledWith('Access-Control-Allow-Headers', 'Content-Type');
  });
});
