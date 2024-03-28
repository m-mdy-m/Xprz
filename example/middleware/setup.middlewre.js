/**
 * Example setup for session management and CSRF protection using the Xprz framework.
 * This module demonstrates how to configure session middleware with MongoDB session store and CSRF protection middleware.
 */

// Import the Xprz module
const Xprz = require("xprz");

// Destructure session, connectMongoDbSession, and csrf from the Xprz Package
const { session, connectMongoDbSession, csrf } = Xprz.Package();

// Connect to MongoDB session store using the provided URI and specify the collection name
const store = connectMongoDbSession({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

// Define options for session middleware, including session secret and store
const options = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  },
};

// Initialize session middleware with the specified options
session(options);

// Initialize CSRF protection middleware with cookie option and provide CSRF token endpoint
csrf({ cookie: true }).provideCsrfToken();

/**
 * !Note: It is not necessary to export this file. If you use it like this, Xprz will automatically export it and use them.
 * !This allows for easier integration with Xprz framework without explicitly exporting the module.
 */
