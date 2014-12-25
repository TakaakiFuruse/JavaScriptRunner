// $("img#player1").animate({'margin-left': '+=0.5%'}, 100);
// $("img#player2").animate({'margin-left': '+=0.5%'}, 100);

// p-code

// player 1
// player 2

// push key -> move forward -> goal 

//initialize

function player (playerNum) {
  this.image = "img#player" + playerNum;
  this.win = false;
};


// controller
player.prototype.move = function() {
  // move image px by px
  $(this.image).animate({'margin-left': '+=0.5%'}, 100);
};

player.prototype.win = function() {
  // check win status
};

player.prototype.goal = function() {
  // display who won
};

player.prototype.reset = function(first_argument) {
  // get players back to start line
};


// view
$(document).ready(function() {
  
});