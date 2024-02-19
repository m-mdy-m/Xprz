// testDataBaseManager.js

const DataBaseManager = require('../../src/manager/databaseManager');
const MySql = require('../../src/handler/database/MySql');
const MongoDB = require('../../src/handler/database/MongoDB');

jest.mock('mysql');
jest.mock('mongodb');

describe('DataBaseManager Class', () => {
  let dbManager;

  beforeEach(() => {
    dbManager = new DataBaseManager();
  });

  test('MySql returns an instance of MySql', () => {
    const mysqlInstance = dbManager.MySql();
    expect(mysqlInstance).toBeInstanceOf(MySql);
  });

  test('MongoDb returns an instance of MongoDB', () => {
    const mongoDbInstance = dbManager.MongoDb();
    expect(mongoDbInstance).toBeInstanceOf(MongoDB);
  });
});

describe('MySql Class', () => {
  let mysql;

  beforeEach(() => {
    mysql = new MySql(); 
  });

  test('getMySql returns the MySQL package', () => {
    const mysqlPackage = mysql.getMySql();
    expect(mysqlPackage).toBeDefined();
  });

  // Add more tests for other methods in the MySql class
});
describe('MongoDB Class', () => {
  let mongodb;

  beforeEach(() => {
    mongodb = new MongoDB(); 
  });

  test('getMongoDb returns the MongoDB package', () => {
    const mongoDbPackage = mongodb.getMongoDb();
    expect(mongoDbPackage).toBeDefined();
  });
});
