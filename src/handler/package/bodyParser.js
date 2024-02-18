/**
 * BodyParser class for configuring body parsing middleware in an Express application.
 */
class BodyParser {
  /**
   * Creates an instance of BodyParser.
   * @param {Object} pkg - The body-parser package.
   * @param {Function} use - The Express app's `use` function.
   */
  constructor(pkg, use) {
    /** @private */
    this.bodyParser = pkg;
    /** @private */
    this.use = use;
  }

  /**
   * Get the body-parser package.
   * @returns {Object} The body-parser package.
   */
  getBodyParser() {
    return this.bodyParser;
  }

  /**
   * Configure JSON body parsing middleware.
   * @example
   * const bodyParser = new BodyParser(require('body-parser'), app.use.bind(app));
   * bodyParser.json();
   */
  json() {
    this.use(this.bodyParser.json());
  }

  /**
   * Configure URL-encoded body parsing middleware.
   * @param {boolean} [status=false] - Whether to parse extended bodies.
   * @example
   * const bodyParser = new BodyParser(require('body-parser'), app.use.bind(app));
   * bodyParser.encoded();
   */
  encoded(status = false) {
    this.use(this.bodyParser.urlencoded({ extended: status }));
  }

  /**
   * Configure JSON body parsing with size limit middleware.
   * @param {string} size - The maximum request body size.
   * @example
   * const bodyParser = new BodyParser(require('body-parser'), app.use.bind(app));
   * bodyParser.limiting('5mb');
   */
  limiting(size) {
    this.use(this.bodyParser.json({ limit: size }));
  }

  /**
   * Configure raw text body parsing middleware.
   * @example
   * const bodyParser = new BodyParser(require('body-parser'), app.use.bind(app));
   * bodyParser.rawTextData();
   */
  rawTextData() {
    this.use(this.bodyParser.text());
  }

  /**
   * Configure raw buffer body parsing middleware.
   * @example
   * const bodyParser = new BodyParser(require('body-parser'), app.use.bind(app));
   * bodyParser.bufferData();
   */
  bufferData() {
    this.use(this.bodyParser.raw());
  }

  /**
   * Configure XML body parsing middleware.
   * @example
   * const bodyParser = new BodyParser(require('body-parser-xml'), app.use.bind(app));
   * bodyParser.xml();
   */
  xml() {
    this.use(this.bodyParser.xml());
  }

  /**
   * Configure CSV body parsing middleware.
   * @example
   * const bodyParser = new BodyParser(require('express-csv'), app.use.bind(app));
   * bodyParser.csv();
   */
  csv() {
    this.use(this.bodyParser.csv());
  }
}

module.exports = BodyParser;
