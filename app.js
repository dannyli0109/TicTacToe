
var cellWidth = 100;
var MAX_WIDTH = 501;
var MAX_HEIGHT = 501;
var ENTER_KEY_CODE = 13;
var CELL_WIDTH_NARROW = 60;
var CELL_WIDTH_WIDE = 100;
var WIN = 1;
var DRAW = 2;
var CONTINUE = 0;
var FINISHED = 1;


var board
var canvas
var logMessages = document.querySelectorAll(".log")
var playGameButton = document.querySelector("#playGameButton")
var playerNames = document.querySelectorAll(".playerName")
var boardSize = document.querySelector("#size")
var selectionContainer = document.querySelector(".selections")
var score = document.querySelectorAll(".score")

var initBoard = function(rows, cols, width) {
  var board = []
  for (var i = 0; i < rows; i++) {
    var rowArray = []
    for (var j = 0; j < cols; j++) {
      rowArray.push(new Cell(i, j, width))
    }
    board.push(rowArray)
  }
  return board
}

function updateScore() {
  score[0].textContent = game.players[0].name + ": " + game.players[0].score
  score[1].textContent = game.players[1].name + ": " + game.players[1].score
}


function setup() {

}

function initGame() {
  logMessages[0].textContent = ""
  logMessages[1].textContent = ""


  strokeWeight(2)
  var size = boardSize.selectedIndex + 3

  if (size*cellWidth+1 > MAX_WIDTH) {
    cellWidth = CELL_WIDTH_NARROW
  } else {
    cellWidth = CELL_WIDTH_WIDE

  }

  if (size*cellWidth+1 > MAX_HEIGHT) {
    cellWidth = CELL_WIDTH_NARROW
  } else {
    cellWidth = CELL_WIDTH_WIDE
  }
  game.init(playerNames[0].value, playerNames[1].value, size)

  updateScore()
  canvas = createCanvas(size*cellWidth+1, size*cellWidth+1)
  canvas.parent("gameArea")
  selectionContainer.className = "selectionHide"
}


function draw() {
  clear()
  for (var i = 0; i <  game.board.length; i++) {
    for (var j = 0; j < game.board[0].length; j++) {
      game.board[i][j].display()
    }
  }
}

function mousePressed() {
  if (game.state > CONTINUE){
    return
  }
  for (var i = 0; i <  game.board.length; i++) {
    for (var j = 0; j < game.board[0].length; j++) {
      if (game.board[i][j].contains(mouseX, mouseY)) {
        if (!game.board[i][j].occupiedCellPlayer) {
          game.board[i][j].occupiedCellPlayer = game.players[game.turn % game.players.length]

          if (game.checkGameOver() == 1) {
            game.players[game.turn % game.players.length].score++
            updateScore()

            logMessages[0].innerHTML = game.players[game.turn % game.players.length].name + " won!"
            logMessages[1].innerHTML = "Press Enter to restart"
            console.log(game.players[game.turn % game.players.length].name + " won!");
            return
          } else if (game.checkGameOver() == 2) {
            logMessages[0].innerHTML = "draw!"
            logMessages[1].innerHTML = "Press Enter to restart"
            return
          }
          game.turn++
        }
      }
    }
  }
}

function keyPressed() {
  if (game.state > CONTINUE){
    if (keyCode == ENTER_KEY_CODE) {
      initGame()
    }
  }
}

playGameButton.addEventListener("click", function() {
  initGame()
})
