const orm = require('../config/orm');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(data) {
            cb(data);
        });
    },
    addBurger: function(burgerName, cb) {
        orm.insertOne('burgers', 'burger_name', burgerName, function(data) {
            cb(data);
        });
    },
    eatBurger: function(burgerID, cb) {
        orm.updateOne('burgers', 'devoured', true, 'id', burgerID, function(data) {
            cb(data);
        });
    }
}

module.exports = burger;