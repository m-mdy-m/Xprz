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

describe('MongoDB Class Tests', () => {
  let mongodb;

  // Replace the connection URI with your actual MongoDB connection string
  const mongoURI = 'mongodb://localhost:27017/testdatabase';

  beforeAll(async () => {
    mongodb = new MongoDB(require('mongodb'));
    await mongodb.connect(mongoURI); // Connect without logging for tests
  });

  afterAll(() => {
    mongodb.close();
  });

  describe('Connection and Access', () => {
    test('Should connect to MongoDB', async () => {
      expect(mongodb.getClient()).toBeDefined();
    });

    test('Should get the MongoDB package', () => {
      expect(mongodb.getMongoDb()).toBeDefined();
    });

    test('Should get the MongoDB database', async () => {
      const db = await mongodb.getDb();
      expect(db).toBeDefined();
    });
  });

  describe('CRUD Operations', () => {
    const testCollection = 'testCollection';
    const testDocument = { name: 'TestUser', age: 25 };

    test('Should insert a document', async () => {
      const result = await mongodb.insert(testCollection, testDocument);
      expect(result.result.ok).toBe(1);
    });

    test('Should find a document', async () => {
      const result = await mongodb.find(testCollection, { name: 'TestUser' });
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name).toBe('TestUser');
    });

    test('Should update a document', async () => {
      const updateResult = await mongodb.update(
        testCollection,
        { name: 'TestUser' },
        { $set: { age: 26 } }
      );
      expect(updateResult.result.ok).toBe(1);

      const findResult = await mongodb.find(testCollection, { name: 'TestUser' });
      expect(findResult[0].age).toBe(26);
    });

    test('Should delete a document', async () => {
      const deleteResult = await mongodb.delete(testCollection, { name: 'TestUser' });
      expect(deleteResult.result.ok).toBe(1);

      const findResult = await mongodb.find(testCollection, { name: 'TestUser' });
      expect(findResult.length).toBe(0);
    });
  });
});