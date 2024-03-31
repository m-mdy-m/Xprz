### JsonHandler Class

**Description:**
Class for handling JSON responses.

#### Constructor

##### `JsonHandler(json, status)`

- **Parameters:**
  - `json` (function): The function used to send JSON responses.
  - `status` (function): The function used to set HTTP status code for responses.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  ```

#### Methods

##### `success(message)`

Sends a success response with a message.

- **Parameters:**
  - `message` (string): The success message.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().success("Operation successful", { id: 1, name: "mahdi" });
  ```

##### `created(createdObject)`

Sends a response indicating that the resource was created successfully.

- **Parameters:**
  - `createdObject` (Object): The created object.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().created({ id: 1, name: "Example" });
  ```

##### `updated(updatedObject)`

Sends a response indicating that the resource was updated successfully.

- **Parameters:**
  - `updatedObject` (Object): The updated object.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().updated({ id: 1, name: "Updated Example" });
  ```

##### `validationFailed(validationErrors)`

Sends a response indicating that the operation failed due to validation errors.

- **Parameters:**
  - `validationErrors` (Object): The validation errors object.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().validationFailed({ field1: "Error message 1", field2: "Error message 2" });
  ```

##### `deleted(deletedObject)`

Sends a response indicating that the resource was deleted successfully.

- **Parameters:**
  - `deletedObject` (Object): The deleted object.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().deleted({ id: 1, name: "Deleted Resource" });
  ```

##### `error(statusCode, message)`

Sends an error response with a status code and message.

- **Parameters:**
  - `statusCode` (number): The HTTP status code.
  - `message` (string): The error message.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().error(404, "Resource not found");
  ```

##### `downloadLink(downloadUrl)`

Sends a response with a download link.

- **Parameters:**
  - `downloadUrl` (string): The URL for downloading.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().downloadLink("https://example.com/download");
  ```

##### `advancedJson(data, [metadata={}])`

Sends a JSON response with metadata and additional details.

- **Parameters:**
  - `data` (Object): The main data object.
  - `metadata` (Object, optional): Additional metadata. Defaults to an empty object.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().advancedJson({ data: { id: 1, name: "Example" }, metadata: { count: 10 } });
  ```

##### `authRequired([message="Authentication required"])`

Sends a response indicating that the request requires authentication.

- **Parameters:**
  - `message` (string, optional): The error message. Defaults to "Authentication required".

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().authRequired("User authentication required");
  ```

##### `authzRequired([message="Authorization required"])`

Sends a response indicating that the request requires authorization.

- **Parameters:**
  - `message` (string, optional): The error message. Defaults to "Authorization required".

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().authzRequired("User authorization required");
  ```

##### `internalServerError([message="Internal server error"])`

Sends a response indicating that the server encountered an unexpected error.

- **Parameters:**
  - `message` (string, optional): The error message. Defaults to "Internal server error".

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().internalServerError("Unexpected server error occurred");
  ```

##### `serviceUnavailable(message)`

Sends a response indicating that the resource is temporarily unavailable.

- **Parameters:**
  - `message` (string): The error message.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().serviceUnavailable("Service temporarily unavailable");
  ```

##### `notFound(message)`

Sends a response indicating that the resource was not found.

- **Parameters:**
  - `message` (string): The error message.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const jsonHandler = new

    JsonHandler();
    getJsonHandler().notFound("Resource not found");
  ```

##### `redirectResponse(redirectUrl)`

Sends a redirect response.

- **Parameters:**
  - `redirectUrl` (string): The URL to redirect to.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().redirectResponse("/new-location");
  ```

##### `fileUploadSuccess(filename, fileSize)`

Sends a response for successful file upload.

- **Parameters:**
  - `filename` (string): The name of the uploaded file.
  - `fileSize` (number): The size of the uploaded file.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().fileUploadSuccess("example.jpg", 1024);
  ```

##### `badRequest([message="Bad request"])`

Sends a response for a bad request.

- **Parameters:**
  - `message` (string, optional): The error message. Defaults to "Bad request".

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().badRequest("Bad request");
  ```
##### `rateLimitExceeded()`

Sends a response indicating that the request rate limit has been exceeded.

- **Returns:**
  - `Object`: The JSON response.

- **Example:**
  ```javascript
  const { getJsonHandler } = ctx.res;
  getJsonHandler().rateLimitExceeded();
