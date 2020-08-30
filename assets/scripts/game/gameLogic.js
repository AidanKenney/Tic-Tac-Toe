'use strict'

// const winArray = require('./winArray')
// const currentGame = require('./currentGame')

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
const gameArrayX = []
const gameArrayO = []
// gameOver = false

const gameLogic = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'X' && !gameArrayX.includes(i)) {
      gameArrayX.push(i)
    } else if (arr[i] === 'O' && !gameArrayO.includes(i)) {
      gameArrayO.push(i)
    }
  }
  console.log(gameArrayX)
  console.log(gameArrayO)
}

//
// const gameLogic = function (response) {
//   const newArray = response.game.cells
//   const gameArrayX = newArray.map(function (item) {
//     return item === 'X' ? newArray.indexOf(item)
//   })
//   return gameArrayX
// )}

// this doesn't make sense as for loop because i isn't being used in first half

module.exports = {
  gameLogic: gameLogic
}
