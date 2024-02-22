/**
 * Class for handling JSON responses.
 */
class JsonHandler {
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
    this.list = this.list.bind(this);
    this.created = this.created.bind(this);
    this.updated = this.updated.bind(this);
    this.opSuccess = this.opSuccess.bind(this);
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
  }
  /**
   * Sends a success response with a message.
   * @param {string} message - The success message.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.success("Operation successful");
   */
  success(message) {
    return this.json({ success: true, message });
  }
  /**
   * Sends a response with a list of items along with pagination details.
   * @param {Array} items - The list of items to be sent in the response.
   * @param {number} totalCount - The total count of items (for pagination).
   * @param {number} totalPages - The total number of pages (for pagination).
   * @param {number} currentPage - The current page number (for pagination).
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.list([...], 100, 10, 1);
   */
  list(items, totalCount, totalPages, currentPage) {
    const responseData = {
      items,
      pagination: {
        totalCount,
        totalPages,
        currentPage,
      },
    };
    return this.json(responseData);
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
    return this.status(201).json({
      success: true,
      message: "Resource created successfully",
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
    return this.json({
      success: true,
      message: "Resource updated successfully",
      data: updatedObject,
    });
  }
  /**
   * Sends a response indicating that the operation was completed successfully.
   * @param {string} [message="Operation successful"] - The success message.
   * @returns {Object} The JSON response.
   * @example
   * const jsonHandler = new JsonHandler();
   * jsonHandler.opSuccess("Operation completed successfully");
   */
  opSuccess(message = "Operation successful") {
    return this.json({ success: true, message });
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
    return this.status(422).json({
      success: false,
      error: "Validation failed",
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
    return this.json({
      success: true,
      message: "Resource deleted successfully",
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
    return this.status(statusCode).json({ success: false, error: message });
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
    return this.status(401).json({ success: false, error: message });
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
    return this.status(403).json({ success: false, error: message });
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
    return this.status(500).json({ success: false, error: message });
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
    return this.status(503).json({ success: false, error: message });
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
    return this.status(404).json({ success: false, error: message });
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
    return this.status(302).json({
      success: true,
      message: "Redirecting...",
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
      message: "File uploaded successfully",
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
    return this.status(400).json({ success: false, error: message });
  }
}
module.exports = JsonHandler;
