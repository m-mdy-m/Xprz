const AdvanceMethods = require("./AdvanceHandler");

class JsonHandler extends AdvanceMethods {
  constructor() {
    super();
    this.json = this.res.json;
  }
  // Method to send a success response with a message
  Success(message) {
    return this.json({ success: true, message });
  }
  ListResponse(items, totalCount, totalPages, currentPage) {
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
  CreatedResponse(createdObject) {
    return this.status(201).json({ success: true, message: 'Resource created successfully', data: createdObject });
  }
  // Method to  a response indicating that the resource was updated successfully
  UpdatedResponse(updatedObject) {
    return this.json({ success: true, message: 'Resource updated successfully', data: updatedObject });
  }
  // Method to  a response indicating that the operation was completed successfully
  OperationSuccess(message = 'Operation successful') {
    return this.json({ success: true, message });
  }
  // Method to  a response indicating that the operation failed due to validation errors
  ValidationFailedResponse(validationErrors) {
    return this.status(422).json({ success: false, error: 'Validation failed', validationErrors });
  }
   // Method to  a response indicating that the resource was deleted successfully
   DeletedResponse(deletedObject) {
    return this.json({ success: true, message: 'Resource deleted successfully', data: deletedObject });
  }
  // Method to  an error response with a status code and message
  Error(statusCode, message) {
    return this.status(statusCode).json({ success: false, error: message });
  }

  // Method to  a response with a download link
  DownloadLink(downloadUrl) {
    return this.json({ downloadUrl });
  }

  // Advanced method to  JSON response with metadata and additional details
  AdvancedJson(data, metadata = {}) {
    return this.json({ data, metadata });
  }
}
module.exports = JsonHandler;
