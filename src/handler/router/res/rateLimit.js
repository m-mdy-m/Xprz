class RequestRateLimiter {
  constructor(maxRequests, timeWindow) {
    this.maxRequests = maxRequests; // Maximum number of requests allowed within the time window
    this.timeWindow = timeWindow; // Time window in milliseconds
    this.clientRequests = new Map(); // Map to store client requests and their timestamps
  }

  /**
   * Checks if a client has exceeded the rate limit.
   * @param {string} clientId - Unique identifier for the client.
   * @returns {boolean} True if the client has exceeded the rate limit, otherwise false.
   */
  isRateLimited(clientId) {
    const currentTime = Date.now();
    const requests = this.clientRequests.get(clientId) || [];
    // Remove requests older than the time window
    const recentRequests = requests.filter(
      (requestTime) => currentTime - requestTime <= this.timeWindow
    );
    // Update the list of recent requests for the client
    this.clientRequests.set(clientId, recentRequests);
    // Check if the number of recent requests exceeds the maximum allowed
    return recentRequests.length >= this.maxRequests;
  }

  /**
   * Registers a request from a client.
   * @param {string} clientId - Unique identifier for the client.
   */
  registerRequest(clientId) {
    const currentTime = Date.now();
    const requests = this.clientRequests.get(clientId) || [];
    // Remove requests older than the time window
    const recentRequests = requests.filter(
      (requestTime) => currentTime - requestTime <= this.timeWindow
    );
    // Add the current request timestamp
    recentRequests.push(currentTime);
    // Update the list of recent requests for the client
    this.clientRequests.set(clientId, recentRequests);
  }

  /**
   * Gets the remaining requests allowed for a client within the time window.
   * @param {string} clientId - Unique identifier for the client.
   * @returns {number} The number of remaining requests allowed.
   */
  getRemainingRequests(clientId) {
    const currentTime = Date.now();
    const requests = this.clientRequests.get(clientId) || [];
    // Remove requests older than the time window
    const recentRequests = requests.filter(
      (requestTime) => currentTime - requestTime <= this.timeWindow
    );
    // Calculate the remaining requests
    const remainingRequests = this.maxRequests - recentRequests.length;
    return Math.max(0, remainingRequests);
  }

  /**
   * Resets the request count for a client.
   * @param {string} clientId - Unique identifier for the client.
   */
  resetRequests(clientId) {
    this.clientRequests.set(clientId, []);
  }

  /**
   * Clears all stored requests.
   */
  clearAllRequests() {
    this.clientRequests.clear();
  }

  /**
   * Removes requests for a client older than a specified timestamp.
   * @param {string} clientId - Unique identifier for the client.
   * @param {number} timestamp - Timestamp in milliseconds.
   */
  removeOldRequests(clientId, timestamp) {
    const requests = this.clientRequests.get(clientId) || [];
    // Remove requests older than the specified timestamp
    const recentRequests = requests.filter(
      (requestTime) => requestTime >= timestamp
    );
    // Update the list of recent requests for the client
    this.clientRequests.set(clientId, recentRequests);
  }
}
