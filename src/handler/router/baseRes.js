/**
 * Response class provides enhanced functionality for handling HTTP responses.
 * @class
 */
class Response {
  /**
   * Creates a new Response instance.
   * @param {object} res - Express response object.
   */
  constructor(res) {
    this.res = res;

    // Bind all methods to the current instance
    this.write = this.write.bind(this);
    this.status = this.status.bind(this);
    this.links = this.links.bind(this);
    this.send = this.send.bind(this);
    this.json = this.json.bind(this);
    this.end = this.end.bind(this);
    this.jsonp = this.jsonp.bind(this);
    this.setHeaders = this.setHeaders.bind(this);
    this.setHeader = this.setHeader.bind(this);
    this.getHeader = this.getHeader.bind(this);
    this.sendFile = this.sendFile.bind(this);
    this.download = this.download.bind(this);
    this.contentType = this.contentType.bind(this);
    this.type = this.type.bind(this);
    this.format = this.format.bind(this);
    this.attachment = this.attachment.bind(this);
    this.append = this.append.bind(this);
    this.set = this.set.bind(this);
    this.header = this.header.bind(this);
    this.get = this.get.bind(this);
    this.clearCookie = this.clearCookie.bind(this);
    this.cookie = this.cookie.bind(this);
    this.location = this.location.bind(this);
    this.redirect = this.redirect.bind(this);
    this.vary = this.vary.bind(this);
    this.render = this.render.bind(this);
    this.setContentType = this.setContentType.bind(this);
    this.sendHTML = this.sendHTML.bind(this);
  }

  /**
   * Writes data to the response and ends it.
   * @param {string} data - Data to write to the response.
   * @returns {Response} The Response instance.
   * @example
   * response.write("Hello, World!")
   */
  write(data) {
    this.res.write(data);
    this.res.end();
    return this;
  }

  /**
   * Sets the status code for the response.
   * @param {number} code - HTTP status code.
   * @returns {Response} The Response instance.
   * @example
   * response.status(200).send("OK");
   */
  status(code) {
    this.res.statusCode = code;
    return this;
  }

  /**
   * Sets links in the response header.
   * @param {object} links - Links to be set in the response header.
   * @returns {Response} The Response instance.
   * @example
   * response.links({ next: 'http://example.com/page/2' });
   */
  links(links) {
    this.res.links(links);
    return this;
  }

  /**
   * Sends the HTTP response.
   * @param {any} body - Body of the response.
   * @returns {Response} The Response instance.
   * @example
   * response.send("Hello, World!");
   */
  send(body) {
    this.res.send(body);
    return this;
  }

  /**
   * Sends a JSON response.
   * @param {object} obj - Object to be sent as JSON.
   * @returns {Response} The Response instance.
   * @example
   * response.json({ message: "Hello, World!" });
   */
  json(obj) {
    this.setHeader("Content-Type", "application/json");
    const jsonString = JSON.stringify(obj);
    return this.send(jsonString);
  }

