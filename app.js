const express = require('express');
const errorHandler = require('errorhandler');
const path = require('path');
const compression = require('compression');
const chalk = require('chalk');

const app = express();
//Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Static path
app.use(express.static(path.join(__dirname, 'public')));

//Controllers
const homeController = require('./controllers/home');

//Routes
//Home
app.get('/', homeController.home);
//404
app.get('*', homeController.notFound);
app.use(compression());

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'));
console.log('%s Express server listening on port %d in %s mode.',
    chalk.green('✓'), app.get('port'), app.get('env'));

module.exports = app;