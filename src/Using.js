let appInstance = null;

exports.using = function using(app) {
  appInstance = app;
  return app;
};

exports.getAppInstance = function() {
  if (!appInstance) {
    throw new Error('Express app instance has not been initialized yet.');
  }
  return appInstance;
};