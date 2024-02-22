const baseReq = require('../../../src/handler/router/baseReq'); 

describe('baseReq', () => {
  let mockReq;
  let req;

  beforeEach(() => {
    // Mock Express request object
    mockReq = {
      query: { key: 'value' },
      body: { key: 'value' },
      headers: { 'Content-Type': 'application/json' },
      url: '/test',
      path: '/test',
      xhr: true,
      secure: true,
      ip: '127.0.0.1',
      cookies: { cookieKey: 'cookieValue' },
      headers: { accept: 'application/json' },
      protocol: 'https',
      accepts: jest.fn().mockReturnValue(true),
      param: jest.fn(),
      method: 'GET',
      subdomains: ['sub1', 'sub2'],
      hostname: 'example.com',
      host: 'example.com:3000',
      fresh: false,
      stale: true,
      xhr: true,
      languages: ['en', 'fr'],
      encodings: ['gzip', 'deflate'],
      charsets: ['utf-8']
    };

    req = new baseReq(mockReq);
  });

  test('getQuery() should return query parameters', () => {
    expect(req.getQuery()).toEqual({ key: 'value' });
  });

  test('getBody() should return request body', () => {
    expect(req.getBody()).toEqual({ key: 'value' });
  });

  test('getHeaders() should return request headers', () => {
    expect(req.getHeaders()).toEqual({ 'Content-Type': 'application/json' });
  });

});
