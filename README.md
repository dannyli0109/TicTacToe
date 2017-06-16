# TicTacToe
#### initial thought
- for a board game, we need a board
  - 2d array of cells
- cell objects inside the board array
- player objects
  - with varible:
    - name
    - score
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
- game object contains the board and the state of the game
---
#### determine wining pattern
- calculate the win pattern to make the game scalable
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
- `game.turn` keep track of player's turn, every time a player place a node, if the game is not over game, turn increments
- using `game.players[game.turn % game.players.length]` keeps track of the current player as the turn start from 0
  - 0 % 2 is 0
  - 1 % 2 is 1
  - 2 % 2 is 0
  - 3 % 2 is 1 and so on
---
#### determine whether a player has won
- after a player place a node, the game calls a function `game.checkGameOver()` to decide whether a player has won
  - it checks: if any of the wining combination cells have all of the elements of the occupiedCellPlayer with the same object, but not undefined
  - if it is true, change the game state and blocking the user from any mouse event inside the canvas, increments the score of the player by 1
  - if the all of the cells are not undefined and did not met the condition of wining, the game draw
---
#### features
- player can enter name and select grid size up to 10 by 10
- the game keep track of each player's score
---
#### libraries
- p5js
#### website
https://dannyli0109.github.io/TicTacToe/
