/**
 * jwtHandler class for handling JSON Web Tokens (JWT) in an Express application.
 */
class jwtManager {
  /**
   * Creates an instance of jwtHandler.
   * @param {Object} jwt - The JSON Web Token package.
   */
  constructor(jwt) {
    /** @private */
    this.jwt = jwt;
  }

  /**
   * Get the JSON Web Token package.
   * @returns {Object} The JSON Web Token package.
   */
  getJwt() {
    return this.jwt;
  }

  /**
   * Sign a JWT token with the provided payload and secret key.
   * @param {Object} payload - The payload to be signed into the JWT.
   * @param {string} secretKey - The secret key used for signing the JWT.
   * @param {Object} [options={}] - Additional options for signing the JWT.
   * @returns {string} The signed JWT token.
   * @example
   * const token = jwtHandler.signToken({ userId: '123' }, 'secret');
   */
  signToken(payload, secretKey, options = {}) {
    if (!payload || !secretKey) {
      throw new Error("Payload and secret key are required for JWT signing.");
    }

    return this.jwt.sign(payload, secretKey, options);
  }

  /**
   * Verify a JWT token with the provided secret key.
   * @param {string} token - The JWT token to be verified.
   * @param {string} secretKey - The secret key used for verifying the JWT.
   * @returns {Object} The decoded payload if the token is valid.
   * @throws {Error} If the token or secret key is missing, or if the token verification fails.
   * @example
   * const decoded = jwtHandler.verifyToken(token, 'secret');
   */
  verifyToken(token, secretKey,options ) {
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

  /**
   * Checks if a JWT token has expired.
   * @param {string} token - The JWT token to be checked.
   * @returns {boolean} True if the token is expired, false otherwise.
   * @example
   * const isExpired = jwtHandler.isExpired(token);
   */
  isExpired(token) {
    try {
      // Decode the JWT token to extract expiration time
      const decoded = this.jwt.decode(token);

      // If decoded payload or expiration time is not available, consider token as not expired
      if (!decoded || !decoded.exp) {
        return false;
      }

      // Calculate current time in seconds
      const currentTimeSeconds = Math.floor(Date.now() / 1000);

      // Compare current time with expiration time to determine if token is expired
      return currentTimeSeconds >= decoded.exp;
    } catch (error) {
      // If an error occurs during decoding or comparison, consider token as expired
      return true;
    }
  }
  /**
   * Middleware for JWT authentication.
   * @param {string} secretKey - The secret key used for verifying JWT tokens.
   * @returns {function} Middleware function for JWT authentication.
   * @example
   * // Apply JWT authentication middleware
   * app.use(jwtHandlerInstance.authenticate('your_secret_key'));
   */
  authenticate(secretKey) {
    return (ctx, nxt) => {
      const authHeader = ctx.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return ctx
          .status(401)
          .json({ error: "Unauthorized: No token provided" });
      }
      const token = authHeader.split(" ")[1];
      try {
        const decodedPayload = this.jwtVerify(token, secretKey);
        ctx.user = decodedPayload;
        nxt();
      } catch (error) {
        return ctx.status(401).json({ error: "Unauthorized: Invalid token" });
      }
    };
  }
  /**
   * Middleware for user authorization based on roles/permissions.
   * This middleware ensures that only users with specific roles are granted access to routes.
   * @param {Array<string>} allowedRoles - The roles allowed to access the route.
   * @returns {Function} A middleware function that checks if the user has the required role.
   *                     If the user has the required role, the next middleware function is called.
   *                     Otherwise, a 403 Forbidden response is sent.
   * @example
   * // Assuming 'app' is an instance of the 'App' class
   * // Protect a route with authorization for admin role
   * app.get('/admin/dashboard', authorizeUser(['admin']), (req, res) => {
   *   res.json({ message: 'Admin dashboard' });
   * });
   */
  authorizeUser(allowedRoles) {
    return (cx, nxt) => {
      const { user } = cx.request;

      // Check if user is authenticated and has the required role
      if (!user || !user.role || !allowedRoles.includes(user.role)) {
        // Send a 401 Unauthorized response if user is not authorized
        return cx.response.status(401).json({
          error: "Oops! You don't have permission to access this resource.",
        });
      }

      nxt();
    };
  }
  /**
   * Refreshes an expired JWT token with a new one.
   * @param {string} expiredToken - The expired JWT token to be refreshed.
   * @param {string} secretKey - The secret key used for signing the new JWT token.
   * @param {Object} [options={}] - Additional options for signing the new JWT token.
   * @returns {string} The new JWT token.
   * @throws {Error} If the expired token or secret key is missing, or if token verification fails.
   * @example
   * // Example usage:
   * const expiredToken = 'your_token';
   * const secretKey = 'secret_key';
   * const options = { expiresIn: '1d' };
   * const newToken = refreshToken(expiredToken, secretKey, options);
   * console.log('New JWT Token:', newToken);
   */
  refreshToken(expiredToken, secretKey, options = {}) {
    // Check if expired token and secret key are provided
    if (!expiredToken || !secretKey) {
      throw new Error(
        "Both expired token and secret key are required for refreshing JWT."
      );
    }

    try {
      // Verify the integrity and validity of the expired token
      const decodedPayload = this.jwt.verify(expiredToken, secretKey);

      // Sign a new token with the decoded payload and provided options
      return this.jwt.sign(decodedPayload, secretKey, options);
    } catch (error) {
      throw new Error("Failed to refresh JWT token: " + error.message);
    }
  }
}

module.exports = jwtManager;
