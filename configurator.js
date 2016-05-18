'use strict';
var files = require('./files.js');
var parser = require('./parser.js');
var portNumber;

var obj = parser.parse(files.readFile('./config.json'));
if (typeof obj.port === 'number') portNumber = obj.port;

module.exports = {
    port: portNumber
};