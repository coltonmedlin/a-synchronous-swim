const queue = require('./js/messageQueue.js');

const keypressHandler = require('./js/keypressHandler');
keypressHandler.initialize(message => queue.enqueue(message));

const httpHandler = require('./js/httpHandler');


const http = require('http');
const server = http.createServer(httpHandler.router);

const directionHandler = require('./js/directionHandler.js');
const backgroundHandler = require('./js/backgroundHandler.js');
directionHandler.init();

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
