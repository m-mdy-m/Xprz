const { getApp, setApp } = require("../../Using");
const RouteHandler = require("../../handler/RouteHandler");
const { getExpress } = require("../../shared/AppManager");
const { applyCallbacks } = require("../../utils/callbackHandler");
const createRouter = require('../routes/router.js')
let hasRouteInit = false;
let router = createRouter()
console.log('router=>',router);

function get(url, callbackObj) {
    const app = getApp();
    const handler = new RouteHandler(app, url);
    applyCallbacks(handler, callbackObj);
    return handler;
}
module.exports = get;
