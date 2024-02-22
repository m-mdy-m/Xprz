const CookieHandler = require('../../../../src/handler/router/res/cookie');

describe('CookieHandler', () => {
  let cookieHandler;

  beforeEach(() => {
    cookieHandler = new CookieHandler('');
  });

  afterEach(() => {
    cookieHandler = null;
  });

  test('setCookie method should set a cookie', () => {
    cookieHandler.setCookie('testCookie', 'testValue');
    expect(cookieHandler.getCookie('testCookie')).toBe('testValue');
  });

  test('getCookie method should return the value of a specific cookie', () => {
    cookieHandler.setCookie('testCookie', 'testValue');
    expect(cookieHandler.getCookie('testCookie')).toBe('testValue');
  });

  test('getAllCookies method should return all cookies as an object', () => {
    cookieHandler.setCookie('cookie1', 'value1');
    cookieHandler.setCookie('cookie2', 'value2');
    expect(cookieHandler.getAllCookies()).toEqual({ cookie1: 'value1', cookie2: 'value2' });
  });

  test('removeCookie method should remove a cookie', () => {
    cookieHandler.setCookie('testCookie', 'testValue');
    cookieHandler.removeCookie('testCookie');
    expect(cookieHandler.getCookie('testCookie')).toBeUndefined();
  });

  test('hasCookie method should return true if cookie exists, otherwise false', () => {
    cookieHandler.setCookie('testCookie', 'testValue');
    expect(cookieHandler.hasCookie('testCookie')).toBe(true);
    expect(cookieHandler.hasCookie('nonExistentCookie')).toBe(false);
  });

  test('clearAllCookies method should remove all cookies', () => {
    cookieHandler.setCookie('cookie1', 'value1');
    cookieHandler.setCookie('cookie2', 'value2');
    cookieHandler.setCookie('cookie3', 'value3');
    cookieHandler.clearAllCookies();
    expect(cookieHandler.countCookies()).toBe(0);
  });

  test('countCookies method should return the number of cookies', () => {
    cookieHandler.setCookie('cookie1', 'value1');
    cookieHandler.setCookie('cookie2', 'value2');
    expect(cookieHandler.countCookies()).toBe(2);
  });
});