var $ = require('jquery'),
    socket = io();

function refreshPlayerList(players) {
  $('#players-list').empty();
  players.forEach(function(player) {
    $('#players-list').append($('<li>').text(player.name));
  });
}

function showPlayerHud(player) {
  // Set greeting
  $("#player-greeting").text("- Welcome, " + player.name);
  // Hide join form
  $("#player-join-form").hide();
  // Show leave button
  leaveButton.show();
  // Get the timer
  getCurrentTimer();
}

function getCurrentTimer() {

}

module.exports = function() {
  // clear the option to join the game, update the player list
  socket.on('player logged in', function(player) { showPlayerHud(player); });
  socket.on('new player added', function(players) { refreshPlayerList(players); });

  $("#player-join-form").submit(function(){
    socket.emit('player joined', $('#name').val());
    return false;
  });

}
