const { getApp, useApp, getExp } = require("../shareApp");

class AppSharedManager {
  constructor() {
    /**
     * Gets the current Express application instance.
     *
     * @returns {Object|null} The Express application instance, or null if not initialized.
     *
     * @example
     * const app = getApp();
     * if (app) {
     *   // Use the Express application instance
     * } else {
     *   throw new Error('Express app instance has not been initialized yet.');
     * }
     */
    this.getApp = getApp;
    /**
     * Applies middleware to the current Express application instance.
     *
     * @param {...Function} handlers - Middleware functions to apply.
     *
     * @returns {Object} The modified Express application instance.
     *
     * @example
     * const express = require('express');
     * const app = express();
     * useApp(middleware1, middleware2);
     */
    this.useApp = useApp;
    /**
     * Retrieves the Express module instance used within the application.
     * @returns {Object|null} The Express module instance, or null if not set.
     * @example
     * const expressInstance = getExp();
     * if (expressInstance) {
     *   // Use the Express module instance
     * } else {
     *   throw new Error('Express module instance has not been initialized yet.');
     * }
     */
    this.getExp = getExp;
  }
}

module.exports = AppSharedManager;
