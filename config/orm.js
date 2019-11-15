const connection = require("./connection");

var orm = {
    selectAll: function(table) {
        var selectQuery = "SELECT * FROM ??";
        connection.query(selectQuery, [table], function(err, results) {
            if (err) throw err;
            console.log(results);
        });
    },

    insertOne: function(table, colName, colValue) {
        var insertQuery = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(insertQuery, [table, colName, colValue], function(
            err
        ) {
            if (err) throw err;
        });
    },

    updateOne: function(table, colName, colValue, colIdName, colId) {
        var updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(
            updateQuery,
            [table, colName, colValue, colIdName, colId],
            function(err) {
                if (err) throw err;
            }
        );
    }
};

module.exports = orm;