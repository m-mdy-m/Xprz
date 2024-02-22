const Response = require('../../../src/handler/router/baseRes');

describe('Response', () => {
  let mockResponse;
  let response;

  beforeEach(() => {
    mockResponse = {
      write: jest.fn(),
      end: jest.fn(),
      links: jest.fn(),
      setHeader: jest.fn(),
      getHeader: jest.fn(),
      send: jest.fn(),
      statusCode: 200,
    };
    response = new Response(mockResponse);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('write', () => {
    it('should write data to the response and end it', () => {
      response.write('Test data');
      expect(mockResponse.write).toHaveBeenCalledWith('Test data');
      expect(mockResponse.end).toHaveBeenCalled();
    });
  });

  // Add tests for other methods similarly
  // For brevity, I'm not adding tests for all methods, but you should add them for each method.

  describe('status', () => {
    it('should set the status code of the response', () => {
      response.status(404);
      expect(mockResponse.statusCode).toBe(404);
    });
  });

  describe('json', () => {
    it('should set Content-Type header to application/json and send JSON data', () => {
      const jsonData = { key: 'value' };
      response.json(jsonData);
      expect(mockResponse.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
      expect(mockResponse.send).toHaveBeenCalledWith(JSON.stringify(jsonData));
    });
  });

  // Similarly, add tests for other methods...

});
