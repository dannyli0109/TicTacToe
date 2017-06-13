# TicTacToe
#### start with logic
- for a board game, we need a board
  - 2d array of cells
- we need cell objects inside the board array
- we need player objects
  - with varible:
    - name
- we need win condition
  - store all possible win conditions in an array
---
#### basic board machanic
- initialise the board with rows and cols of cells
- each of the board array will have a cell object
- cell object contains i, j, x, y, width and occupiedCellPlayer
  - i is the row index of the cell
  - j is the col index of the cell
  - x is the starting x position of the cell (for drawing)
  - y is the starting y position of the cell (for drawing)
  - width is the width of the cell (for drawing)
  - occupiedCellPlayer will be undefined by default, a player object will be placed when a player place a node on the cell
---
#### determine wining pattern
- uses variables to make wining pattern scalable
- `game.determineWinPattern()` determines the wining pattern of the cell
  - row wins pattern:
    - if all columns of a row is matched
  - column wins pattern:
    - if all rows of a column is matched
  - diagonal wins pattern (no metter how big the board is, there are only two possibilities):
    - if all `row === col` matched
    - if `game.board[i][lastIndex - i]` matched
---
#### determine whose turn is
- `game.turn` keep track of player's turn, every time a player place a node, if the game is not over game.turn increments
- using `game.players[game.turn % game.players.length]` keeps track of the current player as the turn start from 0
  - 0 % 2 is 0
  - 1 % 2 is 1
  - 2 % 2 is 0
  - 3 % 2 is 1 and so on
  - so i don't need to have another variable to keep track of the current player
---
#### determine whether a player has won
- after a player place a node, the game calls a function `game.checkGameOver()` to decide whether a player has won
  - it checks: if any of the wining combination cells have all of the elements of the occupiedCellPlayer with the same object, but not undefined
  - if it is true, change the game state and blocking the user from any mouse event inside the canvas
