
// simulates a D10 die roll. Uses math.floor in order to access position 0 in
// array.
function dTenTime (){
  var d10Die = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var resultNumber1 = 0;
  //resultNumber = d10Die[Math.floor(Math.random()*d10Die.length)]; <-- saving for reference
  resultNumber1 = d10Die[Math.floor(Math.random() * 10)];

  return resultNumber1;
}

function Main(){
  var movePlayerBackward = document.getElementById("moveBackward");
  var movePlayerForward = document.getElementById("moveForward");
  var player1Position = 0;
  var player2Position = 0;
  var player1PositionOutput = document.getElementById("player1PositionOutput");
  var player2PositionOutput = document.getElementById("player2PositionOutput");
  var player1NotifyOutput = document.getElementById("player1NotifyOutput");
  var player2NotifyOutput = document.getElementById("player2NotifyOutput");
  var player1Notify = "Player One's Turn";
  var player2Notify = "Player Two's Turn";
  var player1Turn = true;
  var resultNumber = 0;
  var rollForm = document.getElementById("rollD10Die");
  var rollResultOutput = document.getElementById("rollResultOutput");
  var winPosition = 20;

  // draw the game board
  drawGameBoard();

  // sets the player squares at the beginning of the game board using the
  // initialize values of 0 declared above.
  Player1Square(player1Position);
  Player2Square(player2Position);

  // initialize player position outputs
  player1PositionOutput.innerHTML = player1Position;
  player2PositionOutput.innerHTML = player2Position;
  //outputs text to remind players whose turn it is
  player1NotifyOutput.innerHTML = player1Notify;
  player2NotifyOutput.innerHTML = "";

  // event listener for clicking roll die button
  rollForm.addEventListener("submit", function(rollD10) {
    rollD10.preventDefault();
    // call the roll the die function, and set the result to a variable I can use
    resultNumber = dTenTime();
    // display result
    rollResultOutput.innerHTML = resultNumber;
  });

  movePlayerForward.addEventListener("submit", function(forward) {
    forward.preventDefault();
    if(player1Turn){
      // clear the former position of player 1
      clearFormerPlayer1(player1Position);
      // add result to the player position
      player1Position = player1Position + resultNumber;
      // prevents the play from move forward beyond the finish space
      if (player1Position > winPosition) {
        player1Position = winPosition;
      }
      // update player one square position
      Player1Square(player1Position);
      // display the updated player position
      player1PositionOutput.innerHTML = player1Position;
      // if player one hasn't won, make it player two's turn
      if (player1Position < winPosition) {
        player1Turn = false;
        player1NotifyOutput.innerHTML = "";
        player2NotifyOutput.innerHTML = player2Notify;
      } else {
        drawPlayer1Wins();
      }
    } else {
      // clear former position of player 2
      clearFormerPlayer2(player2Position);
      // calculate the player position
      player2Position = player2Position + resultNumber;
      // prevents the play from move forward beyond the finish space
      if (player2Position > winPosition) {
        player2Position = winPosition;
      }
      // update player two square position
      Player2Square(player2Position);
      // display the updated player position
      player2PositionOutput.innerHTML = player2Position;
      // if player two hasn't won make it player one's turn again
      if (player2Position < winPosition) {
        player1Turn = true;
        player1NotifyOutput.innerHTML = player1Notify;
        player2NotifyOutput.innerHTML = "";
      } else {
        drawPlayer2Wins();
      }
    }
  });

  movePlayerBackward.addEventListener("submit", function(backward) {
    backward.preventDefault();
    if (player1Turn) {
      // clear the former position of player 1
      clearFormerPlayer1(player1Position);
      // add result to the player position
      player1Position = player1Position - resultNumber;
      // prevents player from moving backward farther than the start space
      if (player1Position < 0) {
        player1Position = 0;
      }
      // update player one square position
      Player1Square(player1Position);
      // display the updated player position
      player1PositionOutput.innerHTML = player1Position;
      // if player one hasn't won, make it player two's turn
      if (player1Position < winPosition) {
        player1Turn = false;
        player1NotifyOutput.innerHTML = "";
        player2NotifyOutput.innerHTML = player2Notify;
      } else {
        drawPlayer1Wins();
      }
    } else {
      // clear former position of player 2
      clearFormerPlayer2(player2Position);
      // calculate the player position
      player2Position = player2Position - resultNumber;
      // prevents player from moving backward farther than the start space
      if (player2Position < 0) {
        player2Position = 0;
      }
      // update player two square position
      Player2Square(player2Position);
      // display the updated player position
      player2PositionOutput.innerHTML = player2Position;
      // if player two hasn't won make it player one's turn again
      if (player2Position < winPosition) {
        player1Turn = true;
        player1NotifyOutput.innerHTML = player1Notify;
        player2NotifyOutput.innerHTML = "";
      } else {
        drawPlayer2Wins();
      }
    }
  });
}

Main();
