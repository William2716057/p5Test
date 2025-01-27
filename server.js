'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    var extname = path.extname(filePath);
    var contentType = 'text/html';

    if (extname == '.js') {
        contentType = 'application/javascript';
    } else if (extname == '.css') {
        contentType = 'text/css';
    }

    fs.readFile(filePath, function (err, content) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });

}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});