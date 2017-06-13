
var width = 100
var board

var game = {
  board:[],
  players:[],
  winPatterns: [],
  checkGameOver: function() {
    for (var i = 0; i <  game.board.length; i++) {
      for (var j = 0; j < game.board[0].length; j++) {
        
      }
    }
  },
  determineWinPattern: function() {
    var returnPattern = [];
    var winPattern = [];
    // row wins
    for (var i = 0; i <  game.board.length; i++) {
      winPattern = [];
      for (var j = 0; j < game.board[0].length; j++) {
        winPattern.push(game.board[i][j])
      }
      returnPattern.push(winPattern)
    }

    // col wins
    for (var j = 0; j < game.board[0].length; j++) {
      winPattern = []
      for (var i = 0; i <  game.board.length; i++) {
        winPattern.push(game.board[i][j])
      }
      returnPattern.push(winPattern)
    }

    // diag wins (no metter how big the board is, only two possibilities)
    winPattern = [];
    for (var i = 0; i <  game.board.length; i++) {
      for (var j = 0; j < game.board[0].length; j++) {
        if (i == j) {
          winPattern.push(game.board[i][j])
        }
      }
    }
    returnPattern.push(winPattern)

    winPattern = [];
    var lastIndex = game.board[0].length - 1
    for (var i = 0; i <  game.board.length; i++) {
      winPattern.push(game.board[i][lastIndex - i])
    }
    returnPattern.push(winPattern)
    return returnPattern
  }
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
game.winPatterns = game.determineWinPattern()

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
        if (!game.board[i][j].occupiedCellPlayer) {
          game.board[i][j].occupiedCellPlayer = game.players[game.turn % game.players.length]
          game.turn ++
        }
      }
    }
  }
}
