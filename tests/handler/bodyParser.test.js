const BodyParser = require('../../src/handler/package/bodyParser');
const bodyParserMock = {
  json: jest.fn(),
  urlencoded: jest.fn(),
  text: jest.fn(),
  raw: jest.fn(),
  xml: jest.fn(),
  csv: jest.fn(),
};

const useMock = jest.fn();

describe('BodyParser', () => {
  let bodyParserInstance;

  beforeEach(() => {
    bodyParserInstance = new BodyParser(bodyParserMock, useMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('json', () => {
    it('should call bodyParser.json() and use()', () => {
      bodyParserInstance.json();
      expect(bodyParserMock.json).toHaveBeenCalled();
      expect(useMock).toHaveBeenCalledWith(bodyParserMock.json());
    });
  });

  describe('encoded', () => {
    it('should call bodyParser.urlencoded() and use()', () => {
      const status = false;
      bodyParserInstance.encoded(status);
      expect(bodyParserMock.urlencoded).toHaveBeenCalledWith({ extended: status });
      expect(useMock).toHaveBeenCalledWith(bodyParserMock.urlencoded({ extended: status }));
    });
  });

  describe('limiting', () => {
    it('should call bodyParser.json() with size limit and use()', () => {
      const size = '5mb';
      bodyParserInstance.limiting(size);
      expect(bodyParserMock.json).toHaveBeenCalledWith({ limit: size });
      expect(useMock).toHaveBeenCalledWith(bodyParserMock.json({ limit: size }));
    });
  });

  describe('rawTextData', () => {
    it('should call bodyParser.text() and use()', () => {
      bodyParserInstance.rawTextData();
      expect(bodyParserMock.text).toHaveBeenCalled();
      expect(useMock).toHaveBeenCalledWith(bodyParserMock.text());
    });
  });

  describe('bufferData', () => {
    it('should call bodyParser.raw() and use()', () => {
      bodyParserInstance.bufferData();
      expect(bodyParserMock.raw).toHaveBeenCalled();
      expect(useMock).toHaveBeenCalledWith(bodyParserMock.raw());
    });
  });

  describe('xml', () => {
    it('should call bodyParser.xml() and use()', () => {
      bodyParserInstance.xml();
      expect(bodyParserMock.xml).toHaveBeenCalled();
      expect(useMock).toHaveBeenCalledWith(bodyParserMock.xml());
    });
  });

  describe('csv', () => {
    it('should call bodyParser.csv() and use()', () => {
      bodyParserInstance.csv();
      expect(bodyParserMock.csv).toHaveBeenCalled();
      expect(useMock).toHaveBeenCalledWith(bodyParserMock.csv());
    });
  });
});
