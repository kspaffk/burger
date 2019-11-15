const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'password1',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.log(`There was a problem connecting to the database! ${err.stack}`);
    }
    console.log(`Connected with id: ${connection.threadId}`);
});

module.exports = connection;