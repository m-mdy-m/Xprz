/**
 * A class representing a request rate limiter.
 */
class RequestRateLimiter {
  /**
   * Creates an instance of RequestRateLimiter.
   * @param {number} [maxRequests=100] - Maximum number of requests allowed within the time window.
   * @param {number} [timeWindow=60000] - Time window in milliseconds.
   */
  constructor(maxRequests = 100, timeWindow = 60000) {
    this.setMaxRequests(maxRequests); // Maximum number of requests allowed within the time window
    this.setTimeWindow(timeWindow); // Time window in milliseconds
    this._clientRequests = new Map(); // Map to store client requests and their timestamps
  }

  /**
   * Checks if a client has exceeded the rate limit.
   * @param {string} clientId - Unique identifier for the client.
   * @returns {boolean} True if the client has exceeded the rate limit, otherwise false.
   */
  isRateLimited(clientId) {
    const currentTime = Date.now();
    const requests = this._clientRequests.get(clientId) || [];
    // Remove requests older than the time window
    const recentRequests = requests.filter(
      (requestTime) => currentTime - requestTime <= this.getTimeWindow()
    );
    // Update the list of recent requests for the client
    this._clientRequests.set(clientId, recentRequests);
    // Check if the number of recent requests exceeds the maximum allowed
    return recentRequests.length >= this.getMaxRequests();
  }

  /**
   * Registers a request from a client.
   * @param {string} clientId - Unique identifier for the client.
   */
  registerRequest(clientId) {
    const currentTime = Date.now();
    const requests = this._clientRequests.get(clientId) || [];
    // Remove requests older than the time window
    const recentRequests = requests.filter(
      (requestTime) => currentTime - requestTime <= this.getTimeWindow()
    );
    // Add the current request timestamp
    recentRequests.push(currentTime);
    // Update the list of recent requests for the client
    this._clientRequests.set(clientId, recentRequests);
  }

  /**
   * Gets the remaining requests allowed for a client within the time window.
   * @param {string} clientId - Unique identifier for the client.
   * @returns {number} The number of remaining requests allowed.
   */
  getRemainingRequests(clientId) {
    const currentTime = Date.now();
    const requests = this._clientRequests.get(clientId) || [];
    // Remove requests older than the time window
    const recentRequests = requests.filter(
      (requestTime) => currentTime - requestTime <= this.getTimeWindow()
    );
    // Calculate the remaining requests
    const remainingRequests = this.getMaxRequests() - recentRequests.length;
    return Math.max(0, remainingRequests);
  }

  /**
   * Resets the request count for a client.
   * @param {string} clientId - Unique identifier for the client.
   */
  resetRequests(clientId) {
    this._clientRequests.set(clientId, []);
  }

  /**
   * Clears all stored requests.
   */
  clearAllRequests() {
    this._clientRequests.clear();
  }

  /**
   * Removes requests for a client older than a specified timestamp.
   * @param {string} clientId - Unique identifier for the client.
   * @param {number} timestamp - Timestamp in milliseconds.
   */
  removeOldRequests(clientId, timestamp) {
    const requests = this._clientRequests.get(clientId) || [];
    // Remove requests older than the specified timestamp
    const recentRequests = requests.filter(
      (requestTime) => requestTime >= timestamp
    );
    // Update the list of recent requests for the client
    this._clientRequests.set(clientId, recentRequests);
  }

  /**
   * Gets the maximum number of requests allowed within the time window.
   * @returns {number} The maximum number of requests allowed.
   */
  getMaxRequests() {
    return this._maxRequests;
  }

  /**
   * Sets the maximum number of requests allowed within the time window.
   * @param {number} maxRequests - The maximum number of requests allowed.
   */
  setMaxRequests(maxRequests) {
    // Ensure maxRequests is a positive number
    if (typeof maxRequests === "number" && maxRequests > 0) {
      this._maxRequests = maxRequests;
    } else {
      throw new Error("maxRequests must be a positive number");
    }
  }

  /**
   * Gets the time window in milliseconds.
   * @returns {number} The time window in milliseconds.
   */
  getTimeWindow() {
    return this._timeWindow;
  }

  /**
   * Sets the time window in milliseconds.
   * @param {number} timeWindow - The time window in milliseconds.
   */
  setTimeWindow(timeWindow) {
    // Ensure timeWindow is a non-negative number
    if (typeof timeWindow === "number" && timeWindow >= 0) {
      this._timeWindow = timeWindow;
    } else {
      throw new Error("timeWindow must be a non-negative number");
    }
  }
}

module.exports = RequestRateLimiter;
