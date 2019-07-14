const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

const port = 3000;

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit("message", "welcome");
  socket.broadcast.emit('user connected');
  socket.on('sendMessage', (message) => {
    io.emit('message', message);
    console.log(message);
  });
  socket.on('disconnect', () => {
    io.emit('message', 'user disconnected');
  });
    
});

server.listen(port, () => {console.log("listening on port", port)});