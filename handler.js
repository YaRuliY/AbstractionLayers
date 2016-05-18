'use strict';
var Handler = function () {};
var files = require('./files.js');
var router = require('./router.js');
var array = require('./types.js').array;
var methods = require('./methods').methods;
var cache = require('./cache');
var cooker = require('./cooker');
var logic = require('./logic');

var randomInt = function (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
};

var handleResponse = function (res, id){
    res.writeHead(200, {
        'Set-Cookie': 'UserID='+id+';',
        'Content-Type': 'text/html'
    });
    cache.writeUserInfo(id);
};

Handler.prototype.handleClient = function (req, res){
    var data = router.routing[req.url],
        result = array[typeof(data)](data, req, res);

    if(cache.getCache().indexOf(cooker.parseCookies(req)['UserID']) > -1)
        handleResponse(res, cooker.parseCookies(req)['UserID']);
    else {
        var user_id = randomInt(1,1000);
        handleResponse(res,user_id);
    }

    res.write('<h1>Welcome</h1>');
    methods[req.method](req, res);

    var resource = logic.work();
    res.write(resource + '<br>');

    res.end(result);
};

module.exports = new Handler();