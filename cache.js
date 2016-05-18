'use strict';
var parser = require('./parser.js');
var fs = require('fs');
var Cache = function () {};

Cache.prototype.writeResponseInCache = function (res) {
    var writeStream = fs.createWriteStream('./cache.txt');
    writeStream.write(parser.stringify(res));
};

Cache.prototype.writeUserInfo = function (id) {
    var wStream = fs.createWriteStream('./users_id.txt',{
        flags: 'w+',
        autoClose: true
    });
    wStream.write(id + '\n');
};

Cache.prototype.getCache = function () {
    return fs.readFileSync('./users_id.txt','utf8');
};

module.exports = new Cache();