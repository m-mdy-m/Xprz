const AppManager = require("./AppManager");
const jwtHandler = require("../handler/jwtHandler"),
  bcryptjsHandler = require("../handler/bcryptjsHandler"),
  NodemailerHandler = require("../handler/nodemailerHandler");
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
    return this.instantiateWithPkg("jsonwebtoken", jwtHandler);
  }
  multer(fileConfig, ...options) {
    const multer = checkPkg("multer");
    const upload = multer(...options);
    this.use(upload[fileConfig]());
  }
  nodemailer() {
    return this.instantiateWithPkg("nodemailer", NodemailerHandler);
  }

  bcryptjs() {
    return this.instantiateWithPkg("bcryptjs", bcryptjsHandler);
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
