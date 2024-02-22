class CookieHandler {
  constructor(cookie = "") {
    this.cookie = cookie;
  }

  // Method to set a cookie
  setCookie(name, value, options = {}) {
    const serializedCookie = this.serializeCookie(name, value, options);
    this.cookie = (this.cookie ? this.cookie + "; " : "") + serializedCookie;
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
    const cookies = this.parseCookies();
    delete cookies[name];
    this.cookie = Object.entries(cookies)
      .map(([cookieName, cookieValue]) =>
        this.serializeCookie(cookieName, cookieValue, options)
      )
      .join("; ");
  }

  // Helper method to serialize a cookie
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

  // Helper method to parse cookies
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

  // Method to check if a cookie exists
  hasCookie(name) {
    const cookies = this.parseCookies();
    return cookies.hasOwnProperty(name);
  }

  // Method to clear all cookies
  clearAllCookies() {
    this.cookie = "";
  }

  // Method to get the number of cookies
  countCookies() {
    const cookies = this.parseCookies();
    return Object.keys(cookies).filter((name) => cookies[name] !== "").length;
  }
}

module.exports = CookieHandler;

module.exports = CookieHandler;
