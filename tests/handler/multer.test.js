const Multer = require('../../src/handler/package/multer'); // Adjust the path as needed
const multerInstance = {}; // Mock Multer instance

describe('Multer', () => {
  let multer;

  beforeEach(() => {
    multer = new Multer(multerInstance, jest.fn()); // Mocking 'use' function
  });

  describe('filter', () => {
    it('should set the file filter function', () => {
      const filterFunction = jest.fn();
      multer.filter(filterFunction);
      expect(multer.fileFilter).toBe(filterFunction);
    });
  });

  describe('single', () => {
    it('should call use with single file upload middleware', () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.single({ dest: 'uploads/' }, 'image');
      expect(useMock).toHaveBeenCalledWith(multerInstance({ dest: 'uploads/' }).single('image'));
    });
  });

  describe('array', () => {
    it('should call use with array file upload middleware', () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.array({ dest: 'uploads/' }, 'images');
      expect(useMock).toHaveBeenCalledWith(multerInstance({ dest: 'uploads/' }).array('images'));
    });
  });

  describe('fields', () => {
    it('should call use with fields file upload middleware', () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.fields({ dest: 'uploads/' }, 'avatar', 'photos');
      expect(useMock).toHaveBeenCalledWith(multerInstance({ dest: 'uploads/' }).fields('avatar', 'photos'));
    });
  });

  describe('any', () => {
    it('should call use with any file upload middleware', () => {
      const useMock = jest.fn();
      multer.use = useMock;
      multer.any({ dest: 'uploads/' }, 'files');
      expect(useMock).toHaveBeenCalledWith(multerInstance({ dest: 'uploads/' }).any('files'));
    });
  });
});
