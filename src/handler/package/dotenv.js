const path = require("path");
class Dotenv {
  constructor(pkg) {
    /** @private */
    this.dotenv = pkg;
    /** @private */
    this.setup = this.setup.bind(this);
    /** @private */
    this.getDot = this.getDot.bind(this);
  }

  getDot() {
    return this.dotenv;
  }
  setup(log = false, options = { path: path.resolve(process.cwd(), ".env") }) {
    try {
      const result = this.dotenv.config(options);
      if (result.error) {
        console.error("Error loading .env file:", result.error);
        return false;
      }
      if (log) {
        console.log(".env file loaded successfully");
      }
      return true;
    } catch (error) {
      console.error("Error loading .env file:", error);
      return false;
    }
  }
}

module.exports = Dotenv;
