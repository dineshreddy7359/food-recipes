const app = require('./src/server/app');
// const http = require('http');
// const ip = require('quick-local-ip');
// const dns = require('dns');
// const address = require('address');
const config = require('./config');

/* Create port and host */
var host = config.HOST || '127.0.0.1';
var port = normalizePort(config.PORT || '3000');
app.set('port', port);

process.on('uncaughtException', (err) => {
    console.log('uncaughtException', err);
});

/* Create HTTP server. */
var server = app.listen(port, host, () => {
    console.log('server running at http://' + host + ':' + port);
});

/* Listen on provided port, on all network interfaces. */
server.on('error', onError);
server.on('listening', onListening);

app.use((req, res, next) => {
    res.send('Express, Server Side API is Up and Working Fine!...');
});

// var server;
// dns.lookupService('127.0.0.1', 3000, (err, hostname, service) => {
//     require('dns').lookup(require('os').hostname(), (error, address, family) => {
//         console.log('address: '+address);
        
//     });
// });

/* Normalize a port into a number, string, or false. */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/* Event listener for HTTP server "error" event. */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    /* handle specific listen errors with friendly messages */
    switch (error.code) {
    case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
    default:
        throw error;
    }
}

/* Event listener for HTTP server "listening" event. */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    console.log('Listening on ' + bind);
    console.log('server url******** ' +JSON.stringify(addr));
}
