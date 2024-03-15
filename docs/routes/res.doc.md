# `Response`

**Description:**
Represents a base response handler providing utility methods for handling HTTP responses.

#### Constructor

##### `Example(res)`

- **Parameters:**
  - `res` (object): The Express request object.

- **Example:**
  ```javascript
  const { /* methods **/} = res;
  ```

### Methods
#### `write(data)`

Writes data to the response and ends it.

- **Parameters:**
  - `data` (string): Data to write to the response.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.write("Hello, World!");
  ```

#### `status(code)`

Sets the status code for the response.

- **Parameters:**
  - `code` (number): HTTP status code.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.status(200).send("OK");
  ```

#### `links(links)`

Sets links in the response header.

- **Parameters:**
  - `links` (object): Links to be set in the response header.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.links({ next: 'http://example.com/page/2' });
  ```

#### `send(body)`

Sends the HTTP response.

- **Parameters:**
  - `body` (any): Body of the response.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.send("Hello, World!");
  ```

#### `json(obj)`

Sends a JSON response.

- **Parameters:**
  - `obj` (object): Object to be sent as JSON.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.json({ message: "Hello, World!" });
  ```

#### `end(any)`

Ends the response.

- **Parameters:**
  - `any` (any, optional): Optional data to be sent before ending the response.

- **Example:**
  ```javascript
  response.end();
  ```

#### `jsonp(obj)`

Sends a JSONP response.

- **Parameters:**
  - `obj` (object): Object to be sent as JSONP.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.jsonp({ message: "Hello, World!" });
  ```

#### `setHeaders(headers)`

Sets multiple response headers.

- **Parameters:**
  - `headers` (object): Object containing header fields and their values.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.setHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' });
  ```

#### `setHeader(field, val)`

Sets a single response header.

- **Parameters:**
  - `field` (string): The name of the header field.
  - `val` (string): The value of the header field.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.setHeader("Content-Type", "application/json");
  ```

#### `getHeader(field)`

Gets the value of a response header.

- **Parameters:**
  - `field` (string): The name of the header field.

- **Returns:**
  - `string`: The value of the header field.

- **Example:**
  ```javascript
  const contentType = response.getHeader("Content-Type");
  ```

#### `sendStatus(statusCode)`

Sends the HTTP response with the specified status code.

- **Parameters:**
  - `statusCode` (number): The HTTP status code.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.sendStatus(404);
  ```

#### `sendFile(path, fn)`

Sends a file in the HTTP response.

- **Parameters:**
  - `path` (string): The path to the file to be sent.
  - `fn` (function, optional): Optional callback function.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.sendFile("/path/to/file.txt");
  ```

#### `download(path, filename, callback)`

Initiates a file download in the HTTP response.

- **Parameters:**
  - `path` (string): The path to the file to be downloaded.
  - `filename` (string): The name of the file when downloaded.
  - `callback` (function): Callback function.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.download("/path/to/file.txt", "downloaded_file.txt", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File downloaded successfully");
    }
  });
  ```

#### `contentType(type)`

Sets the content type of the response.

- **Parameters:**
  - `type` (string): The content type.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.contentType("text/plain");
  ```

#### `type(type)`

Sets the content type of the response.

- **Parameters:**
  - `type` (string): The content type.

- **Returns:`
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.type("text/html");
  ```

#### `format(obj)`

Formats the response according to the given object.

- **Parameters:**
  - `obj` (object): The object defining response formats.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.format({
    'text/plain': () => {
      response.send('Hello, World!');
    },
    'text/html': () => {
      response.send('<h1>Hello, World!</h1>');
    },
  });
  ```

#### `attachment(filename)`

Sets the attachment filename for "Content-Disposition" header.

- **Parameters:**
  - `filename` (string): The filename.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.attachment("document.pdf");
  ```

#### `append(field, val)`

Appends the specified value to the HTTP response header field.

- **Parameters:**
  - `field` (string): The header field name.
  - `val` (string|string[]): The value(s) to append.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.append("Set-Cookie", "sessionId=12345");
  ```

#### `set(field, val)`

Sets a single header field with the specified value.

- **Parameters:**
  - `field` (string): The header field name.
  - `val` (string|string[]): The value(s) to set.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript


  response.set("X-Custom-Header", "Value");
  ```

#### `header(field, val)`

Sets a single header field with the specified value.

- **Parameters:**
  - `field` (string): The header field name.
  - `val` (string|string[]): The value(s) to set.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.header("X-Custom-Header", "Value");
  ```

#### `get(field)`

Gets the value of the specified response header field.

- **Parameters:**
  - `field` (string): The header field name.

- **Returns:**
  - `string|string[]`: The value(s) of the specified header field.

- **Example:**
  ```javascript
  const contentType = response.get("Content-Type");
  ```

#### `clearCookie(name, options)`

Clears the cookie specified by name.

- **Parameters:**
  - `name` (string): The name of the cookie.
  - `options` (object, optional): Additional options for cookie clearing.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.clearCookie("sessionId");
  ```

#### `cookie(name, value, options)`

Sets a cookie with the specified name, value, and options.

- **Parameters:**
  - `name` (string): The name of the cookie.
  - `value` (string): The value of the cookie.
  - `options` (object, optional): Additional options for the cookie.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.cookie("sessionId", "12345", { maxAge: 900000, httpOnly: true });
  ```

#### `location(url)`

Sets the response Location HTTP header to the specified URL.

- **Parameters:**
  - `url` (string): The URL.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.location("/users");
  ```

#### `redirect(url)`

Redirects to the specified URL.

- **Parameters:**
  - `url` (string): The URL to redirect to.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.redirect("/login");
  ```

#### `vary(field)`

Adds the given field to the Vary response header.

- **Parameters:**
  - `field` (string): The field to vary on.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.vary("User-Agent");
  ```

#### `render(view, options, callback)`

Renders a view and sends the rendered HTML string to the client.

- **Parameters:**
  - `view` (string): The view to render.
  - `options` (object, optional): Options to be passed to the view engine.
  - `callback` (function, optional): Callback function.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.render("index", { title: "Home" });
  ```

#### `setContentType(type)`

Sets the Content-Type header for the response to the specified type.

- **Parameters:**
  - `type` (string): The content type.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.setContentType("application/json");
  ```

#### `sendHTML(html)`

Sends HTML as the response.

- **Parameters:**
  - `html` (string): The HTML content to send.

- **Returns:**
  - `Response`: The Response instance.

- **Example:**
  ```javascript
  response.sendHTML("<h1>Hello, World!</h1>");
  ```

#### `getCookieHandler()`

Gets an advanced cookie handler.

- **Returns:**
  - `CookieHandler`: Advanced cookie handler.

- **Example:**
  ```javascript
  const cookieHandler = resEnhancer.getCookieHandler();
  cookieHandler.set("myCookie", "cookieValue").send();
  ```

#### `getHeadersHandler()`

Gets an advanced headers handler.

- **Returns:**
  - `HeadersHandler`: Advanced headers handler.

- **Example:**
  ```javascript
  const headersHandler = resEnhancer.getHeadersHandler();
  headersHandler.set("Cache-Control", "no-cache").send();
  ```

#### `getJsonHandler()`

Gets an advanced JSON handler.

- **Returns:**
  - `JsonHandler`: Advanced JSON handler.

- **Example:**
  ```javascript
  const jsonHandler = resEnhancer.getJsonHandler();
  jsonHandler.send({ message: "Success" });
  ```