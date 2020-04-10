const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat-message', (message) => {    
    io.emit('chat-message', message);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});