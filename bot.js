console.log('The bot is starting');

//import the package/library twit and config
var Twit = require('twit');
var config = require('./config');

//authenticate with OAuth
var T = new Twit(config);
