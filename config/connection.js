const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password1',
    database: 'burgers_db'
});

module.exports = connection;