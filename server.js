var express = require('express');
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    game = require('./server/Game.js');
    Player = require('./server/Player.js');

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  socket.on('player joined', function (name) {
    player = new Player(name);
    // add the player to the game
    game.addPlayer(player);
    socket.emit('player logged in', player);
    io.sockets.emit('new player added', game.getPlayers());
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
