var Cell = function(i, j, width) {
  this.i = i
  this.j = j
  this.x = i * width
  this.y = j * width
  this.width = width
}

Cell.prototype.display = function() {
  rect(this.x,this.y,this.width,this.width)
}
