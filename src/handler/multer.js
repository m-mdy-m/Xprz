/**
 * Wrapper class for configuring and using Multer middleware.
 */
class Multer {
  /**
   * Constructor to initialize the Multer instance.
   * @param {Object} multer - The Multer instance.
   */
  constructor(multer) {
    /** @private */
    this.multer = multer;
  }

  /**
   * Returns the configured Multer instance.
   * @returns {Object} The Multer instance.
   */
  get() {
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
   */
  filter(filter) {
    this.fileFilter = filter;
  }

  /**
   * Configures Multer to handle a single file upload.
   * @param {Array} options - Options for configuring Multer.
   * @param {string} field - The name of the file field in the form.
   * @example
   * multer.single(['image']);
   */
  single(options, field) {
    this.multer(options).single(field);
  }

  /**
   * Configures Multer to handle an array of file uploads.
   * @param {Array} options - Options for configuring Multer.
   * @param {...string} fields - The names of the file fields in the form.
   * @example
   * multer.array(['images']);
   */
  array(options, ...fields) {
    this.multer(options).array(...fields);
  }

  /**
   * Configures Multer to handle multiple fields of files.
   * @param {Array} options - Options for configuring Multer.
   * @param {...string[]} fields - The names of the fields containing files.
   * @example
   * multer.fields(['avatar', 'photos']);
   */
  fields(options, ...fields) {
    this.multer(options).fields(...fields);
  }

  /**
   * Configures Multer to handle any type of file upload.
   * @param {Array} options - Options for configuring Multer.
   * @param {...string} fields - The names of the file fields in the form.
   * @example
   * multer.any(['files']);
   */
  any(options, ...fields) {
    this.multer(options).any(...fields);
  }
}

module.exports = Multer;
