## `HeadersHandler`

Class for handling HTTP response headers.

### Constructor

- **Parameters:**
  - `header` (Function): The function used to set headers in the response.
  - `res` (Object): The HTTP response object.

### Methods

#### `cacheControl(maxAge, isPrivate)`

Sets the Cache-Control header for caching directives.

- **Parameters:**
  - `maxAge` (number): The maximum age of the cached content in seconds.
  - `isPrivate` (boolean, optional): Indicates if the cache is private to a user (default is `false`).

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().cacheControl(3600, true);
  ```

#### `setCorsHeaders(origin, methods, headers)`

Sets CORS headers to allow cross-origin resource sharing.

- **Parameters:**
  - `origin` (string): The allowed origin domain.
  - `methods` (string): The allowed HTTP methods.
  - `headers` (string): The allowed HTTP headers.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setCorsHeaders('https://example.com', 'GET, POST', 'Content-Type');
  ```

#### `setLocation(location)`

Sets the Location header for redirection.

- **Parameters:**
  - `location` (string): The URL to redirect to.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setLocation('/new-location');
  ```

#### `setCorsMaxAge(maxAge)`

Sets the Access-Control-Max-Age header for preflight requests caching.

- **Parameters:**
  - `maxAge` (number): The maximum age of the preflight request caching.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setCorsMaxAge(3600);
  ```

#### `setVaryHeader(headers)`

Sets the Vary header to specify which request header fields are used to select a representation.

- **Parameters:**
  - `headers` (string): The request headers to base the selection on.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setVaryHeader('Accept-Encoding');
  ```

#### `setPragma(value)`

Sets the Pragma header for backward compatibility.

- **Parameters:**
  - `value` (string): The value of the Pragma header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setPragma('no-cache');
  ```

#### `setTrailer(value)`

Sets the Trailer header for indicating the presence of trailer fields in a chunked transfer-coding.

- **Parameters:**
  - `value` (string): The value of the Trailer header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setTrailer('My-Trailer-Field');
  ```

#### `setTransferEncoding(encoding)`

Sets the Transfer-Encoding header for indicating the form of encoding used to safely transfer the entity to the user.

- **Parameters:**
  - `encoding` (string): The value of the Transfer-Encoding header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setTransferEncoding('chunked');
  ```

#### `setUpgrade(value)`

Sets the Upgrade header for specifying additional communication protocols.

- **Parameters:**
  - `value` (string): The value of the Upgrade header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setUpgrade('WebSocket');
  ```

#### `setWarning(value)`

Sets the Warning header to provide additional information about the status or transformation of a message.

- **Parameters:**
  - `value` (string): The value to set for the Warning header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setWarning("299 - Miscellaneous persistent warning");
  ```

#### `setWWWAuthenticate(value)`

Sets the WWW-Authenticate header to indicate the authentication method that should be used to access a resource.

- **Parameters:**
  - `value` (string): The value to set for the WWW-Authenticate header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setWWWAuthenticate("Bearer realm='example'");
  ```

#### `setXForwardedFor(value)`

Sets the X-Forwarded-For header to indicate the client IP address when behind a proxy or a load balancer.

- **Parameters:**
  - `value` (string): The IP address to set for the X-Forwarded-For header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setXForwardedFor("203.0.113.195");
  ```

#### `setXForwardedProto(value)`

Sets the X-Forwarded-Proto header to indicate the protocol (HTTP or HTTPS) that a client used to connect to a proxy or a load balancer.

- **Parameters:**
  - `value` (string): The protocol value to set for the X-Forwarded-Proto header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setXForwardedProto("https");
  ```

#### `setXRealIP(value)`

Sets the X-Real-IP header to indicate the actual client IP address, particularly useful when behind a proxy or a load balancer.

- **Parameters:**
  - `value` (string): The IP address to set for the X-Real-IP header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setXRealIP("203.0.113.195");
  ```

#### `setRetryAfter(value)`

Sets the Retry-After header to indicate when a resource will be available after a temporary error.

- **Parameters:**
  - `value` (string): The value to set for the Retry-After header, either a number of seconds or a HTTP-date.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setRetryAfter("3600");
  ```

#### `setExpires(expirationDate)`

Sets the Expires header to specify a date/time after which the response should be considered stale.

- **Parameters:**
  - `expirationDate` (Date): The expiration date/time to set for the Expires header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setExpires(new Date(Date.now() + 3600 * 1000));
  ```

#### `setContentTypeOptions(value)`

