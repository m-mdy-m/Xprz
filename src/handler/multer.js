class multer {
  constructor(multer) {
    /**@private */
    this.multer = multer;
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
  DiskStorage(options) {
    const fileStorage = this.multer.diskStorage(options);
    return fileStorage;
  }
  fileFilter(...handler) {
    this.fileFilter = handler;
    return this.fileFilter;
  }
  multerWithSingleOfFiles([...options], file) {
    const multer = this.getMulter();
    multer(...options).single(file);
  }
  multerWithArrayOfFiles([...options], ...files) {
    const multer = this.getMulter();
    multer(...options).array(...files);
  }
  multerWithFieldsOfFiles([...options], ...files) {
    const multer = this.getMulter();
    multer(...options).fields(...files);
  }
  multerWithAnyOfFiles([...options], ...files) {
    const multer = this.getMulter();
    multer(...options).any(...files);
  }
}
