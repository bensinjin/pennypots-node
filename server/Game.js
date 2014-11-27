var Pot = require('./Pot.js'),
    Player = require('./Player.js');

function Game() {
  this.players = [];
  this.pot = new Pot;
};

Game.prototype.getPlayers = function() {
  return this.players;
}

Game.prototype.addPlayer = function(player) {
  if (this.isNewPlayer(player)) {
    this.players.push(player);
  }

  return this;
}

Game.prototype.isNewPlayer = function(player) {
  for (var i = 0; i < this.players.length; i ++) {
    if (player.name == this.players[i]) {
      return false;
    }
  }

  return true;
}

module.exports = new Game;
