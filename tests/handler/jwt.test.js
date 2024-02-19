const jwt = require('jsonwebtoken');
const JwtHandler = require('../../src/handler/package/jwt');

describe('jwtHandler', () => {
  const secretKey = 'test_secret_key';
  const jwtHandlerInstance = new JwtHandler(jwt);

  describe('jwtSign', () => {
    it('should sign a JWT token with provided payload and secret key', () => {
      const payload = { userId: '123' };
      const token = jwtHandlerInstance.jwtSign(payload, secretKey);
      const decoded = jwt.verify(token, secretKey);
      expect(decoded.userId).toBe(payload.userId);
    });

    it('should throw an error if payload or secret key is missing', () => {
      expect(() => jwtHandlerInstance.jwtSign(null, secretKey)).toThrow();
      expect(() => jwtHandlerInstance.jwtSign({ userId: '123' }, null)).toThrow();
    });
  });

  describe('jwtVerify', () => {
    let token;
    beforeEach(() => {
      token = jwtHandlerInstance.jwtSign({ userId: '123' }, secretKey);
    });

    it('should verify a JWT token with the provided secret key', () => {
      const decoded = jwtHandlerInstance.jwtVerify(token, secretKey);
      expect(decoded.userId).toBe('123');
    });

    it('should throw an error if token or secret key is missing', () => {
      expect(() => jwtHandlerInstance.jwtVerify(null, secretKey)).toThrow();
      expect(() => jwtHandlerInstance.jwtVerify(token, null)).toThrow();
    });

    it('should throw an error if token verification fails', () => {
      const invalidToken = 'invalid_token';
      expect(() => jwtHandlerInstance.jwtVerify(invalidToken, secretKey)).toThrow();
    });
  });

  describe('isTokenExpired', () => {
    it('should return true if the token is expired', () => {
      const expiredToken = jwtHandlerInstance.jwtSign({ userId: '123', exp: Math.floor(Date.now() / 1000) - 1 }, secretKey);
      expect(jwtHandlerInstance.isTokenExpired(expiredToken)).toBe(true);
    });

    it('should return false if the token is not expired', () => {
      const validToken = jwtHandlerInstance.jwtSign({ userId: '123', exp: Math.floor(Date.now() / 1000) + 3600 }, secretKey);
      expect(jwtHandlerInstance.isTokenExpired(validToken)).toBe(false);
    });

    it('should return false if there is an error decoding the token', () => {
      const invalidToken = 'invalid_token';
      expect(jwtHandlerInstance.isTokenExpired(invalidToken)).toBe(false);
    });
  });

  describe('jwtAuthenticate', () => {
    it('should authenticate a valid JWT token', () => {
      const token = jwtHandlerInstance.jwtSign({ userId: '123' }, secretKey);
      const req = { headers: { authorization: token } };
      const res = {};
      const next = jest.fn();

      jwtHandlerInstance.jwtAuthenticate(secretKey)(req, res, next);

      expect(req.user.userId).toBe('123');
      expect(next).toHaveBeenCalled();
    });

    it('should return 401 error for missing token', () => {
      const req = { headers: {} };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      jwtHandlerInstance.jwtAuthenticate(secretKey)(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized: No token provided' });
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 error for invalid token', () => {
      const req = { headers: { authorization: 'invalid_token' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      jwtHandlerInstance.jwtAuthenticate(secretKey)(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized: Invalid token' });
      expect(next).not.toHaveBeenCalled();
    });
  });
});
