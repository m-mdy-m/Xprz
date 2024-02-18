const AppManager = require("./AppManager");
const jwtHandler = require("../handler/jwtHandler"),
  bcryptjsHandler = require("../handler/bcryptjsHandler"),
  NodemailerHandler = require("../handler/nodemailerHandler");
function ensurePackage(packageName) {
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
  ensureAndInstantiate(packageName, HandlerClass) {
    const pkg = ensurePackage(packageName);
    return new HandlerClass(pkg);
  }
  session(...options) {
    if (!this.app) {
      throw new Error("Express app has not been initialized yet.");
    }
    const session = ensurePackage("express-session");
    /**@private */
    this.s = session;
    this.app.use(session(...options));
  }
  jwt() {
    return this.ensureAndInstantiate("jsonwebtoken", jwtHandler);
  }
  multer(fileConfig, ...options) {
    const multer = ensurePackage("multer");
    const upload = multer(...options);
    this.use(upload[fileConfig]());
  }
  nodemailer() {
    return this.ensureAndInstantiate("nodemailer", NodemailerHandler);
  }

  bcryptjs() {
    return this.ensureAndInstantiate("bcryptjs", bcryptjsHandler);
  }
  csrf() {
    const csrf = ensurePackage("csurf");
    const Protection = csrf();
    this.use(Protection);
  }
  cors(...handler) {
    const cors = ensurePackage("cors");
    this.use(cors(...handler));
  }
  bodyParser(...handler) {
    const bodyPater = ensurePackage("body-parser");
    this.use(bodyPater(...handler));
  }
  flash() {
    const flash = ensurePackage("connect-flash");
    this.use(flash());
  }
  connectMongoDbSession(...options) {
    const connectMongoDbSession = ensurePackage("connect-mongodb-session");
    const store = new connectMongoDbSession(...options);
    return store;
  }
}
