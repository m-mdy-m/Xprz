const express = require("express");
function start(server,port = 3000,textLog = `Server is running on port ${port}`,log = true) {
  if (!server) {
    server = express();
  }
  server.listen(port, () => {
    if (log) {
      console.log(textLog);
    }
  });
  return server;
}
module.exports = start