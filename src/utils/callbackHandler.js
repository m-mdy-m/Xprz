// Function to apply callbacks to a handler based on the provided callback object
exports.applyCallbacks = function applyCallbacks(handler, callbackObj) {
  // Check if a callback object is provided
  if (callbackObj) {
    // Iterate over each method in the callback object
    Object.entries(callbackObj).forEach(([method, data]) => {
      // Check if the data associated with the method is an array of callbacks
      if (Array.isArray(data)) {
        // If it's an array, apply each callback separately to the handler
        handler[method](...data);
      } else {
        // If it's not an array, apply the single callback to the handler
        handler[method](data);
      }
    });
  }
};
