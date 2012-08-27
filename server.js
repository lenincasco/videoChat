var http = require('http');
var server = http.createServer();
server.listen(8080);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	socket.on('newFrame', function(img){
		io.sockets.emit('setFrame', img);
	})
})