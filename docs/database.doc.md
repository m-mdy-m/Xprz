## `DataBaseManager`

Manages different types of databases and provides methods to create instances of specific database handlers.

### Constructor

- **Parameters:**
  - None

### Methods

#### `MySql()`

Creates and returns a new instance of MySql.

- **Returns:**
  - `MySql`: A new instance of MySql.

- **Usage:**
  ```javascript
  const dbManager =new Database();
  const mysql = dbManager.MySql();
  ```

- **Example:**
  ```javascript
  const dbManager =new Database();
  const mysql = dbManager.MySql();
  ```

#### `MongoDB()`

Creates and returns a new instance of MongoDB.

- **Returns:**
  - `MongoDb`: A new instance of MongoDB.

- **Usage:**
  ```javascript
  const dbManager =new Database();
  const mongodb = dbManager.MongoDb();
  ```

- **Example:**
  ```javascript
  const dbManager =new Database();
  const mongodb = dbManager.MongoDb();
  ```

---

## `MySql`

Manages MySQL database connections and provides methods for executing queries and transactions.

### Constructor

- **Parameters:**
  - `pkg` (object): The MySQL package.

### Methods

#### `getMySql()`

Get the MySQL package.

- **Returns:**
  - `object`: The MySQL package.

- **Usage:**
  ```javascript
  const {MySql } = new Database()
  const mysqlPackage = MySql.getMySql();
  ```

- **Example:**
  ```javascript
  const mysqlPackage = MySql.getMySql();
  ```

#### `connect(config, log = true, textLog = "Database Connected")`

Establish a connection to the MySQL database.

- **Parameters:**
  - `config` (object): The database configuration.
  - `log` (boolean, optional): Whether to log connection status. Default is `true`.
  - `textLog` (string, optional): The text to log when the connection is successful. Default is `"Database Connected"`.

- **Returns:**
  - `void`

- **Usage:**
  ```javascript
  const config = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
  };
  mysql.connect(config);
  ```

- **Example:**
  ```javascript
  mysql.connect(config);
  ```

#### `getConnection()`

Get the current database connection.

- **Returns:**
  - `object`: The database connection.

- **Usage:**
  ```javascript
  const connection = mysql.getConnection();
  ```

- **Example:**
  ```javascript
  const connection = mysql.getConnection();
  ```

#### `query(sql, values)`

Perform a SQL query.

- **Parameters:**
  - `sql` (string): The SQL query.
  - `values` (Array): The values to insert into the query.

- **Returns:**
  - `Promise`: A promise that resolves with the query results.

- **Usage:**
  ```javascript
  const result = await mysql.query('SELECT * FROM users');
  ```

- **Example:**
  ```javascript
  const result = await mysql.query('SELECT * FROM users');
  ```
#### `execute(sql)`

Execute a SQL query.

- **Parameters:**
  - `sql` (string): The SQL query to execute.

- **Returns:**
  - `Promise`: A promise that resolves with the query results.

- **Usage:**
  ```javascript
  const result = await mysql.execute('CREATE TABLE users (id INT, name VARCHAR(255))');
  ```

- **Example:**
  ```javascript
  const result = await mysql.execute('CREATE TABLE users (id INT, name VARCHAR(255))');
  ```

#### `transaction(queries)`

Perform a transaction with multiple queries.

- **Parameters:**
  - `queries` (Array): An array of query objects containing `sql` and `values`.

- **Returns:**
  - `Promise`: A promise that resolves if the transaction is successful.

- **Usage:**
  ```javascript
  const queries = [
    { sql: 'INSERT INTO users SET ?', values: { name: 'John' } },
    { sql: 'INSERT INTO addresses SET ?', values: { city: 'New York' } }
  ];
  await mysql.transaction(queries);
  ```

- **Example:**
  ```javascript
  await mysql.transaction(queries);
  ```

#### `endConnection(log = true, textLog = "Database connection ended")`

End the database connection.

- **Parameters:**
  - `log` (boolean, optional): Whether to log disconnection status. Default is `true`.
  - `textLog` (string, optional): The text to log when connection is closed. Default is `"Database connection ended"`.

- **Returns:**
  - `void`

- **Usage:**
  ```javascript
  mysql.endConnection();
  ```

- **Example:**
  ```javascript
  mysql.endConnection();
  ```

#### `Create(tableName, values)`

Insert a record into a table.

- **Parameters:**
  - `tableName` (string): The name of the table.
  - `values` (object): The values to insert into the table.

- **Returns:**
  - `Promise`: A promise that resolves with the query results.

- **Usage:**
  ```javascript
  await mysql.Create('users', { name: 'John', age: 30 });
  ```

- **Example:**
  ```javascript
  await mysql.Create('users', { name: 'John', age: 30 });
  ```

#### `read(tableName, condition, options = {})`

Read records from a table.

- **Parameters:**
  - `tableName` (string): The name of the table.
  - `condition` (object): The condition to filter records.
  - `options` (object, optional): Additional options like sorting, limiting, and offsetting.

- **Returns:**
  - `Promise`: A promise that resolves with the query results.

- **Usage:**
  ```javascript
  const users = await mysql.read('users', { id: 1 });
  ```

- **Example:**
  ```javascript
  const users = await mysql.read('users', { id: 1 });
  ```

