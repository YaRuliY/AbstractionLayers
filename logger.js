'use strict';
var colors = require('colors/safe');
var fs = require('fs');
var cooker = require('./cooker.js');
var Looger = function () {};

var greyLog = function (p) { console.log(colors.grey(p))};
var redLog = function (p) { console.log(colors.red(p))};

Looger.prototype.logRequest = function(request) {
    greyLog('------------Begining------------');
    redLog(new Date().toString().substring(0,24));
    console.log(
        colors.green("Request Method: ") + request.method +
        colors.green("\nURL: ") + request.url +
        colors.green("\nIP: ") + request.connection.remoteAddress
    );
    var cookie = cooker.parseCookies(request);
    if (cookie != undefined) {
        console.log(colors.green("Cookies:"));
        console.log(cookie);
    }
    else console.log("Cookies: Client has`n cookies");
    greyLog('-------------Ending-------------');
};
module.exports = new Looger();