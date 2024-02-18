const AppManager = require("./AppManager");
const jwtHandler = require("../handler/jwt");
const bcryptjsHandler = require("../handler/bcryptjs");
const NodemailerHandler = require("../handler/nodemailer");
const MulterHandler = require("../handler/multer");
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
  /** @private */
  instantiateWithPkg(packageName, HandlerClass) {
    const pkg = checkPkg(packageName);
    return new HandlerClass(pkg);
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
  csrf() {
    const csrf = checkPkg("csurf");
    const Protection = csrf();
    this.use(Protection);
  }
  cors(...handler) {
    const cors = checkPkg("cors");
    this.use(cors(...handler));
  }
  bodyParser(...handler) {
    const bodyPater = checkPkg("body-parser");
    this.use(bodyPater(...handler));
  }
  flash() {
    const flash = checkPkg("connect-flash");
    this.use(flash());
  }
  connectMongoDbSession(...options) {
    const connectMongoDbSession = checkPkg("connect-mongodb-session");
    const store = new connectMongoDbSession(...options);
    return store;
  }
}
const { multer } = new DependencyHandler();
