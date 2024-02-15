exports.applyCallbacks = function applyCallbacks(handler, callbackObj) {
  if (callbackObj) {
    Object.entries(callbackObj).forEach(([method, data]) => {
      if (Array.isArray(data)) {
        handler[method](...data);
      } else {
        handler[method](data);
      }
    });
  }
};
