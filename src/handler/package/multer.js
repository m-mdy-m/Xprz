/**
 * Wrapper class for configuring and using Multer middleware.
 */
class Multer {
  /**
   * Constructor to initialize the Multer instance.
   * @param {Object} multer - The Multer instance.
   */
  constructor(multer, app) {
    /** @private */
    this.multer = multer;
    /** @private */
    this.app = app;
    // Bind methods to the current context
    this.getMulter = this.getMulter.bind(this);
    this.any = this.any.bind(this);
    this.array = this.array.bind(this);
    this.disk = this.disk.bind(this);
    this.fields = this.fields.bind(this);
    this.filter = this.filter.bind(this);
    this.single = this.single.bind(this);
  }
  /**
   * Returns the configured Multer instance.
   * @returns {Object} The Multer instance.
   */
  getMulter() {
    return this.multer;
  }

  /**
   * Configures disk storage for file uploads.
   * @param {Object} options - Options for configuring disk storage.
   * @returns {Object} The configured disk storage.
   */
  disk(options) {
    return this.multer.diskStorage(options);
  }

  /**
   * Sets the file filter for uploaded files.
   * @param {Function} filter - The file filter function.
   * @example
   * const multer = new Multer(multerInstance);
   * multer.filter((req, file, cb) => {
   *   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
   *     cb(null, true);
   *   } else {
   *     cb(new Error('Invalid file type'));
   *   }
   * });
   */
  filter(filter) {
    /** @private */
    this.fileFilter = filter;
  }

  /**
   * Configures Multer to handle a single file upload.
   * @param {Array} options - Options for configuring Multer.
   * @param {string} field - The name of the file field in the form.
   * @example
   * const multer = new Multer(multerInstance);
   * multer.single({ dest: 'uploads/' }, 'image');
   */
  single(options, ...field) {
    this.app.use(this.multer(options).single(...field));
  }

  /**
   * Configures Multer to handle an array of file uploads.
   * @param {Array} options - Options for configuring Multer.
   * @param {...string} fields - The names of the file fields in the form.
   * @example
   * const multer = new Multer(multerInstance);
   * multer.array({ dest: 'uploads/' }, 'images');
   */
  array(options, ...fields) {
    this.app.use(this.multer(options).array(...fields));
  }

  /**
   * Configures Multer to handle multiple fields of files.
   * @param {Array} options - Options for configuring Multer.
   * @param {...string[]} fields - The names of the fields containing files.
   * @example
   * const multer = new Multer(multerInstance);
   * multer.fields({ dest: 'uploads/' }, 'avatar', 'photos');
   */
  fields(options, ...fields) {
    this.app.use(this.multer(options).fields(...fields));
  }

  /**
   * Configures Multer to handle any type of file upload.
   * @param {Array} options - Options for configuring Multer.
   * @param {...string} fields - The names of the file fields in the form.
   * @example
   * const multer = new Multer(multerInstance);
   * multer.any({ dest: 'uploads/' }, 'files');
   */
  any(options, ...fields) {
    this.app.use(this.multer(options).any(...fields));
  }
}
module.exports = Multer;
