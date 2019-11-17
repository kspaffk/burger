const connection = require("./connection");

var orm = {
    selectAll: function(table, cb) {
        var selectQuery = "SELECT * FROM ??";
        connection.query(selectQuery, [table], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },

    insertOne: function(table, colName, colValue, cb) {
        var insertQuery = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(insertQuery, [table, colName, colValue], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },

    updateOne: function(table, colName, colValue, colIdName, colId, cb) {
        var updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(
            updateQuery,
            [table, colName, colValue, colIdName, colId],
            function(err, data) {
                if (err) throw err;
                cb(data);
            });
    }
};

module.exports = orm;