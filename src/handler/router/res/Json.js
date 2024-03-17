/**
 * Class for handling JSON responses.
 */
class JsonHandler {
  /**
  * Returns HTTP status codes.
  * @returns {Object} HTTP status codes.
   */
  static get HTTP_STATUS() {
    return {
      OK: 200,
      CREATED: 201,
      UNPROCESSABLE_ENTITY: 422,
      NOT_FOUND: 404,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      INTERNAL_SERVER_ERROR: 500,
      SERVICE_UNAVAILABLE: 503,
      TOO_MANY_REQUESTS: 429,
      REDIRECT: 302, // Added for redirect response
    };
  }
  /**
   * Returns messages associated with JSON responses.
   * @returns {Object} Messages for JSON responses.
   */
  static get MESSAGES() {
    return {
      SUCCESS: "Operation successful",
      RESOURCE_CREATED: "Resource created successfully",
      RESOURCE_UPDATED: "Resource updated successfully",
      VALIDATION_FAILED: "Validation failed",
      RESOURCE_DELETED: "Resource deleted successfully",
      AUTH_REQUIRED: "Authentication required",
      AUTHZ_REQUIRED: "Authorization required",
      INTERNAL_SERVER_ERROR: "Internal server error",
      SERVICE_UNAVAILABLE: "Service temporarily unavailable",
      NOT_FOUND: "Resource not found",
      REDIRECTING: "Redirecting...",
      FILE_UPLOADED: "File uploaded successfully",
      BAD_REQUEST: "Bad request",
      RATE_LIMIT_EXCEEDED: "Rate limit exceeded",
    };
  }
  /**
   * Creates an instance of JsonHandler.
   * @param {Function} json - The function used to send JSON responses.
   * @param {Function} status - The function used to set HTTP status code for responses.
   */
  constructor(json, status) {
    /** @private */
    this.json = json;
    /** @private☻ */
    this.status = status;
    // Bind methods to ensure they have access to the correct 'this' context
    this.success = this.success.bind(this);
    this.created = this.created.bind(this);
    this.updated = this.updated.bind(this);
    this.validationFailed = this.validationFailed.bind(this);
    this.deleted = this.deleted.bind(this);
    this.error = this.error.bind(this);
    this.downloadLink = this.downloadLink.bind(this);
    this.advancedJson = this.advancedJson.bind(this);
    this.authRequired = this.authRequired.bind(this);
    this.authzRequired = this.authzRequired.bind(this);
    this.internalServerError = this.internalServerError.bind(this);
    this.serviceUnavailable = this.serviceUnavailable.bind(this);
    this.notFound = this.notFound.bind(this);
    this.redirectResponse = this.redirectResponse.bind(this);
    this.fileUploadSuccess = this.fileUploadSuccess.bind(this);
    this.badRequest = this.badRequest.bind(this);
    this.rateLimitExceeded = this.rateLimitExceeded.bind(this);
  }
  /**
   * Sends a JSON response with the given data and status code.
   * @param {number} statusCode - The HTTP status code.
   * @param {Object} data - The data to be sent in the response.
   * @returns {Object} The JSON response.
   * @private
   */
  sendResponse(statusCode, data) {
    return this.status(statusCode).json(data);
  }
  /**
   * Sends a success response with a message and optional data.
   * @param {string} message - The success message.
   * @param {Object} [data={}] - Additional data to be included in the response.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.success("Operation successful", { id: 1, name: "John" });
   */
  success(message = JsonHandler.MESSAGES.SUCCESS, data = {}) {
    return this.sendResponse(JsonHandler.HTTP_STATUS.OK, {
      success: true,
      message,
      data,
    });
  }
  /**
   * Sends a response indicating that the resource was created successfully.
   * @param {Object} createdObject - The created object.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.created({ id: 1, name: "Example" });
   */
  created(createdObject) {
    return this.sendResponse(JsonHandler.HTTP_STATUS.CREATED, {
      success: true,
      message: JsonHandler.MESSAGES.RESOURCE_CREATED,
      data: createdObject,
    });
  }
  /**
   * Sends a response indicating that the resource was updated successfully.
   * @param {Object} updatedObject - The updated object.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.updated({ id: 1, name: "Updated Example" });
   */
  updated(updatedObject) {
    return this.sendResponse(JsonHandler.HTTP_STATUS.OK, {
      success: true,
      message: JsonHandler.MESSAGES.RESOURCE_UPDATED,
      data: updatedObject,
    });
  }
  /**
   * Sends a response indicating that the operation failed due to validation errors.
   * @param {Object} validationErrors - The validation errors object.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.validationFailed({ field1: "Error message 1", field2: "Error message 2" });
   */
  validationFailed(validationErrors) {
    return this.sendResponse(JsonHandler.HTTP_STATUS.UNPROCESSABLE_ENTITY, {
      success: false,
      error: JsonHandler.MESSAGES.VALIDATION_FAILED,
      validationErrors,
    });
  }
  /**
   * Sends a response indicating that the resource was deleted successfully.
   * @param {Object} deletedObject - The deleted object.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.deleted({ id: 1, name: "Deleted Resource" });
   */
  deleted(deletedObject) {
    return this.sendResponse(JsonHandler.HTTP_STATUS.OK, {
      success: true,
      message: JsonHandler.MESSAGES.RESOURCE_DELETED,
      data: deletedObject,
    });
  }
  /**
   * Sends an error response with a status code and message.
   * @param {number} statusCode - The HTTP status code.
   * @param {string} message - The error message.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.error(404, "Resource not found");
   */
  error(statusCode, message) {
    return this.sendResponse(statusCode, { success: false, error: message });
  }

