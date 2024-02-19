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
  const testCollection = "testCollection";

  beforeEach(async () => {
    mongodb = new MongoDB(require("mongodb")); // You may need to adjust the import based on your project structure
    const uri = "mongodb://localhost:27017/testdb"; // Adjust the URI based on your MongoDB configuration
    await mongodb.connect(uri,);
  });

  afterEach(() => {
    mongodb.close(true, false); // Close the connection without logging for clean test output
  });

  test("insert document into collection", async () => {
    const document = { name: "John", age: 25 };
    const insertedDocument = await mongodb.insert(testCollection, document);
    expect(insertedDocument).toMatchObject(document);
  });

  test("update document in collection", async () => {
    const filter = { name: "John" };
    const update = { $set: { age: 30 } };
    const result = await mongodb.update(testCollection, filter, update);
    expect(result.modifiedCount).toBe(1);
  });

  test("find documents in collection", async () => {
    const query = { age: { $gt: 18 } };
    const documents = await mongodb.find(testCollection, query);
    expect(documents).toHaveLength(1); // Assuming there's at least one document with age greater than 18
  });

  test("delete document from collection", async () => {
    const filter = { name: "John" };
    const result = await mongodb.delete(testCollection, filter);
    expect(result.deletedCount).toBe(1);
  });
});
