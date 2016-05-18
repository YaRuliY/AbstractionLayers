'use strict';
var fs = require('fs');
var Reader = function () {};

Reader.prototype.readFile = function(dir) {
    return fs.readFileSync(dir,'utf8');
};

module.exports = new Reader();