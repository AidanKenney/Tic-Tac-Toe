'use strict'

const isGameOver = function (gameBoard) {
  // is winning conditions were present, game is over
  if (isGameWon(gameBoard) === true) {
    return true
    // If no winner, but the game board if full it's a tie -- still over
  } else if (isGameWon(gameBoard) === false && gameBoard.filter(x => x === '').length === 0) {
    return true
  } else {
    return false
  }
}

const isGameWon = function (gameBoard) {
  if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
    changeBoardColors(0, 1, 2)
    return true
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
    changeBoardColors(3, 4, 5)
    return true
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
    changeBoardColors(6, 7, 8)
    return true
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
    changeBoardColors(0, 3, 6)
    return true
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
    changeBoardColors(1, 4, 7)
    return true
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== '') {
    changeBoardColors(2, 5, 8)
    return true
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
    changeBoardColors(0, 4, 8)
    return true
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '') {
    changeBoardColors(2, 4, 6)
    return true
  } else {
    return false
  }
}

const changeBoardColors = function (a, b, c) {
  for (let i = 0; i < 9; i++) {
    if (i === a || i === b || i === c) {
      $('#' + i).css('background-color', '#8f9779')
      $('#' + i).mouseout(function () {
        $(this).css('background-color', '#8f9779')
      })
    } else if (i !== a || i !== b || i !== c) {
      $('#' + i).mouseover(function () {
        $(this).css('background-color', '#738276')
      })
    }
  }
}

module.exports = {
  isGameOver: isGameOver,
  isGameWon: isGameWon,
  changeBoardColors: changeBoardColors
}
