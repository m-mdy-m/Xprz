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

describe("MongoDB Class", () => {
  let mongodb;

  beforeEach(() => {
    mongodb = dbManager.MongoDB(); // Use the instance created in dbManager
  });

  test("getMongoDb returns the MongoDB package", () => {
    const mongoDbPackage = mongodb.getMongoDb();
    expect(mongoDbPackage).toBeDefined();
  });
});
