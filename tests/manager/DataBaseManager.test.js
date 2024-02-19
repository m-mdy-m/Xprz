const DataBaseManager = require('../../src/manager/databaseManager');
const MySql = require('../../src/handler/database/MySql');
const MongoDB = require('../../src/handler/database/MongoDB');

jest.mock('../../src/handler/database/MySql');
jest.mock('../../src/handler/database/MongoDB');

describe('DataBaseManager Class', () => {
  let dbManager;

  beforeEach(() => {
    dbManager = new DataBaseManager();
  });

  test('MySql method should create and return a new instance of MySql', () => {
    dbManager.MySql();
    expect(MySql).toHaveBeenCalled();
  });

  test('MongoDb method should create and return a new instance of MongoDb', () => {
    dbManager.MongoDb();
    expect(MongoDB).toHaveBeenCalled();
  });
});

describe('MySql Class', () => {
  let mySql;

  beforeEach(() => {
    mySql = new MySql();
  });

  test('connect should establish a connection to the MySQL database', async () => {
    const mockConnection = jest.fn();
    mySql.mysql.createConnection = jest.fn(() => ({ connect: mockConnection }));
    await mySql.connect({});
    expect(mockConnection).toHaveBeenCalled();
  });

  test('query should perform a SQL query', async () => {
    const mockQuery = jest.fn((sql, values, callback) => callback(null, {}));
    mySql.connection = { query: mockQuery };
    await mySql.query('SELECT * FROM table');
    expect(mockQuery).toHaveBeenCalled();
  });
});

describe('MongoDB Class', () => {
  let mongoDb;

  beforeEach(() => {
    mongoDb = new MongoDB();
  });

  test('connect should establish a connection to the MongoDB database', async () => {
    const mockConnect = jest.fn(() => {});
    mongoDb.mongodb.MongoClient.connect = mockConnect;
    await mongoDb.connect('mongodb://localhost:27017/mydatabase');
    expect(mockConnect).toHaveBeenCalled();
  });

  test('find should perform a find operation on a MongoDB collection', async () => {
    const mockCollection = { find: jest.fn(() => ({ toArray: () => [] })) };
    mongoDb.db = { collection: jest.fn(() => mockCollection) };
    await mongoDb.find('collectionName', {});
    expect(mockCollection.find).toHaveBeenCalled();
  });
});
