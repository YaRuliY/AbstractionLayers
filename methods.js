'use strict';
var methods = {
    'GET': function (req, res) {
        res.write('url is ' + req.url + '<br>');
        res.write('method is GET<br>');
    },
    'POST': function (req, res) {
        res.write('url is ' + req.url + '<br>');
        res.write('method is POST<br>');
    }
};
module.exports.methods = methods;