  /**
   * Ends the response.
   * @param {any} [any=undefined] - Optional data to be sent before ending the response.
   * @example
   * response.end();
   */
  end(any = undefined) {
    this.res.end(any);
  }
  /**
   * Sends a JSONP response.
   * @param {object} obj - Object to be sent as JSONP.
   * @returns {Response} The Response instance.
   * @example
   * response.jsonp({ message: "Hello, World!" });
   */
  jsonp(obj) {
    this.json(obj);
  }
  /**
   * Sets multiple response headers.
   * @param {object} headers - Object containing header fields and their values.
   * @returns {Response} The Response instance.
   * @example
   * response.setHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' });
   */
  setHeaders(headers) {
    for (const [field, val] of Object.entries(headers)) {
      this.setHeader(field, val);
    }
    return this;
  }
  /**
   * Sets a single response header.
   * @param {string} field - The name of the header field.
   * @param {string} val - The value of the header field.
   * @returns {Response} The Response instance.
   * @example
   * response.setHeader("Content-Type", "application/json");
   */
  setHeader(field, val) {
    this.res.setHeader(field, val);
    return this;
  }
  /**
   * Gets the value of a response header.
   * @param {string} field - The name of the header field.
   * @returns {string} The value of the header field.
   * @example
   * const contentType = response.getHeader("Content-Type");
   */
  getHeader(field) {
    return this.res.getHeader(field);
  }
  /**
   * Sends a file in the HTTP response.
   * @param {string} path - The path to the file to be sent.
   * @param {function} [fn=undefined] - Optional callback function.
   * @example
   * response.sendFile("/path/to/file.txt");
   */
  sendFile(path, fn = undefined) {
    this.res.sendFile(path, fn);
    return this;
  }
  /**
   * Initiates a file download in the HTTP response.
   * @param {string} path - The path to the file to be downloaded.
   * @param {string} filename - The name of the file when downloaded.
   * @param {function} callback - Callback function.
   * @example
   * response.download("/path/to/file.txt", "downloaded_file.txt", (err) => {
   *   if (err) {
   *     console.error(err);
   *   } else {
   *     console.log("File downloaded successfully");
   *   }
   * });
   */
  download(path, filename, callback) {
    this.res.download(path, filename, callback);
    return this;
  }
  /**
   * Sets the content type of the response.
   * @param {string} type - The content type.
   * @returns {Response} The Response instance.
   * @example
   * response.contentType("text/plain");
   */
  contentType(type) {
    this.res.contentType(type);
    return this;
  }
  /**
   * Sets the content type of the response.
   * @param {string} type - The content type.
   * @returns {Response} The Response instance.
   * @example
   * response.type("text/html");
   */
  type(type) {
    this.res.type(type);
    return this;
  }
  /**
   * Formats the response according to the given object.
   * @param {object} obj - The object defining response formats.
   * @returns {Response} The Response instance.
   * @example
   * response.format({
   *   'text/plain': () => {
   *     response.send('Hello, World!');
   *   },
   *   'text/html': () => {
   *     response.send('<h1>Hello, World!</h1>');
   *   },
   * });
   */
  format(obj) {
    this.res.format(obj);
    return this;
  }
  /**
   * Sets the attachment filename for "Content-Disposition" header.
   * @param {string} filename - The filename.
   * @returns {Response} The Response instance.
   * @example
   * response.attachment("document.pdf");
   */
  attachment(filename) {
    this.res.attachment(filename);
    return this;
  }
  /**
   * Appends the specified value to the HTTP response header field.
   * @param {string} field - The header field name.
   * @param {string|string[]} val - The value(s) to append.
   * @returns {Response} The Response instance.
   * @example
   * response.append("Set-Cookie", "sessionId=12345");
   */
  append(field, val) {
    this.res.append(field, val);
    return this;
  }
  /**
   * Sets a single header field with the specified value.
   * @param {string} field - The header field name.
   * @param {string|string[]} val - The value(s) to set.
   * @returns {Response} The Response instance.
   * @example
   * // Set a custom header
   * response.set("X-Custom-Header", "Value");
   *
   * // Set multiple headers
   * response.set("Content-Type", "application/json");
   * response.set("Cache-Control", "no-cache");
   */
  set(field, val) {
    this.setHeader(field, val);
    return this;
  }
  /**
   * Sets a single header field with the specified value.
   * @param {string} field - The header field name.
   * @param {string|string[]} val - The value(s) to set.
   * @returns {Response} The Response instance.
   * @example
   * response.header("X-Custom-Header", "Value");
   */
  header(field, val) {
    this.res.header(field, val);
    return this;
  }
  /**
   * Gets the value of the specified response header field.
   * @param {string} field - The header field name.
   * @returns {string|string[]} The value(s) of the specified header field.
   * @example
   * const contentType = response.get("Content-Type");
   */
  get(field) {
    return this.res.get(field);
  }
  /**
   * Clears the cookie specified by name.
   * @param {string} name - The name of the cookie.
   * @param {object} [options] - Additional options for cookie clearing.
   * @returns {Response} The Response instance.
   * @example
   * response.clearCookie("sessionId");
   */
  clearCookie(name, options) {
    this.res.clearCookie(name, options);
    return this;
  }
  /**
   * Sets a cookie with the specified name, value, and options.
   * @param {string} name - The name of the cookie.
   * @param {string} value - The value of the cookie.
   * @param {object} [options] - Additional options for the cookie.
   * @returns {Response} The Response instance.
   * @example
   * response.cookie("sessionId", "12345", { maxAge: 900000, httpOnly: true });
   */
  cookie(name, value, options) {
    this.res.cookie(name, value, options);
    return this;
  }
  /**
   * Sets the response Location HTTP header to the specified URL.
   * @param {string} url - The URL.
   * @returns {Response} The Response instance.
   * @example
   * response.location("/users");
   */
  location(url) {
    this.res.location(url);
    return this;
  }
  /**
   * Redirects to the specified URL.
   * @param {string} url - The URL to redirect to.
   * @returns {Response} The Response instance.
   * @example
   * response.redirect("/login");
   */
  redirect(url) {
    this.setHeader("Location", url);
    this.res.statusCode = 302;
    this.res.end();
    return this;
  }
  /**
   * Adds the given field to the Vary response header.
   * @param {string} field - The field to vary on.
   * @returns {Response} The Response instance.
   * @example
   * response.vary("User-Agent");
   */
  vary(field) {
    const existingVary = this.res.getHeader("Vary") || "";
    const newVary = existingVary ? `${existingVary}, ${field}` : field;
    this.setHeader("Vary", newVary);
    return this;
  }
  /**
   * Renders a view and sends the rendered HTML string to the client.
   * @param {string} view - The view to render.
   * @param {object} [options] - Options to be passed to the view engine.
   * @param {function} [callback] - Callback function.
   * @returns {Response} The Response instance.
   * @example
   * response.render("index", { title: "Home" });
   */
  render(view, options, callback) {
    this.res.render(view, options, callback);
    return this;
  }
  /**
   * Sets the Content-Type header for the response to the specified type.
   * @param {string} type - The content type.
   * @returns {Response} The Response instance.
   * @example
   * response.setContentType("application/json");
   */
  setContentType(type) {
    this.setHeader("Content-Type", type);
    return this;
  }
  /**
   * Sends HTML as the response.
   * @param {string} html - The HTML content to send.
   * @returns {Response} The Response instance.
   * @example
   * response.sendHTML("<h1>Hello, World!</h1>");
   */
  sendHTML(html) {
    this.setContentType("text/html").send(html);
    return this;
  }
}
module.exports = Response;
