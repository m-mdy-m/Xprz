/**
 * Middleware for JWT token verification and user authentication.
 * This middleware extracts a JWT token from the request cookies, verifies its validity and expiration.
 * If the token is valid, it sets the authorization header with the token and proceeds with JWT authentication.
 * If the token is invalid or expired, it redirects the user to the login page.
 */

// Import the JWT module from the Xprz package
const { jwt } = require("xprz").Package();

// Middleware function to verify JWT token and authenticate users
exports.verifyToken = (req, res, nxt) => {
  try {
    // Extract the JWT token from request cookies
    const token = req.cookies.token;
    
    // Check if the token is present and not expired
    if (token && !jwt().isTokenExpired(token)) {
      // Token is valid, set authorization header with the token
      req.headers.authorization = `Bearer ${token}`;
      // Proceed with JWT authentication
      jwt().jwtAuthenticate(process.env.JWT_SECRET)(req, res, nxt);
    } else {
      // Token is missing, invalid, or expired, redirect user to login page
      return res.status(401).redirect("/auth/login");
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error in JWT token verification middleware:", error);
    return res.status(500).send("Internal Server Error");
  }
};
