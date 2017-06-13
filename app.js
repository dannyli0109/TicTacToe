
var width = 100
var board

var game = {
  board:[],
  players:[]
}

var initBoard = function(rows, cols) {
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


game.players.push(new Player("player1", 0))
game.players.push(new Player("player2", 1))
game.board = initBoard(3,3)
game.turn = 0

function setup() {
  createCanvas(301, 301)
}


function draw() {
  background(255)
  for (var i = 0; i <  game.board.length; i++) {
    for (var j = 0; j < game.board[0].length; j++) {
      game.board[i][j].display()
    }
  }
}

function mousePressed() {
  for (var i = 0; i <  game.board.length; i++) {
    for (var j = 0; j < game.board[0].length; j++) {
      if (game.board[i][j].contains(mouseX, mouseY)) {
        game.board[i][j].occupiedCellPlayer = game.players[game.turn % game.players.length]
        game.turn ++

      }
    }
  }
}
