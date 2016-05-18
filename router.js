'use strict';
var me = { name: 'yaruliy', age: 22 };
var files = require('./files.js');
var routing = {
    '/': '<h1>welcome to homepage</h1>',
    '/user': me,
    '/user/name': function() { return me.name; },
    '/user/age': function() { return me.age; },
    '/read/file': function () { return files.readFile('./person.json'); }
};
module.exports.routing = routing;