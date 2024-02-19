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
// Mock the mongodb package
jest.mock('mongodb', () => {
  const mockMongoClient = {
    db: jest.fn(() => ({
      collection: jest.fn(() => ({
        find: jest.fn(),
        insertOne: jest.fn(),
        updateOne: jest.fn(),
        deleteOne: jest.fn()
      }))
    })),
    close: jest.fn()
  };

  return {
    MongoClient: {
      connect: jest.fn(() => mockMongoClient)
    }
  };
});
// Mock console.log
console.log = jest.fn();

describe('MongoDB class', () => {
  let mongodb;

  beforeAll(() => {
    // Initialize MongoDB instance
    mongodb = new MongoDB(require('mongodb'));
  });

  afterEach(() => {
    // Reset mock function calls
    jest.clearAllMocks();
  });

  describe('connect method', () => {
    it('should connect to the MongoDB database', async () => {
      const uri = 'mongodb://localhost:27017/mydatabase';
      await mongodb.connect(uri);
      expect(mongodb.mongoClient).toBeDefined();
      expect(mongodb.db).toBeDefined();
      expect(mongodb.mongodb.MongoClient.connect).toHaveBeenCalledWith(uri, {});
      expect(console.log).toHaveBeenCalledWith('MongoDB Connected');
    });

    it('should throw an error if connection fails', async () => {
      // Mocking MongoDB connection failure
      mongodb.mongodb.MongoClient.connect.mockImplementationOnce(() => {
        throw new Error('Connection failed');
      });

      const uri = 'invalid-uri';
      await expect(mongodb.connect(uri)).rejects.toThrow();
      expect(console.log).not.toHaveBeenCalledWith('MongoDB Connected');
    });
  });
});