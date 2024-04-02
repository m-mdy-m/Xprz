# `Request`

**Description:**
Represents a base request handler providing utility methods for handling HTTP requests.

#### Constructor

##### `Example(req)`

- **Parameters:**

  - `ctx.req` (object): The Express request object.

- **Example:**
  ```javascript
  const {
    /* methods **/
  } = req;
  ```

## Methods

Certainly! Here's the updated `Request.doc.md` documentation with the `verifyBody` method added:

# `Request`

**Description:**
Represents a base request handler providing utility methods for handling HTTP requests.

#### Constructor

##### `Example(req)`

- **Parameters:**

  - `req` (object): The Express request object.

- **Example:**
  ```javascript
  const {
    /* methods **/
  } = req;
  ```

## Methods

##### `validate(req, rules, options)`

Validates a request object against specified rules using the vfyjs library.

- **Parameters:**

  - `req` (object): The request object to be validated.
  - `rules` (object): The validation rules to be applied.
  - `options` (object, optional): Additional options for validation.

- **Returns:**

  - `object`: The validation result.

- **Example:**
  ```javascript
  // Define the request object and validation rules
  const request = { body: { username: 'example', age: 25 } };
  const rules = { username: 'string|username', age: 'number|min:18' };
  // Validate the request
  const errors = validate(ctx.body, rules);
  // Handle the validation result
  if (Object.keys(errors).length === 0) {
    console.log('Request is valid.');
  } else {
    console.error('Validation errors:', errors);
  }
  ```

##### `verifyBody(rules, options)`

Validates the request body against the provided rules using the vfyjs library.

- **Parameters:**

  - `rules` (object): The validation rules to be applied.
  - `options` (object, optional): Additional options for validation.

- **Returns:**

  - `object`: The validation result.

- **Example:**
  ```javascript
  const validationRules = {
    username: "string",
    password: "string|min:6",
  };
  const errors = verifyBody(validationRules);
  if (Object.keys(errors).length === 0) {
    console.log("Request body is valid.");
  } else {
    console.error("Validation errors:");
  }
  ```

##### `query(name)`

Retrieves the value of a specific query parameter from the request.

- **Parameters:**

  - `name` (string): The name of the query parameter.

- **Returns:**

  - `*`: The value of the specified query parameter.

- **Example:**
  ```javascript
  const paramValue = query("paramName");
  ```

##### `getQuery()`

Retrieves the query parameters from the request.

- **Returns:**

  - `object`: The request query parameters.

- **Example:**
  ```javascript
  const queryParams = getQuery();
  ```

##### `getBody()`

Retrieves the request body.

- **Returns:**

  - `object`: The request body.

- **Example:**
  ```javascript
  const requestBody = getBody();
  ```

##### `getHeadersReq()`

Retrieves the request headers.

- **Returns:**

  - `object`: The request headers.

- **Example:**
  ```javascript
  const requestHeaders = getHeadersReq();
  ```

##### `getUrl()`

Retrieves the request URL.

- **Returns:**

  - `string`: The request URL.

- **Example:**
  ```javascript
  const requestUrl = getUrl();
  ```

##### `getPath()`

Retrieves the request path.

- **Returns:**

  - `string`: The request path.

- **Example:**
  ```javascript
  const requestPath = getPath();
  ```

##### `isAjax()`

Checks if the request is an AJAX request.

- **Returns:**

  - `boolean`: True if the request is an AJAX request, false otherwise.

- **Example:**
  ```javascript
  const isAjaxRequest = isAjax();
  ```

##### `isSecure()`

Checks if the request is secure (HTTPS).

- **Returns:**

  - `boolean`: True if the request is secure (HTTPS), otherwise false.

- **Example:**
  ```javascript
  const isSecure = isSecure();
  ```

##### `getIp()`

Gets the IP address of the request.

- **Returns:**

  - `string`: The IP address of the request.

- **Example:**
  ```javascript
  const ipAddress = getIp();
  ```

##### `getCookies()`

Retrieves the cookies from the request.

- **Returns:**

  - `object`: The cookies sent with the request.

- **Example:**
  ```javascript
  const cookies = getCookies();
  ```

##### `hasHeader(headerName)`

Checks if the request has a specific header.

- **Parameters:**

  - `headerName` (string): The name of the header to check.

- **Returns:**

  - `boolean`: True if the request has the specified header, otherwise false.

- **Example:**
  ```javascript
  const hasContentTypeHeader = hasHeader("Content-Type");
  ```

##### `getHeaderName(headerName)`

Gets the value of a specific request header.

- **Parameters:**

  - `headerName` (string): The name of the header.

- **Returns:**

  - `string`: The value of the specified header.

