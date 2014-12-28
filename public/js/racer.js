function player (playerNum, keyBind, playerName) {
  this.image = "img#player" + playerNum;
  this.flag = "img#flag_p" + playerNum;

  this.win = false;
  this.playerNum = playerNum;
  this.playerName = playerName;

  this.keyBind = keyBind;
}

// controller

var positionToInteger = function (object) {
	return parseInt(
  $(object).css("margin-left").replace("px", "")
  );
};

player.prototype.move = function() {
  // move image px by px
  if ($GAME === true){
    $(this.image).animate({"margin-left": "+=1%"}, 100);
  }
};

player.prototype.playerGoal = function() {
  // when player touched flag. He won. 
  playerPosition = positionToInteger(this.image);
  flagPosition = positionToInteger(this.flag);
  if (playerPosition + 40 >= flagPosition){
    this.win = true;
    $GAME = false;
  }
};

player.prototype.congratsWinner = function() {
  // display who won
  if (this.win === true && $GAME === false) { 
  	$(".winner p").append(this.playerName +  " WIN!!");
  }
};

player.prototype.reset = function() {
   // get players back to start line
   $(this.image).css("margin-left", "0px");
 };

player.prototype.unbindKey = function () {
  if ($GAME === false) {
    Mousetrap.unbind(this.keyBind,'keyup');
  }
};

