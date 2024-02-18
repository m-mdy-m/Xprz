const AppManager = require("./AppManager");

function ensurePackage(packageName) {
  try {
    const requiredPackage = require(packageName);
    return requiredPackage; // Return the required package
  } catch{
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
    const session = ensurePackage("express-session");
    /**@private */
    this.s = session;
    this.app.use(session(...options));
  }
  jwt(){

  }
  muter(){

  }
  validator(){
    
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
