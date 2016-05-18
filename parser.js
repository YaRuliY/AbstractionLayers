var parse = function (text) {
    return JSON.parse(text);
};

var stringify = function (obj) {
    return require('util').inspect(obj);
};

module.exports.parse = parse;
module.exports.stringify = stringify;