#### `update(tableName, values, condition)`

Update records in a table.

- **Parameters:**
  - `tableName` (string): The name of the table.
  - `values` (object): The values to update.
  - `condition` (object): The condition to filter records.

- **Returns:**
  - `Promise`: A promise that resolves with the query results.

- **Usage:**
  ```javascript
  await mysql.update('users', { age: 25 }, { id: 1 });
  ```

- **Example:**
  ```javascript
  await mysql.update('users', { age: 25 }, { id: 1 });
  ```

#### `deleteQuery(tableName, condition)`

Delete records from a table.

- **Parameters:**
  - `tableName` (string): 
    The name of the table.
  - `condition` (object): The condition to filter records.

- **Returns:**
  - `Promise`: A promise that resolves with the query results.

- **Usage:**
  ```javascript
  await mysql.deleteQuery('users', { id: 1 });
  ```

- **Example:**
  ```javascript
  await mysql.deleteQuery('users', { id: 1 });
  ```
---

## `MongoDB`

Manages MongoDB database connections and provides methods for performing CRUD operations.

### Constructor

- **Parameters:**
  - `pkg` (object): The MongoDB package.

### Methods

#### `connectMongoDB(uri, options = {}, log = true, textLog = "MongoDB Connected")`

Connect to the MongoDB database.

- **Parameters:**
  - `uri` (string): The MongoDB connection URI.
  - `options` (object, optional): Additional connection options.
  - `log` (boolean, optional): Whether to log connection status. Default is `true`.
  - `textLog` (string, optional): The text to log when connection is successful. Default is `"MongoDB Connected"`.

- **Returns:**
  - `object`: The MongoDB client.

- **Usage:**
  ```javascript
  const uri = 'mongodb://localhost:27017/mydatabase';
  await mongodb.connect(uri);
  ```

#### `getMongoDb()`

Get the MongoDB package.

- **Returns:**
  - `object`: The MongoDB package.

- **Usage:**
  ```javascript
  const mongoPackage = mongodb.getMongoDb();
  ```

#### `getClient(maxAttempts = 10, delay = 100)`

Get the current MongoDB client.

- **Parameters:**
  - `maxAttempts` (number, optional): Maximum number of attempts to connect. Default is `10`.
  - `delay` (number, optional): Delay between connection attempts in milliseconds. Default is `100`.

- **Returns:**
  - `object`: The MongoDB client.

- **Usage:**
  ```javascript
  const client = await mongodb.getClient();
  ```

#### `getDb(maxAttempts = 10, delay = 100)`

Get the current MongoDB database.

- **Parameters:**
  - `maxAttempts` (number, optional): Maximum number of attempts to connect. Default is `10`.
  - `delay` (number, optional): Delay between connection attempts in milliseconds. Default is `100`.

- **Returns:**
  - `object`: The MongoDB database.

- **Usage:**
  ```javascript
  const db = await mongodb.getDb();
  ```

#### `find(collectionName, query, options = {})`

Perform a find operation on a MongoDB collection.

- **Parameters:**
  - `collectionName` (string): The name of the collection.
  - `query` (object): The query criteria.
  - `options` (object, optional): Additional options.

- **Returns:**
  - `Promise`: A promise that resolves with the query results.

- **Usage:**
  ```javascript
  const users = await mongodb.find('users', { age: { $gt: 18 } });
  ```

#### `insert(collectionName, document, options = {})`

Perform an insert operation on a MongoDB collection.

- **Parameters:**
  - `collectionName` (string): The name of the collection.
  - `document` (object): The document to insert.
  - `options` (object, optional): Additional options.

- **Returns:**
  - `Promise`: A promise that resolves with the inserted document.

- **Usage:**
  ```javascript
  const newUser = await mongodb.insert('users', { name: 'John', age: 30 });
  ```

#### `update(collectionName, filter, update, options = {})`

Perform an update operation on a MongoDB collection.

- **Parameters:**
  - `collectionName` (string): The name of the collection.
  - `filter` (object): The filter criteria.
  - `update` (object): The update object.
  - `options` (object, optional): Additional options.

- **Returns:**
  - `Promise`: A promise that resolves with the update result.

- **Usage:**
  ```javascript
  await mongodb.update('users', { name: 'John' }, { $set: { age: 35 } });
  ```

#### `delete(collectionName, filter, options = {})`

Perform a delete operation on a MongoDB collection.

- **Parameters:**
  - `collectionName` (string): The name of the collection.
  - `filter` (object): The filter criteria.
  - `options` (object, optional): Additional options.

- **Returns:**
  - `Promise`: A promise that resolves with the delete result.

- **Usage:**
  ```javascript
  await mongodb.delete('users', { name: 'John' });
  ```

#### `close(force = false, log = true, textLog = "MongoDB connection closed")`

Close the MongoDB connection.

- **Parameters:**
  - `force` (boolean, optional): Whether to force close the connection. Default is `false`.
  - `log` (boolean, optional): Whether to log disconnection status. Default is `true`.
  - `textLog` (string, optional): The text to log when connection is closed. Default is `"MongoDB connection closed"`.

- **Returns:**
  - `void`

- **Usage:**
  ```javascript
  mongodb.close();
  ```