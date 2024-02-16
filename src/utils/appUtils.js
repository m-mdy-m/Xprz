const express = require('express')
function initApp(){
    return express()
}
function listen(app, port = 3000, textLog = `Server is running on port ${port}`, log = true) {
    app.listen(port, () => {
        if (log) {
            console.log(textLog);
        }
    });
}
module.exports = {
    initApp,
    listen,
};