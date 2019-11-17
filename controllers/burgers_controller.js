const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var burgersObj = {
            burgers: data
        };
        res.render('index', burgersObj);
    });
});

router.post('/api/burger', function(req, res) {
    burger.addBurger(req.body.name, function(data) {
        res.json(data);
    });
});

router.put('/api/burger/:id', function(req, res) {
    burger.eatBurger(req.params.id, function(data) {
        res.json(data);
    });
});

module.exports = router;