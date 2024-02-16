let appInstance,hasUsing=false

function Using(app){
    appInstance = app
    hasUsing=true
    return app
}
function getAppInstance(){
  if (!appInstance) {
    throw new Error("Express app instance has not been initialized yet.");
  }
  console.log('1 =>',hasUsing);
  if (hasUsing) {
    return appInstance
  }
  return
}

module.exports = {Using,getAppInstance,hasUsing};