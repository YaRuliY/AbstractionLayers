var http = require('http'), fs = require('fs');
var me = { name: 'yaruliy', age: 22 };

var routing = {
  '/': '<h1>welcome to homepage</h1>',
  '/user': me,
  '/user/name': function() { return me.name; },
  '/user/age': function() { return me.age; },
  '/read/file': function () { return readFile('./person.json'); }
};

var types = {
  object: function(o) { return JSON.stringify(o); },
  string: function(s) { return s; },
  undefined: function() { return 'not found'; },
  function: function(fn, req, res) { return fn(req, res) + ''; }
};

http.createServer(function (req, res) {
    console.log([new Date().toISOString(),
                req.method,
                req.url].join('  '),
                req.connection.remoteAddress);
    var data = routing[req.url],
        result = types[typeof(data)](data, req, res);
    res.end(result);
}).listen(80);

var readFile = function(dir) {
    return fs.readFileSync(dir,'utf8');
};