  /**
   * Sends a response with a download link.
   * @param {string} downloadUrl - The URL for downloading.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.downloadLink("https://example.com/download");
   */
  downloadLink(downloadUrl) {
    return this.json({ downloadUrl });
  }

  /**
   * Sends a JSON response with metadata and additional details.
   * @param {Object} data - The main data object.
   * @param {Object} [metadata={}] - Additional metadata.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.advancedJson({ data: { id: 1, name: "Example" }, metadata: { count: 10 } });
   */
  advancedJson(data, metadata = {}) {
    return this.json({ data, metadata });
  }

  /**
   * Sends a response indicating that the request requires authentication.
   * @param {string} [message="Authentication required"] - The error message.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.authRequired("User authentication required");
   */
  authRequired(message = "Authentication required") {
    return this.status(JsonHandler.HTTP_STATUS.UNAUTHORIZED).json({ success: false, error: message });
  }

  /**
   * Sends a response indicating that the request requires authorization.
   * @param {string} [message="Authorization required"] - The error message.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.authzRequired("User authorization required");
   */
  authzRequired(message = "Authorization required") {
    return this.status(JsonHandler.HTTP_STATUS.FORBIDDEN).json({ success: false, error: message });
  }

  /**
   * Sends a response indicating that the server encountered an unexpected error.
   * @param {string} [message="Internal server error"] - The error message.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.internalServerError("Unexpected server error occurred");
   */
  internalServerError(message = "Internal server error") {
    return this.status(JsonHandler.HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ success: false, error: message });
  }

  /**
   * Sends a response indicating that the resource is temporarily unavailable.
   * @param {string} message - The error message.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.serviceUnavailable("Service temporarily unavailable");
   */
  serviceUnavailable(message = "Service temporarily unavailable") {
    return this.status(JsonHandler.HTTP_STATUS.SERVICE_UNAVAILABLE).json({ success: false, error: message });
  }

  /**
   * Sends a response indicating that the resource was not found.
   * @param {string} message - The error message.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.notFound("Resource not found");
   */
  notFound(message = "Resource not found") {
    return this.status(JsonHandler.HTTP_STATUS.NOT_FOUND).json({ success: false, error: message });
  }
  /**
   * Sends a redirect response.
   * @param {string} redirectUrl - The URL to redirect to.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.redirectResponse("/new-location");
   */
  redirectResponse(redirectUrl) {
    return this.status(JsonHandler.HTTP_STATUS.REDIRECT).json({
      success: true,
      message: JsonHandler.MESSAGES.REDIRECTING,
      redirectUrl,
    });
  }
  /**
   * Sends a response for successful file upload.
   * @param {string} filename - The name of the uploaded file.
   * @param {number} fileSize - The size of the uploaded file.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.fileUploadSuccess("example.jpg", 1024);
   */
  fileUploadSuccess(filename, fileSize) {
    return this.json({
      success: true,
      message: JsonHandler.MESSAGES.FILE_UPLOADED,
      filename,
      fileSize,
    });
  }
  /**
   * Sends a response for a bad request.
   * @param {string} message - The error message.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.badRequest("Bad request");
   */
  badRequest(message = "Bad request") {
    return this.status(JsonHandler.HTTP_STATUS.BAD_REQUEST).json({ success: false, error: message });
  }
  /**
   * Sends a response indicating that the request rate limit has been exceeded.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.rateLimitExceeded();
   */
  rateLimitExceeded() {
    return this.status(JsonHandler.HTTP_STATUS.TOO_MANY_REQUESTS).json({
      success: false,
      error: JsonHandler.MESSAGES.RATE_LIMIT_EXCEEDED,
    });
  }
}
module.exports = JsonHandler;
