//main app engine 
var express = require('express')
var path = require('path')
var logger = require('morgan')
var bodyParser = require('body-parser')
var app = express()
var routes = require('./routes.js');
var cors = require('cors')
const port = parseInt(4000);
const http = require('http');
var swaggerUi = require('swagger-ui-express');
    swaggerDocument = require('./swagger.json');

app.use(express.json());
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
const urlencoded = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
var data = {};

//view engine 
app.set('views', path.join(__dirname, 'views'))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
var router = express.Router();

//using swagger api
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/', router);



/*
Setting ejs as the base template
*/
app.set('view engine', 'ejs');
app.use('/', routes);
app.use(cors())

/*
Setting the static folder
*/

app.use(express.static('public'));

app.set('port', 4040);
const server = http.createServer(app);
server.listen(4040);

module.export = app;

