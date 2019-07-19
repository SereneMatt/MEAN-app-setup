const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

const config = require('./conf/app.conf.json');
const router = require('./src/server/router');

// connect to DB
const mongoose = require('mongoose');
const db = mongoose.connection

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/MEAN-app-setup'));

// slash(/) represents home page
app.get('/', (req, res) => res.sendFile(path.join(__dirname)));

// Routes
const weathersController = require('./src/server/routes/weather.routes');

// API
app.use(config.app.urlNamespace + '/api', router);

const server = http.createServer(app);
server.listen(port, () => console.log('Server is running on 3000...'));
