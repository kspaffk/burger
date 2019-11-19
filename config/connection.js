require('dotenv').config();
const mysql = require('mysql');
const keys = require('../keys');

const connection = mysql.createConnection({
    host: 'localhost',
    user: keys.mysql.user,
    port: 3306,
    password: keys.mysql.pass,
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.log(`There was a problem connecting to the database! ${err.stack}`);
    }
    console.log(`Connected with id: ${connection.threadId}`);
});

module.exports = connection;