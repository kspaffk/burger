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
    eatBurger: function(burgerName, cb) {
        orm.updateOne('burgers', 'devoured', false, 'burger_name', burgerName, function(data) {
            cb(data);
        });
    }
}

module.exports = burger;