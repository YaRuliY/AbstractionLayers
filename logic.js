'use strict';
var files = require('./files.js');
var Logic = function () {};

Logic.prototype.work = function () {
    var obj = JSON.parse(files.readFile('./person.json'));
    obj.birth = new Date(obj.birth);
    var difference = new Date() - obj.birth;
    obj.age = Math.floor(difference / 31536000000);
    delete obj.birth;
    return obj.age.toString();
};

module.exports = new Logic();