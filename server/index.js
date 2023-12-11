const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost', // Your MySQL server's hostname
  user: 'root', // MySQL username
  password: '123456', // MySQL password
  database: 'rentitschema' // MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Perform operations (e.g., querying the database)
connection.query('SELECT * FROM user', (error, results, fields) => {
  if (error) throw error;
  // Process results here
  console.log('Query results:', results);
});

// Close the MySQL connection
connection.end((err) => {
  if (err) {
    console.error('Error closing the connection: ' + err.stack);
    return;
  }
  console.log('Connection closed');
});
