var arguments = process.argv.splice(2);
var httpProxy = require('http-proxy');

var addresses = [
    {
        host: 'localhost',
        port: 3001
    },
    {
        host: 'localhost',
        port: 3002
    },
    {
        host: 'localhost',
        port: 3003
    }
];

var i = 0;
httpProxy.createServer(function (req, res, proxy) {
    proxy.proxyRequest(req, res, addresses[i]);

    i = (i + 1) % addresses.length;
}).listen(arguments[0] || 8000, 'localhost');
