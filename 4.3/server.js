const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let roomname;

app.get('/*', (req, res) => {
  roomname = req.originalUrl.substr(1, req.originalUrl.length);
  if ((roomname != 'flood') && (roomname != 'support')) {
    roomname = 'default chat';
  }
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.join(roomname);
  socket.emit('welcome', roomname);
  socket.broadcast.emit('new user');

  socket.on('chat message', (msg) => {
    io.to(roomname).emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    io.to(roomname).emit('user left');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});