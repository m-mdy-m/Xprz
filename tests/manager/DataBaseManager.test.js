const DataBaseManager = require("../../src/manager/databaseManager");
const MySql = require("../../src/handler/database/MySql");
const MongoDB = require("../../src/handler/database/MongoDB");

jest.mock("mysql");
jest.mock("mongodb");

let dbManager;

describe("DataBaseManager Class", () => {
  beforeEach(() => {
    dbManager = new DataBaseManager();
  });

  test("MySql returns an instance of MySql", () => {
    const mysqlInstance = dbManager.MySql();
    expect(mysqlInstance).toBeInstanceOf(MySql);
  });

  test("MongoDb returns an instance of MongoDB", () => {
    const mongoDbInstance = dbManager.MongoDB();
    expect(mongoDbInstance).toBeInstanceOf(MongoDB);
  });
});

describe("MySql Class", () => {
  let mysql;

  beforeEach(() => {
    mysql = dbManager.MySql(); // Use the instance created in dbManager
  });

  test("getMySql returns the MySQL package", () => {
    const mysqlPackage = mysql.getMySql();
    expect(mysqlPackage).toBeDefined();
  });
});

describe('MongoDB', () => {
  let mongoDB;
  let mockMongoClient;
  let mockDb;

  beforeAll(() => {
    mockDb = {
      collection: jest.fn(() => ({
        find: jest.fn(() => ({
          toArray: jest.fn()
        })),
        insertOne: jest.fn(),
        updateOne: jest.fn(),
        deleteOne: jest.fn()
      }))
    };

    mockMongoClient = {
      db: jest.fn(() => mockDb),
      close: jest.fn()
    };

    const mockMongoDB = {
      MongoClient: {
        connect: jest.fn(() => mockMongoClient)
      }
    };

    mongoDB = new MongoDB(mockMongoDB);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should connect to the MongoDB database', async () => {
    await mongoDB.connect('mongodb://localhost:27017/mydatabase');
    expect(mongoDB.getClient()).toBeDefined();
    expect(mongoDB.getDb()).toBeDefined();
  });

  it('should perform a find operation', async () => {
    const query = { name: 'John' };
    await mongoDB.find('users', query);
    expect(mockDb.collection).toHaveBeenCalledWith('users');
    expect(mockDb.collection().find).toHaveBeenCalledWith(query, {});
    expect(mockDb.collection().find().toArray).toHaveBeenCalled(); // Added expectation
  });

  it('should perform an insert operation', async () => {
    const document = { name: 'John', age: 30 };
    await mongoDB.insert('users', document);
    expect(mockDb.collection).toHaveBeenCalledWith('users');
    expect(mockDb.collection().insertOne).toHaveBeenCalledWith(document, {});
  });

  it('should perform an update operation', async () => {
    const filter = { name: 'John' };
    const update = { $set: { age: 35 } };
    await mongoDB.update('users', filter, update);
    expect(mockDb.collection).toHaveBeenCalledWith('users');
    expect(mockDb.collection().updateOne).toHaveBeenCalledWith(filter, update, {});
  });

  it('should perform a delete operation', async () => {
    const filter = { name: 'John' };
    await mongoDB.delete('users', filter);
    expect(mockDb.collection).toHaveBeenCalledWith('users');
    expect(mockDb.collection().deleteOne).toHaveBeenCalledWith(filter, {});
  });

  it('should close the MongoDB connection', () => {
    mongoDB.close();
    expect(mockMongoClient.close).toHaveBeenCalled();
  });
});
