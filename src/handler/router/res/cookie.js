class HandlerCookie {
  constructor(cookie) {
    this.cookie = cookie;
  }

  // Method to set a cookie
  setCookie(name, value, options = {}) {
    this.cookie(name, value, options);
  }

  // Method to get a specific cookie by name
  getCookie(name) {
    const cookies = this.parseCookies();
    return cookies[name];
  }

  // Method to get all cookies as an object
  getAllCookies() {
    return this.parseCookies();
  }

  // Method to remove a cookie
  removeCookie(name, options = {}) {
    this.cookie(name, "", { ...options, expires: new Date(0) });
  }

  // Helper method to parse cookies
  parseCookies() {
    const cookies = {};
    const cookieHeader = this.cookie;
    cookieHeader &&
      cookieHeader.split(";").forEach((cookie) => {
        const parts = cookie.split("=");
        cookies[parts[0].trim()] = parts[1];
      });
    return cookies;
  }
  // Method to check if a cookie exists
  hasCookie(name) {
    const cookies = this.parseCookies();
    return cookies.hasOwnProperty(name);
  }

  // Method to clear all cookies
  clearAllCookies() {
    const cookies = this.parseCookies();
    for (const name in cookies) {
      if (cookies.hasOwnProperty(name)) {
        this.removeCookie(name);
      }
    }
  }
  // Method to get the number of cookies
  countCookies() {
    const cookies = this.parseCookies();
    return Object.keys(cookies).length;
  }
}
module.exports = HandlerCookie;
