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

module.exports = router;