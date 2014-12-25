// $("img#player1").animate({'margin-left': '+=0.5%'}, 100);
// $("img#player2").animate({'margin-left': '+=0.5%'}, 100);

// p-c

// player 1
// player 2

// push key -> move forward -> goal

//initialize

function player (playerNum) {
  this.image = "img#player" + playerNum;
  this.flag = "img#flag_p" + playerNum;
  this.win = false;
  this.playerNum = playerNum;
}

// controller
player.prototype.move = function() {
  // move image px by px
  $(this.image).animate({"margin-left": "+=1%"}, 100);
};

player.prototype.playerGoal = function() {
  // when player touched flag. He won. 
  playerPosition = $(this.image).css("margin-left");
  flagPosition = $(this.flag).css("margin-left");
  if (playerPosition >= flagPosition){this.win = true;}
};

player.prototype.congratsWinner = function() {
  // display who won
  if (this.win === true) { 
  	$(".winner p").append("Player " + this.playerNum +  " WIN!!");
  }
};

player.prototype.reset = function() {
   // get players back to start line
   $(this.image).css("margin-left", "0px");
 };


// view