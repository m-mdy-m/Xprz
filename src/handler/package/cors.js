class CorsHandler {
  constructor(cors, use, options) {
    this.cors = cors;
    this.use = use;
    this.cors(options);
    this.use(cors);
  }
  get() {
    return this.cors;
  }
}
module.exports = CorsHandler;
