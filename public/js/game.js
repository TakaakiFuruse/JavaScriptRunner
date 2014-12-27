var game = function (playerObj, keyBind) {
    Mousetrap.bind(keyBind, function() {
    playerObj.playerGoal();
    playerObj.unbindKey();
    playerObj.congratsWinner();
    playerObj.move();
  }, 'keyup');
};

$(document).ready(function() {

// return false if one player goals.

var player1 = new player(1, "f", $PLAYER1_NAME);
var player2 = new player(2, "j", $PLAYER2_NAME);

game(player1, player1.keyBind);
game(player2, player2.keyBind);

});
