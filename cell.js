var Cell = function(i, j, width) {
  this.i = i
  this.j = j
  this.x = i * width
  this.y = j * width
  this.width = width
  this.occupiedCellPlayer
}

Cell.prototype.display = function() {

  if ((this.i + this.j) % 2 == 1) {
    noFill()
  } else {
    fill(201, 100)
  }
  stroke(0)
  strokeWeight(2)
  rect(this.x,this.y,this.width,this.width)
  if (this.occupiedCellPlayer) {
    this.occupiedCellPlayer.placeNode(this.x, this.y, this.width)
  }

  if (game.winLine.length > 0) {
    strokeWeight(6)
    noFill()
    stroke(255,0,0)
    line(game.winLine[0].x + game.winLine[0].width/2,
      game.winLine[0].y + game.winLine[0].width/2,
      game.winLine[game.winLine.length -1].x + game.winLine[game.winLine.length -1].width/2,
      game.winLine[game.winLine.length -1].y + game.winLine[game.winLine.length -1].width/2)
  }
}

Cell.prototype.contains = function(x, y) {
  return (
    x > this.x &&
    x < this.x + this.width &&
    y > this.y &&
    y < this.y + this.width
  )
}
