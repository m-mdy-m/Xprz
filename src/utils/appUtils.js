// Import the Express module
const express = require('express');

/**
 * Initializes and returns a new Express application instance.
 * 
 * @returns {Object} A new Express application instance.
 */
function init(){
    return express();
}

/**
 * Returns the Express module.
 * 
 * @returns {Object} The Express module.
 */
function Express(){
    return express;
}

/**
 * Starts the Express application on the specified port and logs a message.
 * 
 * @param {Object} app - The Express application instance to listen on.
 * @param {number} [port=3000] - The port number to listen on. Default is 3000.
 * @param {string} [textLog='Server is running on port ${port}'] - The message to log upon successful start.
 * @param {boolean} [log=true] - Indicates whether to log the message. Default is true.
 * @returns {void}
 */
function Server(app, port = 3000, textLog = `Server is running on port ${port}`, log = true) {
    app.listen(port, () => {
        if (log) {
            console.log(textLog);
        }
    });
}

// Export the functions for use in other modules
module.exports = {Express,Server,init
};
