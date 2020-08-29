'use strict'
// const winArray = require('./winArray')
// const currentGame = require('./currentGame')

// let gameArrayX = []
// let gameArrayO = []

// const gameLogicFunc = function (array) {
//   // we want to return a boolean - is game over or not?
//   // how to tell if game is over?
//   // do the indexes of ONE playerValue = one of the arrays from gameArray
//   for (let i = 0; i < array.game.cells.length; i++) {
//     gameArrayX.push(array.game.cells.indexOf('X'))
//   }
//   for (let i = 0; i < array.game.cells.length; i++) {
//     gameArrayO.push(currentGame.game.cells.indexOf('O'))
//   }
//   for (let i = 0; i < winArray.length; i++) {
//     if (gameArrayX === winArray[i]) {
//       return true
//     } else if (gameArrayO === winArray[i]) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

const gameLogic = function (array) {
  array.map(array.indexOf)
}



// this doesn't make sense as for loop because i isn't being used in first half

module.exports = {
  gameLogic
  // gameLogicFunc: gameLogicFunc
}
