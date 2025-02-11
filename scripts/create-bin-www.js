const fs = require('fs');
const path = require('path');
const binDirPath = path.join(__dirname, '..', 'bin'); // bin 폴더 경로
const binWWWPath = path.join(binDirPath, 'www'); // bin/www 파일 경로

const binWWWContent = `#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('expressjs_one:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

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

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
		}

		var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port

		// handle specific listen errors with friendly messages
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

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string'
	? 'pipe ' + addr
	: 'port ' + addr.port;
	debug('Listening on ' + bind);
}
`;

// bin 폴더가 없는 경우 생성
if (!fs.existsSync(binDirPath)) {
	fs.mkdirSync(binDirPath); // bin 폴더 생성
	console.log('bin directory created successfully.');
}

// bin/www 파일이 없는 경우에만 생성
if (!fs.existsSync(binWWWPath)) {
	fs.writeFileSync(binWWWPath, binWWWContent);
	fs.chmodSync(binWWWPath, 0o755); // 실행 권한 추가 (rwxr-xr-x)
	console.log('bin/www file created successfully.');
} else {
	console.log('bin/www file already exists.');
}