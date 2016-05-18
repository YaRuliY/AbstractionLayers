var yaruliy = {};

yaruliy.http = require('http');
yaruliy.logger = require('./logger.js');
yaruliy.configurator = require('./configurator.js');
yaruliy.cache = require('./cache');
yaruliy.handler = require('./handler');

yaruliy.http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {
        yaruliy.logger.logRequest(req);
        yaruliy.cache.writeResponseInCache(res);
        yaruliy.handler.handleClient(req, res);
    }
}).listen(yaruliy.configurator.port);