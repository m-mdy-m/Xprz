/**
 * Class for handling cookies.
 */
class CookieHandler {
  /**
   * Creates an instance of CookieHandler.
   * @param {string} [cookie=""] - The initial cookie string.
   */
  constructor(cookie = "") {
    this.cookie = cookie;
  }

  /**
   * Sets a cookie with the given name, value, and options.
   * @param {string} name - The name of the cookie.
   * @param {string} value - The value of the cookie.
   * @param {Object} [options={}] - Additional options for the cookie (e.g., expiration).
   * @example
   * const cookieHandler = new CookieHandler();
   * cookieHandler.setCookie('username', 'john_doe', { expires: 3600 });
   */
  setCookie(name, value, options = {}) {
    const serializedCookie = this.serializeCookie(name, value, options);
    this.cookie = (this.cookie ? this.cookie + "; " : "") + serializedCookie;
  }

  /**
   * Retrieves the value of a specific cookie by name.
   * @param {string} name - The name of the cookie to retrieve.
   * @returns {string|undefined} The value of the cookie, or undefined if not found.
   * @example
   * const cookieHandler = new CookieHandler();
   * const username = cookieHandler.getCookie('username');
   */
  getCookie(name) {
    const cookies = this.parseCookies();
    return cookies[name];
  }
  /**
   * Retrieves all cookies as an object.
   * @returns {Object} An object containing all cookies.
   * @example
   * const cookieHandler = new CookieHandler();
   * const allCookies = cookieHandler.getAllCookies();
   */
  getAllCookies() {
    return this.parseCookies();
  }
  /**
   * Removes a cookie with the given name.
   * @param {string} name - The name of the cookie to remove.
   * @param {Object} [options={}] - Additional options for the cookie (e.g., expiration).
   * @example
   * const cookieHandler = new CookieHandler();
   * cookieHandler.removeCookie('username');
   */
  removeCookie(name, options = {}) {
    const cookies = this.parseCookies();
    delete cookies[name];
    this.cookie = Object.entries(cookies)
      .map(([cookieName, cookieValue]) =>
        this.serializeCookie(cookieName, cookieValue, options)
      )
      .join("; ");
  }

  /**
   * Helper method to serialize a cookie.
   * @private
   */
  serializeCookie(name, value, options = {}) {
    const encodedValue = encodeURIComponent(value);
    const parts = [`${name}=${encodedValue}`];
    for (const option in options) {
      if (options.hasOwnProperty(option)) {
        parts.push(`${option}=${options[option]}`);
      }
    }
    return parts.join("; ");
  }

  /**
   * Helper method to parse cookies.
   * @private
   */
  parseCookies() {
    const cookies = {};
    if (this.cookie) {
      this.cookie.split(";").forEach((cookie) => {
        const parts = cookie.trim().split("=");
        const name = decodeURIComponent(parts.shift());
        const value = parts.join("=");
        cookies[name] = decodeURIComponent(value);
      });
    }
    return cookies;
  }
  /**
   * Checks if a cookie with the given name exists.
   * @param {string} name - The name of the cookie to check.
   * @returns {boolean} True if the cookie exists, otherwise false.
   * @example
   * const cookieHandler = new CookieHandler();
   * const hasCookie = cookieHandler.hasCookie('username');
   */
  hasCookie(name) {
    const cookies = this.parseCookies();
    return cookies.hasOwnProperty(name);
  }

  /**
   * Clears all cookies.
   * @example
   * const cookieHandler = new CookieHandler();
   * cookieHandler.clearAllCookies();
   */
  clearAllCookies() {
    this.cookie = "";
  }
  /**
   * Gets the number of cookies.
   * @returns {number} The number of cookies.
   * @example
   * const cookieHandler = new CookieHandler();
   * const cookieCount = cookieHandler.countCookies();
   */
  countCookies() {
    const cookies = this.parseCookies();
    return Object.keys(cookies).filter((name) => cookies[name] !== "").length;
  }
}

module.exports = CookieHandler;
