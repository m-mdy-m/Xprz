const { getExpress } = require("../shared/AppManager");

const express = getExpress();

/**
 * Creates a new middleware function to serve static files from the provided directory.
 * 
 * @param {...any} handler - Options or path for serving static files.
 * @returns {Function} The middleware function.
 * 
 * @example
 * // Serve static files from the "public" directory
 * use(static('public'));
 * or
 * app.use(static('public'))
 * 
 */
exports.static = function (...handler) {
  return express.static(...handler);
};
