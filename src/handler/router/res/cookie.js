/**
 * Class for handling cookies.
 */
class CookieHandler {
  /**
   * Creates an instance of getCookieHandler().
   * @param {string} [cookie=""] - The initial cookie string.
   */
  constructor(cookie = "") {
    /** @private */
    this.cookie = cookie;
    // Bind methods to ensure they have access to the correct 'this' context
    this.setCookie = this.setCookie.bind(this);
    this.getCookie = this.getCookie.bind(this);
    this.getAllCookies = this.getAllCookies.bind(this);
    this.removeCookie = this.removeCookie.bind(this);
    this.isCookie = this.isCookie.bind(this);
    this.clearAllCookies = this.clearAllCookies.bind(this);
    this.countCookies = this.countCookies.bind(this);
    // Private methods
    this.serializeCookie = this.serializeCookie.bind(this);
    this.parseCookies = this.parseCookies.bind(this);
  }

  /**
   * Sets a cookie with the given name, value, and options.
   * @param {string} name - The name of the cookie.
   * @param {string} value - The value of the cookie.
   * @param {Object} [options={}] - Additional options for the cookie (e.g., expiration).
   * @example
   *const { getCookieHandler } = router.res();
   * getCookieHandler().setCookie('username', 'john_doe', { expires: 3600 });
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
   *const { getCookieHandler } = router.res();
   * const username = getCookieHandler().getCookie('username');
   */
  getCookie(name) {
    const cookies = this.parseCookies();
    return cookies[name];
  }
  /**
   * Retrieves all cookies as an object.
   * @returns {Object} An object containing all cookies.
   * @example
   *const { getCookieHandler } = router.res();
   * const allCookies = getCookieHandler().getAllCookies();
   */
  getAllCookies() {
    return this.parseCookies();
  }
  /**
   * Removes a cookie with the given name.
   * @param {string} name - The name of the cookie to remove.
   * @param {Object} [options={}] - Additional options for the cookie (e.g., expiration).
   * @example
   *const { getCookieHandler } = router.res();
   * getCookieHandler().removeCookie('username');
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
   *const { getCookieHandler } = router.res();
   * const isCookie = getCookieHandler().isCookie('username');
   */
  isCookie(name) {
    const cookies = this.parseCookies();
    return cookies.hasOwnProperty(name);
  }

  /**
   * Clears all cookies.
   * @example
   *const { getCookieHandler } = router.res();
   * getCookieHandler().clearAllCookies();
   */
  clearAllCookies() {
    this.cookie = "";
  }
  /**
   * Gets the number of cookies.
   * @returns {number} The number of cookies.
   * @example
   *const { getCookieHandler } = router.res();
   * const cookieCount = getCookieHandler().countCookies();
   */
  countCookies() {
    const cookies = this.parseCookies();
    return Object.keys(cookies).filter((name) => cookies[name] !== "").length;
  }
}

module.exports = CookieHandler;
