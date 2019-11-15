const connection = require('./connection');

connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connected on ${connection.threadId}!`);
});

function selectAll() {
    var selectQuery = 'SELECT * FROM burgers';
    connection.query(selectQuery, function(err, results) {
        if (err) throw err;
        console.log(results);
    });
}

function insertOne() {

}

function updateOne() {

}