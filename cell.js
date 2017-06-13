var Cell = function(i, j, width) {
  this.i = i
  this.j = j
  this.x = i * width
  this.y = j * width
  this.width = width
  this.occupiedCellPlayer
}

Cell.prototype.display = function() {
  noFill()
  stroke(0)
  rect(this.x,this.y,this.width,this.width)
  if (this.occupiedCellPlayer) {
    this.occupiedCellPlayer.placeNode(this.x, this.y, this.width)
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
