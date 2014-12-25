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

var positionToInteger = function (object) {
	return parseInt(
  $(object).css("margin-left").replace("px", "")
  );
}

player.prototype.playerGoal = function() {
  // when player touched flag. He won. 
  playerPosition = positionToInteger(this.image);
  flagPosition = positionToInteger(this.flag);
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


