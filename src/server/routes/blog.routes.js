const express = require('express');
const config = require('../../conf/server.conf');
const request = require('request').defaults({timeout: config.server.reqTimeout});
const base = require('../base');
const router = express.Router();

// POST API
router.post('/', function (req, res) {
});