Sets the X-Content-Type-Options header to prevent MIME-sniffing.

- **Parameters:**
  - `value` (string): The value to set for the X-Content-Type-Options header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setContentTypeOptions("nosniff");
  ```

#### `setContentSecurityPolicy(policy)`

Sets the Content-Security-Policy header

 to specify security policies for the resource.

- **Parameters:**
  - `policy` (string): The policy to set for the Content-Security-Policy header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setContentSecurityPolicy("default-src 'self'");
  ```

#### `setHSTSHeader(maxAge, includeSubDomains)`

Sets the HTTP Strict Transport Security (HSTS) header to enforce secure connections.

- **Parameters:**
  - `maxAge` (number): The maximum age of the HSTS policy in seconds.
  - `includeSubDomains` (boolean, optional): Indicates whether to include subdomains in the HSTS policy (default is `true`).

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setHSTSHeader(31536000, true);
  ```

#### `setNoSniffHeader()`

Sets the X-Content-Type-Options header to prevent MIME-sniffing by the browser.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setNoSniffHeader();
  ```

#### `setReferrerPolicy(value)`

Sets the Referrer-Policy header to control how much referrer information should be included with requests.

- **Parameters:**
  - `value` (string): The value to set for the Referrer-Policy header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setReferrerPolicy("no-referrer");
  ```

#### `setStrictTransportSecurity(value)`

Sets the Strict-Transport-Security header to enforce secure connections.

- **Parameters:**
  - `value` (string): The value to set for the Strict-Transport-Security header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setStrictTransportSecurity("max-age=31536000; includeSubDomains");
  ```

#### `setFrameOptions(value)`

Sets the X-Frame-Options header to control whether a browser should be allowed to render a page in a frame or iframe.

- **Parameters:**
  - `value` (string): The value to set for the X-Frame-Options header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setFrameOptions("deny");
  ```

#### `setXssProtection(value)`

Sets the X-XSS-Protection header to enable the Cross-Site Scripting (XSS) filter built into most modern web browsers.

- **Parameters:**
  - `value` (string): The value to set for the X-XSS-Protection header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setXssProtection("1; mode=block");
  ```

#### `setExpectCTHeader(value)`

Sets the Expect-CT header to enforce Certificate Transparency requirements.

- **Parameters:**
  - `value` (string): The value to set for the Expect-CT header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setExpectCTHeader("enforce, max-age=3600");
  ```

#### `setFeaturePolicy(value)`

Sets the Feature-Policy header to control which features and APIs can be used in the browser context.

- **Parameters:**
  - `value` (string): The value to set for the Feature-Policy header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setFeaturePolicy("geolocation 'self'");
  ```

#### `setPublicKeyPinsHeader(value)`

Sets the Public-Key-Pins header to associate a specific cryptographic public key with a web server.

- **Parameters:**
  - `value` (string): The value to set for the Public-Key-Pins header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setPublicKeyPinsHeader("pin-sha256=\"base64==\"; max-age=5184000; includeSubDomains");
  ```

#### `setCrossOriginEmbedderPolicy(policy)`

Sets the Cross-Origin Embedder Policy (COEP) header to control how a document is embedded in other documents.

- **Parameters:**
  - `policy` (string): The value to set for the Cross-Origin Embedder Policy (COEP) header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setCrossOriginEmbedderPolicy("require-corp");
  ```

#### `setCrossOriginOpenerPolicy(policy)`

Sets the Cross-Origin Opener Policy (COOP) header to control which documents can be opened in the same origin.

- **Parameters:**
  - `policy` (string): The value to set for the Cross-Origin Opener Policy (COOP) header.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().setCrossOriginOpenerPolicy("same-origin-allow-popups");
  ```

#### `setCrossOriginResourcePolicy(policy)`

Sets the Cross-Origin Resource Policy (CORP) header to control which origins can fetch resources.

- **Parameters:**
  - `policy` (string): The value to set for the Cross-Origin Resource Policy (CORP) header.

- **Example:**
  ```javascript
    const { getHeadersHandler } = router.res();
    getHeadersHandler().setCrossOriginResourcePolicy("same-site");
  ```

#### `clearHeader(name)`

Clears the specified header from the HTTP response.

- **Parameters:**
  - `name` (string): The name of the header to clear.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().clearHeader("Content-Type");
  ```

#### `clearAllHeaders()`

Clears all headers from the HTTP response.

- **Example:**
  ```javascript
  const { getHeadersHandler } = router.res();
  getHeadersHandler().clearAllHeaders();
  ```