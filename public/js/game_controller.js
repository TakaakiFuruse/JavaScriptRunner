var unbindKey = function () {
  if (player1.win === true || player2.win === true) {
  Mousetrap.unbind("f");
  Mousetrap.unbind("j");
  }
};

var game = function (playerName, keyToBind) {
    Mousetrap.bind(keyToBind, function() {
    playerName.move();
    playerName.playerGoal();
    unbindKey();
    playerName.congratsWinner();
  });
};