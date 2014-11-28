var express = require('express');
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    game = require('./server/Game.js'),
    Player = require('./server/Player.js');

app.use(express.static(__dirname + '/public'));

//Socket io
io.on('connection', function(socket){
  socket.on('player joined', function (name) {
    player = new Player(name);
    // add the player to the game
    game.addPlayer(player);
    socket.emit('player logged in', player);
    io.sockets.emit('new player added', game.getPlayers());
  });
});

//Routes

server.listen(3000, function(){
  console.log('listening on *:3000');
});
