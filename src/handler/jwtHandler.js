class jwtHandler {
  constructor(jwt) {
    this.jwt = jwt;
  }

  jwtSign(payload, secretKey, options = {}) {
    if (!payload || !secretKey) {
      throw new Error("Payload and secret key are required for JWT signing.");
    }

    return this.jwt.sign(payload, secretKey, options);
  }

  jwtVerify(token, secretKey) {
    if (!token || !secretKey) {
      throw new Error(
        "Token and secret key are required for JWT verification."
      );
    }

    try {
      return this.jwt.verify(token, secretKey);
    } catch (error) {
      throw new Error("Failed to verify JWT token.");
    }
  }
  isTokenExpired(token) {
    try {
      const decoded = this.jwt.decode(token);
      if (!decoded || !decoded.exp) return false;
      return Date.now() >= decoded.exp * 1000;
    } catch (error) {
      return false;
    }
  }
}
module.exports = jwtHandler