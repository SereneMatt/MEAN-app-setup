const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./src/server/router');
const morgan = require('morgan');
const methodOverride = require('method-override');

// configure database
// mongoose.connect('');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/dist'));
app.use(morgan('dev'));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// const config = require('./conf/app.conf.json');


const port = process.env.PORT || 3000;


// // slash(/) represents home page
// app.get('/', (req, res) => res.sendFile(path.join(__dirname)));

// // Routes
// const weathersController = require('./src/server/routes/weather.routes');

// // API
// app.use('locslhost:4200/' + '/api', router);

// const server = http.createServer(app);
app.listen(port, () => console.log('Server is running on 3000...'));
