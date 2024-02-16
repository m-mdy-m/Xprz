const express = require('express');
const { getApp } = require('../Using');
const app = getApp();
function initApp(){
    return express()
}
function getExpress(){
    return express
}
function listen(app, port = 3000, textLog = `Server is running on port ${port}`, log = true) {
    app.listen(port, () => {
        if (log) {
            console.log(textLog);
        }
    });
}
express.set = function(...handler){
    return app.set(...handler);

}
exports.use=function(...handler){
    return app.use(...handler);
}
module.exports = {
    initApp,
    getExpress,
    listen,
};