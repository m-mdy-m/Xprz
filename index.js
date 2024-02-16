const {initApp,launch,listen} = require('./src/shared/app')
const {createMiddlewareContext,use} = require("./src/core/middleware/MiddlewareProvider");
const  get= require('./src/core/CRUD/read')
const {applyCallbacks} = require('./src/utils/callbackHandler');
const Using = require('./src/Using');

const app = initApp()
const usingInstance = new Using(app);

const appInstance = usingInstance.getAppInstance(); 
console.log(appInstance)