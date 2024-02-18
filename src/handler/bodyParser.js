class bodyParser {
  constructor(pkg, use) {
    /** @private */
    this.bodyParser = pkg;
    /** @private */
    this.use = use;
  }
  getBodyParser() {
    return this.bodyParser;
  }
  json() {
    this.use(this.bodyParser.json());
  }
  encoded(status = false) {
    this.use(this.bodyParser.urlencoded({ extended: status }));
  }
  limiting(size) {
    this.use(this.bodyParser.json({ limit: size }));
  }
  rawTextData() {
    this.use(this.bodyParser.text());
  }
  bufferData() {
    this.use(this.bodyParser.raw());
  }
  xml() {
    this.use(this.bodyParser.xml());
  }
  csv() {
    this.use(this.bodyParser.csv());
  }
}
module.exports = bodyParser;
