const jwtHandler = require("../handler/package/jwt"),
  bcryptjsHandler = require("../handler/package/bcryptjs"),
  NodemailerHandler = require("../handler/package/nodemailer"),
  MulterHandler = require("../handler/package/multer"),
  BodyParser = require("../handler/package/bodyParser"),
  Cors = require("../handler/package/cors"),
  flash = require("../handler/package/flash"),
  Csrf = require("../handler/package/csrf"),
  {ModuleNotInstalledError,PackageInitializationError} = require('../Errors/package.manager.error')
const { useApp, getApp } = require("../shareApp");

function checkPkg(packageName) {
  try {
    const requiredPackage = require(packageName);
    return requiredPackage;
  } catch {
    throw new ModuleNotInstalledError(packageName);
  }
}
/**
 * PackageManager class for managing various packages and middleware in an Express application.
 * @extends AppManager
 */
class PackageManager {
  constructor() {}

  /**
   * Initialize and configure Express session middleware.
   * @param {...any} options - Options for configuring the session middleware.
   * @throws {Error} Throws an error if Express app has not been initialized.
   * @example
   * const pkgManager = new Package();
   * pkgManager.session({ secret: 'secret', resave: false, saveUninitialized: true });
   */
  session(...options) {
    const session = checkPkg("express-session");
    /** @private */
    this.s = session;
    useApp(session(...options));
  }

  /**
   * Initialize and configure JWT handler.
   * @returns {jwtHandler} Instance of jwtHandler.
   * @example
   * const pkgManager = new Package();
   * const jwt = pkgManager.jwt();
   */
  jwt() {
    const pkg = checkPkg("jsonwebtoken");
    return new jwtHandler(pkg);
  }

  /**
   * Initialize and configure multer middleware.
   * @returns {MulterHandler} Instance of MulterHandler.
   * @example
   * const pkgManager = new Package();
   * const multer = pkgManager.multer();
   */
  multer() {
    const pkg = checkPkg("multer");
    const app = getApp()
    return new MulterHandler(pkg, app);
  }

  /**
   * Initialize and configure Nodemailer handler.
   * @returns {NodemailerHandler} Instance of NodemailerHandler.
   * @example
   * const pkgManager = new Package();
   * const nodemailer = pkgManager.nodemailer();
   */
  nodemailer() {
    const pkg = checkPkg("nodemailer");
    return new NodemailerHandler(pkg);
  }

  /**
   * Initialize and configure bcryptjs handler.
   * @returns {bcryptjsHandler} Instance of bcryptjsHandler.
   * @example
   * const pkgManager = new Package();
   * const bcryptjs = pkgManager.bcryptjs();
   */
  bcryptjs() {
    const pkg = checkPkg("bcryptjs");
    return new bcryptjsHandler(pkg);
  }

  /**
   * Initialize and configure body parser middleware.
   * @param {...Function} handler - Optional additional handlers to use with body-parser.
   * @returns {BodyParser} Instance of BodyParser.
   * @example
   * const pkgManager = new Package();
   * const bodyParser = pkgManager.bodyParser();
   */
  bodyParser(...handler) {
    const pkg = checkPkg("body-parser");
    const use = useApp.bind(this);
    return new BodyParser(pkg, use, ...handler);
  }

  /**
   * Initialize and configure CSRF protection middleware.
   * @returns {Csrf} Instance of Csrf.
   * @example
   * const pkgManager = new Package();
   * const csrf = pkgManager.csrf();
   */
  csrf() {
    const pkg = checkPkg("csurf");
    const use = useApp.bind(this);
    return new Csrf(pkg, use);
  }

  /**
   * Initialize and configure CORS middleware.
   * @param {...Function} handler - Optional additional handlers to use with CORS.
   * @returns {Cors} Instance of Cors.
   * @example
   * const pkgManager = new Package();
   * const cors = pkgManager.cors(...handler);
   */
  cors(...handler) {
    const pkg = checkPkg("cors");
    const use = useApp.bind(this);
    return new Cors(pkg, use, ...handler);
  }

  /**
   * Initialize and configure flash middleware.
   * @returns {flash} Instance of flash.
   * @example
   * const pkgManager = new Package();
   * const flash = pkgManager.flash();
   */
  flash() {
    const pkg = checkPkg("connect-flash");
    const use = useApp.bind(this);
    return new flash(pkg, use);
  }

  /**
   * Initialize and configure connect-mongodb-session middleware.
   * @param {...any} options - Options for configuring the MongoDB session store.
   * @returns {Object} Instance of MongoDB session store.
   * @example
   * const pkgManager = new Package();
   * const store = pkgManager.connectMongoDbSession();
   */
  connectMongoDbSession(...options) {
    try {
      const connectMongoDbSession = require("connect-mongodb-session")(this.s);
      return new connectMongoDbSession(...options);
    } catch (error) {
      throw new PackageInitializationError("connect-mongodb-session", error.message);
    }
  }
}
module.exports = PackageManager;
