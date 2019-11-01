'use strict';

var AlexaServer = require( 'alexa-app-server' );

var server = new AlexaServer( {
 httpsEnabled: false,
 port: process.env.PORT || 8080
} );

server.start();
