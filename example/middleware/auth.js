/**
 * Middleware for JWT token verification and user authentication.
 * This middleware extracts a JWT token from the request cookies, verifies its validity and expiration.
 * If the token is valid, it sets the authorization header with the token and proceeds with JWT authentication.
 * If the token is invalid or expired, it redirects the user to the login page.
 */

// Import the JWT module from the Xprz package

// Middleware function to verify JWT token and authenticate users
exports.verifyToken = (ctx, nxt) => {
  console.log('hi2');
  // Check if the session exists and if the user object is stored in the session
  if (ctx.session && ctx.session.token) {
    return nxt();
  }
  console.log('hi');
  // Clear all cookies
  return ctx.status(401).redirect("/auth/login");
};
