var Player = function(name, index) {
  this.name = name
  this.index = index
}

Player.prototype.move = function(i, j) {
  game.gameBoard[i][j].occupied = this
}

Player.prototype.placeNode = function(x, y, width) {
  if (this.index == 0) {
    ellipse(x + width *0.5, y + width *0.5, width *0.5,width *0.5)
  } else if (this.index == 1) {
    line(x + width * 0.25, y + width* 0.25, x + width * 0.75, y + width * 0.75)
    line(x + width * 0.25, y + width* 0.25, x + width * 0.75, y + width * 0.75)
    line(x + width * 0.25, y + width* 0.75, x + width * 0.75, y + width* 0.25)
  }
}
