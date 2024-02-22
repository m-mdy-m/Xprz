class JsonHandler {
  constructor(json, status) {
    this.json = json;
    this.status = status;
  }
  // Method to  a success response with a message
  success(message) {
    return this.json({ success: true, message });
  }
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
  // Method to  a response indicating that the resource was created successfully
  created(createdObject) {
    return this.status(201).json({
      success: true,
      message: "Resource created successfully",
      data: createdObject,
    });
  }
  // Method to  a response indicating that the resource was updated successfully
  updated(updatedObject) {
    return this.json({
      success: true,
      message: "Resource updated successfully",
      data: updatedObject,
    });
  }
  // Method to  a response indicating that the operation was completed successfully
  opSuccess(message = "Operation successful") {
    return this.json({ success: true, message });
  }
  // Method to  a response indicating that the operation failed due to validation errors
  validationFailed(validationErrors) {
    return this.status(422).json({
      success: false,
      error: "Validation failed",
      validationErrors,
    });
  }
  // Method to  a response indicating that the resource was deleted successfully
  deleted(deletedObject) {
    return this.json({
      success: true,
      message: "Resource deleted successfully",
      data: deletedObject,
    });
  }
  // Method to  an error response with a status code and message
  error(statusCode, message) {
    return this.status(statusCode).json({ success: false, error: message });
  }

  // Method to  a response with a download link
  downloadLink(downloadUrl) {
    return this.json({ downloadUrl });
  }

  // Advanced method to  JSON response with metadata and additional details
  advancedJson(data, metadata = {}) {
    return this.json({ data, metadata });
  }

  // Method to  a response indicating that the request requires authentication
  authRequired(message = "Authentication required") {
    return this.status(401).json({ success: false, error: message });
  }

  // Method to  a response indicating that the request requires authorization
  authzRequired(message = "Authorization required") {
    return this.status(403).json({ success: false, error: message });
  }

  // Method to  a response indicating that the server encountered an unexpected error
  internalServerError(message = "Internal server error") {
    return this.status(500).json({ success: false, error: message });
  }

  // Method to  a response indicating that the resource is temporarily unavailable
  serviceUnavailable(message = "Service temporarily unavailable") {
    return this.status(503).json({ success: false, error: message });
  }

  // Method to send a response indicating that the resource was not found
  notFound(message = "Resource not found") {
    return this.status(404).json({ success: false, error: message });
  }
  // Method to send a redirect response
  redirect(url, statusCode = 302) {
    return this.status(statusCode).json({ success: true, redirectUrl: url });
  }
  // Method to send a response for successful file upload
  fileUploadSuccess(filename, fileSize) {
    return this.json({
      success: true,
      message: "File uploaded successfully",
      filename,
      fileSize,
    });
  }
  badRequest(message = "Bad request") {
    return this.status(400).json({ success: false, error: message });
  }
}
module.exports = JsonHandler;
