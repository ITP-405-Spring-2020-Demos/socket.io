const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let totalUsers = 0;

io.on('connection', function(socket) {
  totalUsers++;
  io.emit('user-joined', totalUsers);

  socket.on('chat-message', (message) => {    
    io.emit('chat-message', message);
  });

  socket.on('disconnect', () => {
    totalUsers--;
    io.emit('user-joined', totalUsers);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});