var Player = function(name, index) {
  this.name = name
  this.currentTurn = false
  this.index = index
}

Player.prototype.move = function(i, j) {
  game.gameBoard[i][j].occupied = this
}

Player.prototype.display = function(x, y, width) {
  ellipse(x + width /2, y + width /2, width /2,width/ 2)
}