- **Example:**
  ```javascript
  const contentType = getHeaderName("Content-Type");
  ```

##### `getProtocol()`

Retrieves the protocol used by the request (HTTP or HTTPS).

- **Returns:**

  - `string`: The protocol used by the request.

- **Example:**
  ```javascript
  const protocol = getProtocol();
  ```

##### `accepts(type)`

Checks if the request accepts a specific content type.

- **Parameters:**

  - `type` (string|string[]): The content type to check.

- **Returns:**

  - `string|false|null`: The best matching content type, or false if none of the given types is accepted, or null if the request does not specify a content type preference.

- **Example:**
  ```javascript
  const contentType = accepts("json");
  ```

##### `param(name, [handlers])`

Retrieves the value of a parameter from the request.

- **Parameters:**

  - `name` (string): The name of the parameter.
  - `handlers` (Function[], optional): Optional middleware for processing the parameter.

- **Returns:**

  - `*`: The value of the specified parameter.

- **Example:**
  ```javascript
  const userId = param("userId");
  ```

##### `getParams()`

Retrieves all parameters from the request.

- **Returns:**

  - `object`: All parameters from the request.

- **Example:**
  ```javascript
  const params = getParams();
  ```


##### `getUrl()`

Retrieves the URL of the request.

- **Returns:**

  - `string`: The URL of the request.

- **Example:**
  ```javascript
  const requestUrl = getUrl();
  ```

##### `is(types)`

Checks if the request matches the given types.

- **Parameters:**

  - `types` (string|string[]): The types to check against.

- **Returns:**

  - `string|false|null`: The first type that matches, or false if none match, or null if the request does not specify a content type.

- **Example:**
  ```javascript
  const isJSON = is("json");
  ```

##### `getPath()`

Retrieves the path of the request.

- **Returns:**

  - `string`: The path of the request.

- **Example:**
  ```javascript
  const requestPath = getPath();
  ```

##### `getMethod()`

Retrieves the HTTP method of the request.

- **Returns:**

  - `string`: The HTTP method of the request (e.g., GET, POST).

- **Example:**
  ```javascript
  const method = getMethod();
  ```

##### `getSubdomains()`

Retrieves an array of subdomains in the domain name of the request.

- **Returns:**

  - `string[]`: An array of subdomains.

- **Example:**
  ```javascript
  const subdomains = getSubdomains();
  ```

##### `getHostname()`

Retrieves the hostname from the request.

- **Returns:**

  - `string`: The hostname.

- **Example:**
  ```javascript
  const hostname = getHostname();
  ```

##### `getHost()`

Retrieves the host from the request.

- **Returns:**

  - `string`: The host.

- **Example:**
  ```javascript
  const host = getHost();
  ```

##### `isFresh()`

Checks if the request is fresh.

- **Returns:**

  - `boolean`: True if the request is fresh, false otherwise.

- **Example:**
  ```javascript
  const isFreshRequest = isFresh();
  ```

##### `isStale()`

Checks if the request is stale.

- **Returns:**

  - `boolean`: True if the request is stale, false otherwise.

- **Example:**
  ```javascript
  const isStaleRequest = isStale();
  ```

##### `isXhr()`

Checks if the request is an XMLHttpRequest (AJAX) request.

- **Returns:**

  - `boolean`: True if the request is an XMLHttpRequest, false otherwise.

- **Example:**
  ```javascript
  const isXhrRequest = isXhr();
  ```

##### `getLanguages()`

Retrieves the request language preferences.

- **Returns:**

  - `string[]`: An array of language preferences.

- **Example:**
  ```javascript
  const languages = getLanguages();
  ```

##### `getEncodings()`

Retrieves the request encoding preferences.

- **Returns:**

  - `string[]`: An array of encoding preferences.

- **Example:**
  ```javascript
  const encodings = getEncodings();
  ```

##### `getCharsets()`

Retrieves the request charset preferences.

- **Returns:**

  - `string[]`: An array of charset preferences.

- **Example:**
  ```javascript
  const charsets = getCharsets();
  ```

##### `isMethod(method)`

Checks if the request is sent with a specific HTTP method.

- **Parameters:**

  - `method` (string): The HTTP method to check (e.g., 'GET', 'POST').

- **Returns:**

  - `boolean`: True if the request method matches the specified method, otherwise false.

- **Example:**
  ```javascript
  const isGetMethod = isMethod("GET");
  ```

##### `getAcceptedContentTypes()`

Retrieves the accepted content types by the request.

- **Returns:**

  - `string[]`: An array of accepted content types.

- **Example:**
  ```javascript
  const acceptedTypes = getAcceptedContentTypes();
  ```
