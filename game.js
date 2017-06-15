var game = {
  board:[],
  players:[],
  winPatterns: [],
  state: 0,
  winLine: [],
  checkGameOver: function() {

    if (game.winPatterns.some(function(pattern) {
      var result = pattern.every(cell => (cell.occupiedCellPlayer === pattern[0].occupiedCellPlayer) && cell.occupiedCellPlayer !== undefined)
      if (result) {
        game.winLine = pattern

      }
      return result
    })) {
      game.state = 1;
      return 1
    } else if (game.board.every(row => row.every(cell => cell.occupiedCellPlayer != undefined))){
      game.state = 1;
      return 2
    }
    return 0;

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
  },
  init: function(player1Name, player2Name, boardSize) {
    game.state = 0
    game.winPattern = []
    game.board = []
    game.winLine = []
    if (game.players.length == 0) {
      game.players = []
      if (!player1Name) {
        game.players.push(new Player("player1", 0))
      } else {
        game.players.push(new Player(player1Name, 0))
      }

      if (!player2Name) {
        game.players.push(new Player("player2", 1))
      } else {
        game.players.push(new Player(player2Name, 1))
      }
    }

    cellWidth = CELL_WIDTH_WIDE
    if (boardSize*cellWidth+1 > MAX_WIDTH) {
      cellWidth = CELL_WIDTH_NARROW
    } else {
      cellWidth = CELL_WIDTH_WIDE
    }

    game.board = initBoard(boardSize, boardSize, cellWidth)
    game.turn = 0
    game.winPatterns = game.determineWinPattern()
  }
}
