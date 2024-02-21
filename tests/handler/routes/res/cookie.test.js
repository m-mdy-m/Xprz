const CookieHandler = require('../../../../src/handler/router/res/cookie');

describe('CookieHandler', () => {
  let cookieHandler;

  beforeEach(() => {
    // Mocking the cookie header string
    const mockCookieHeader = 'cookie1=value1; cookie2=value2; cookie3=value3';
    cookieHandler = new CookieHandler(mockCookieHeader);
  });

  test('setCookie method should set a new cookie', () => {
    cookieHandler.setCookie('newCookie', 'newValue');
    expect(cookieHandler.getCookie('newCookie')).toBe('newValue');
  });

  test('getCookie method should return the value of a specific cookie', () => {
    expect(cookieHandler.getCookie('cookie2')).toBe('value2');
  });

  test('getAllCookies method should return all cookies as an object', () => {
    const allCookies = cookieHandler.getAllCookies();
    expect(allCookies).toEqual({
      cookie1: 'value1',
      cookie2: 'value2',
      cookie3: 'value3',
    });
  });

  test('removeCookie method should remove a specific cookie', () => {
    cookieHandler.removeCookie('cookie1');
    expect(cookieHandler.getCookie('cookie1')).toBeUndefined();
  });

  test('hasCookie method should return true if the cookie exists', () => {
    expect(cookieHandler.hasCookie('cookie3')).toBe(true);
  });

  test('hasCookie method should return false if the cookie does not exist', () => {
    expect(cookieHandler.hasCookie('nonexistentCookie')).toBe(false);
  });

  test('clearAllCookies method should remove all cookies', () => {
    cookieHandler.clearAllCookies();
    expect(cookieHandler.getAllCookies()).toEqual({});
  });

  test('countCookies method should return the number of cookies', () => {
    expect(cookieHandler.countCookies()).toBe(3);
  });
});
