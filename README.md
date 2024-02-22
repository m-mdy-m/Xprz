# XPress

XPress is a powerful and versatile Node.js framework that simplifies web development tasks, offering a wide range of features and utilities. Whether you're building a simple REST API or a complex web application, XPress provides everything you need to streamline your development process and create robust, scalable solutions.

## Features

### Express Application Management

XPress provides a convenient `App` class for managing your Express application's lifecycle. Initialize, launch, and manage your Express app effortlessly.

```javascript
const XPress = require('xpress');
const { App } = new XPress();

// Initialize the Express application
const { initApp, listen, launch } = new App();
initApp();

// Start the server
listen(3000);
// Or
launch();
```

### Database Integration

Easily integrate popular databases like MongoDB and MySQL into your XPress application for seamless data storage and retrieval.

#### MongoDB

```javascript
const { MongoDB } = new XPress();
const { connectMongoDB, find, insert, update, delDoc, getClient, getDb, getMongoDb } = MongoDB();

// Connect to MongoDB
connectMongoDB('mongodb://localhost:27017/mydatabase');

// Perform database operations
// Example: find documents
find('collectionName', { /* query */ });

// Example: insert documents
insert('collectionName', { /* document */ });

// Example: update documents
update('collectionName', { /* query */ }, { /* update */ });

// Example: delete documents
delDoc('collectionName', { /* query */ });
```

#### MySQL

```javascript
const { MySql } = new XPress();
const { connect, read, execute, query, insert, update, deleteQuery, transaction, endConnection, getConnection } = MySql();

// Connect to MySQL
connect({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

// Perform database operations
// Example: execute SQL query
execute('SELECT * FROM tableName');

// Example: query with parameters
query('SELECT * FROM tableName WHERE id = ?', [1]);

// Example: insert data
insert('tableName', { /* data */ });

// Example: update data
update('tableName', { /* update */ }, { /* condition */ });

// Example: delete data
deleteQuery('tableName', { /* condition */ });
```

### HTTP Method Handling

Effortlessly handle various HTTP methods with built-in methods for GET, POST, PUT, DELETE, and more.

```javascript
const { HttpMethod } = new XPress();
const { GET, POST, PUT, DELETE } = HttpMethod();

// Define routes
GET('/api/users', (req, res) => {
  // Handle GET request for '/api/users'
});

POST('/api/users', (req, res) => {
  // Handle POST request for '/api/users'
});
```

### Middleware Management

Attach middleware functions to your application easily for handling requests and responses.

```javascript
const { App } = new XPress();
const { use, useJsonBody, cors, bodyParser, session } = new App();

// Enable CORS
use(cors());

// Parse JSON and URL-encoded request bodies
useJsonBody();

// Set up session middleware
use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
```

### Real-world Usage Examples

#### Blogging Platform

```javascript
const { App } = require('xpress');

// Initialize Express app
const { initApp, loadRoutes, listen } = new App();
initApp();

// Load routes from 'blogRoutes' directory
loadRoutes('blogRoutes');

// Start server
listen(3000);
```

#### E-commerce Website

```javascript
const { App, RouteManager } = require('xpress');

// Initialize Express app
const { initApp, listen } = new App();
const router = new RouteManager();

// Define routes for product management
router.group('/products', (r) => {
  r.get('/', (req, res) => {
    // Handle GET request for '/products'
  });

  r.post('/', (req, res) => {
    // Handle POST request for '/products'
  });
});

// Start server
listen(3000);
```

#### RESTful API

```javascript
const { App, RouteManager } = require('xpress');

// Initialize Express app
const { initApp, listen } = new App();
const router = new RouteManager();

// Define routes for user management
router.group('/api/users', (r) => {
  r.get('/', (req, res) => {
    // Handle GET request for '/api/users'
  });

  r.post('/', (req, res) => {
    // Handle POST request for '/api/users'
  });
});

// Start server
listen(3000);
```

## Installation

To install XPress and start using it in your project, simply run:

```
npm install xpress
```

## Documentation

For detailed documentation on how to use XPress and its various features, please refer to the documents provided in the `doc` folder of the package. These documents offer comprehensive explanations, usage examples, and best practices to help you make the most out of XPress in your projects.

## Feedback and Bug Reporting

We welcome your feedback, suggestions, and bug reports. If you encounter any issues or have ideas for improvements, please feel free to [open an issue](https://github.com/your-package-repo/issues).

## License

XPress is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Get Started

Ready to start building powerful web applications with XPress? Check out our documentation and start exploring the possibilities today!