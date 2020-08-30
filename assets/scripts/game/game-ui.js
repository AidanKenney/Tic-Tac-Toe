'use strict'

const currentGame = require('./../currentGame')
const gameLogic = require('./gameLogic')

const onNewGameSuccess = function (response) {
  currentGame.game = response.game
  console.log(currentGame.game._id)
  console.log('Success! New game here', response)
  $('.container').show()
}
const onNewGameFailure = function (error) {
  console.log('Failure, error is', error)
}

const onGetAllGamesSuccess = function (response) {
  console.log('Success! Here are your games', response)
}

const onGetAllGamesFailure = function (error) {
  console.log('Failure, error is', error)
}

// let gameArrayX = []

const onBoardClickSuccess = function (response) {
  currentGame.game = response.game
  console.log(currentGame)
  console.log('Success! Here is your updated game', response)
  const gameCells = currentGame.game.cells
  gameLogic.gameLogic(gameCells)
  // make variable for cells array
  // const x = currentGame.game.cells
  // use .map to make new array out of indices of X
}

const onBoardClickFailure = function (error) {
  console.log('Error, game not updated', error)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onGetAllGamesSuccess,
  onGetAllGamesFailure,
  onBoardClickSuccess,
  onBoardClickFailure
  // onShowGameSuccess,
  // onShowGameFailure
}
