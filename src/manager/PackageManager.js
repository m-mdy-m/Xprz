const AppManager = require("./AppManager");
const jwtHandler = require("../handler/package/jwt"),
  bcryptjsHandler = require("../handler/package/bcryptjs"),
  NodemailerHandler = require("../handler/package/nodemailer"),
  MulterHandler = require("../handler/package/multer"),
  BodyParser = require("../handler/package/bodyParser"),
  Cors = require("../handler/package/cors"),
  flash = require("../handler/package/flash"),
  Csrf = require("../handler/package/csrf");
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

class PackageManager extends AppManager {
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
    const use = this.use.bind(this);
    return new MulterHandler(pkg, use);
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
    const use = this.use.bind(this);
    return new BodyParser(pkg, use, ...handler);
  }
  csrf() {
    const pkg = checkPkg("csurf");
    const use = this.use.bind(this);
    return new Csrf(pkg, use);
  }
  cors(...handler) {
    const pkg = checkPkg("cors");
    const use = this.use.bind(this);
    return new Cors(pkg, use, ...handler);
  }
  flash() {
    const pkg = checkPkg("connect-flash");
    const use = this.use.bind(this);
    return new flash(pkg, use);
  }
  connectMongoDbSession(...options) {
    const connectMongoDbSession = checkPkg("connect-mongodb-session");
    const store = new connectMongoDbSession(...options);
    return store;
  }
}
