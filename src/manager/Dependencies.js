const AppManager = require("./AppManager");
const jwtHandler = require("../handler/jwt"),
  bcryptjsHandler = require("../handler/bcryptjs"),
  NodemailerHandler = require("../handler/nodemailer"),
  MulterHandler = require("../handler/multer"),
  BodyParser = require("../handler/bodyParser"),
  Cors = require("../handler/cors"),
  flash = require("../handler/flash"),
  Csrf = require("../handler/csrf");
function checkPkg(packageName) {
  try {
    const requiredPackage = require(packageName);
    return requiredPackage;
  } catch {
    throw new Error(
      `The '${packageName}' module is not installed. Please make sure to install it by running 'npm install ${packageName}' before using sessions.`
    );
  }
}

class DependencyHandler extends AppManager {
  constructor() {
    super();
  }
  session(...options) {
    if (!this.app) {
      throw new Error("Express app has not been initialized yet.");
    }
    const session = checkPkg("express-session");
    /**@private */
    this.s = session;
    this.app.use(session(...options));
  }
  jwt() {
    const pkg = checkPkg("jsonwebtoken");
    return new jwtHandler(pkg);
  }
  multer() {
    const pkg = checkPkg("multer");
    return new MulterHandler(pkg);
  }
  nodemailer() {
    const pkg = checkPkg("nodemailer");
    return new NodemailerHandler(pkg);
  }
  bcryptjs() {
    const pkg = checkPkg("bcryptjs");
    return new bcryptjsHandler(pkg);
  }
  bodyParser(...handler) {
    const pkg = checkPkg("body-parser");
    return new BodyParser(pkg, this.use);
  }
  csrf() {
    const pkg = checkPkg("csurf");
    return new Csrf(pkg, this.use);
  }
  cors(...handler) {
    const pkg = checkPkg("cors");
    return new Cors(pkg, this.use, ...handler);
  }
  flash() {
    const pkg = checkPkg("connect-flash");
    return new flash(pkg);
  }
  connectMongoDbSession(...options) {
    const connectMongoDbSession = checkPkg("connect-mongodb-session");
    const store = new connectMongoDbSession(...options);
    return store;
  }
}
