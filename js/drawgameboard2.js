/*
This function draws the green game canvas background. The code used is a
modified version of the code found at:
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
The specific code is found under the "A fillStyle example" heading. The live
sample gave me the idea of a pixelated grass-like background. The modified
version here fills in the game canvas in 10x10px squares, and applies a random
shade of green to each 10x10 square.
*/
function drawGameBackground(ctx) {
  for(var wdth = 0; wdth < 150; wdth++){
    for (var hght = 0; hght < 75; hght++) {
      ctx.fillStyle = "rgb(0," + Math.floor(200-(Math.random()*40)) + ", 0)";
      ctx.fillRect(wdth*10,hght*10,10,10);
    }
  }
}

// Adds the yellow hexagon spaces to the game board. By using a for loop, I was
// able to draw the entire row automatically by multiplying an "x" coordinate
// counter by the hex width (50px) and adding it to the original x pixel number.
function drawPathSpaces(ctx) {
  for (var x = 0; x < 21; x++) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "gold";
    ctx.moveTo(15 + (x*50),295);
    ctx.lineTo(15 + (x*50),320);
    ctx.lineTo(40.5 + (x*50),336);
    ctx.lineTo(65 + (x*50),320);
    ctx.lineTo(65 + (x*50),295);
    ctx.lineTo(40.5 + (x*50),279);
    ctx.lineTo(15 + (x*50),295);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
}

// draw a "token" as a purple square that tracks player one's movement along the
// game board. Using the same logic found in the drawPathSpaces function, another
// square is drawn at a new position on the canvas based on the player1Position
// variable. The old square does not move, which is fixed in the
// clearFormerPlayer1 code
function Player1Square(player1Position) {
  var canvas = document.getElementById("gameBoard");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "purple";
  ctx.fillStyle = "MediumPurple";
  ctx.moveTo(35 + (player1Position*50),305);
  ctx.lineTo(50 + (player1Position*50),305);
  ctx.lineTo(50 + (player1Position*50),290);
  ctx.lineTo(35 + (player1Position*50),290);
  ctx.lineTo(35 + (player1Position*50),305);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

// draws a tourquise token square for player two, using the same logic as the
// previous function
function Player2Square(player2Position) {
  var canvas = document.getElementById("gameBoard");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "Turquoise";
  ctx.fillStyle = "Turquoise";
  ctx.moveTo(30 + (player2Position*50),325);
  ctx.lineTo(45 + (player2Position*50),325);
  ctx.lineTo(45 + (player2Position*50),310);
  ctx.lineTo(30 + (player2Position*50),310);
  ctx.lineTo(30 + (player2Position*50),325);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

// I couldn't figure out a way to just move the player one square to another part
// of the canvas. This simply draws a gold square over the previous position of
// the player one square to provide the illusion of movement

function clearFormerPlayer1(player1Position) {
  var canvas = document.getElementById("gameBoard");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "gold";
  ctx.fillStyle = "gold";
  ctx.moveTo(34 + (player1Position*50),306);
  ctx.lineTo(51 + (player1Position*50),306);
  ctx.lineTo(51 + (player1Position*50),289);
  ctx.lineTo(34 + (player1Position*50),289);
  ctx.lineTo(34 + (player1Position*50),306);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

// same logic as above, but for player 2's square
function clearFormerPlayer2(player2Position) {
  var canvas = document.getElementById("gameBoard");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "gold";
  ctx.fillStyle = "gold";
  ctx.moveTo(29 + (player2Position*50),326);
  ctx.lineTo(46 + (player2Position*50),326);
  ctx.lineTo(46 + (player2Position*50),309);
  ctx.lineTo(29 + (player2Position*50),309);
  ctx.lineTo(29 + (player2Position*50),326);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

function drawStartText(ctx) {
  ctx.font = "20px Copperplate";
  ctx.fillStyle = "#8C001A";
  ctx.fillText("Start", 12, 275);
}

function drawFinishText(ctx) {
  ctx.font = "20px Copperplate";
  ctx.fillStyle = "#8C001A";
  ctx.fillText("Finish", 1005, 275);
}

// draws win text on the canvas area if player one wins
function drawPlayer1Wins() {
  var canvas = document.getElementById("gameBoard");
  var ctx = canvas.getContext("2d");
  ctx.font = "100px Copperplate";
  ctx.fillStyle = "MediumPurple";
  ctx.strokeStyle = "purple";
  ctx.fillText("Player One Wins!!!!", 45, 175);
  ctx.strokeText("Player One Wins!!!!", 45, 175);
}

function drawPlayer2Wins() {
  var canvas = document.getElementById("gameBoard");
  var ctx = canvas.getContext("2d");
  ctx.font = "100px Copperplate";
  ctx.fillStyle = "Turquoise";
  ctx.strokeStyle = "DarkTurquoise";
  ctx.fillText("Player Two Wins!!!!", 45, 175);
  ctx.strokeText("Player Two Wins!!!!", 45, 175);
}

// this just calls the draw game board functions; the player
// movement functions are not called here as they are used in the player
// position functions in the playeractions.js in order to have access to the
// playerposition variables. However, I created the functions in this file in
// order to keep all the "drawing" code in one place

function drawGameBoard() {
  var canvas = document.getElementById("gameBoard");
  var ctx = canvas.getContext("2d");
  // draws a pixelated green background to simulate grass
  drawGameBackground(ctx);
  drawPathSpaces(ctx);
  drawStartText(ctx);
  drawFinishText(ctx);
}
