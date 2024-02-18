const { getApp } = require("../Using");
const app = getApp();

/**
 * Sets configuration options for the Express application.
 * 
 * @param {...any} handler - Configuration options to set.
 * @returns {Object} The Express application instance.
 * 
 * @example
 * // Set the 'view engine' and 'views' directory for rendering views
 * set('view engine', 'ejs');
 * set('views', './views');
 */
exports.set = function (...handler) {
  return app.set(...handler);
};

/**
 * Mounts the specified middleware function(s) or router(s) at the specified path.
 * 
 * @param {...Function} handler - Middleware functions or routers to mount.
 * @returns {Object} The Express application instance.
 * 
 * @example
 * // Use a middleware function to log requests
 * use((req, res, next) => {
 *   console.log('Incoming request:', req.method, req.url);
 *   next();
 * });
 * 
 * // Use a router for handling routes
 * const router = express.Router();
 * router.get('/example', (req, res) => {
 *   res.send('Example route');
 * });
 * use('/api', router);
 */
exports.use = function (...handler) {
  return app.use(...handler);
};
