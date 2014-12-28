function player (playerNum, keyBind, playerName) {
  this.image = "img#player" + playerNum;
  this.flag = "img#flag_p" + playerNum;

  this.win = false;
  this.playerNum = playerNum;
  this.playerName = playerName;

  this.keyBind = keyBind;
}

//start game, reset game
  var game = function (playerObj, keyBind) {
      Mousetrap.bind(keyBind, function() {
      playerObj.playerGoal();
      playerObj.unbindKey();
      playerObj.congratsWinner();
      playerObj.move();
    }, 'keyup');
  };

  var reset = function() {
   // get players back to start line
     $(player1).css("margin-left", "0px");
     $(player2).css("margin-left", "0px");
     $(".winner p").remove();
     $("table").remove();
     // here set timer equal 0
   };


  var linkToResetAndScore = function (argument) {
    linkToReset = "<a href=\"javascript\:reset\(\)\;\">Try again   |</a>"
    linkToScore = "<a href=\"javascript\:getScoreFromServer\(\)\;\">   Show Score</a>"
    return linkToReset + linkToScore
  }

  var getScoreFromServer = function () {
    $.ajax({
      url: '/racer/scores',
      type: 'GET',
    })
    .done(function(event) {
      $('.next_screen').before(event);
    });
  }

// game controller

  var positionToInteger = function (object) {
    //get player's position
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
    // display who won and save it to server
    if (this.win === true && $GAME === false) { 
    	$(".winner p").append(
                            this.playerName + 
                            " WIN!!<br>" +
                            linkToResetAndScore()
                            );
      $.ajax({
          url: '/racer/results',
          type: 'GET',
          data: {player1_name: $PLAYER1_NAME, player2_name: $PLAYER2_NAME, winner_name: this.playerName, raptime: ''},
        })
        .done(function() {
        });
    }  
  };

  player.prototype.unbindKey = function () {
    if ($GAME === false) {
      Mousetrap.unbind(this.keyBind,'keyup');
    }
  };

