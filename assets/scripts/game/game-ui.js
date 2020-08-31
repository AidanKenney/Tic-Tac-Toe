'use strict'

const currentGame = require('./../currentGame')
// const gameLogic = require('./gameLogic')
// const gameEvents = require('./game-events')

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

const onBoardClickSuccess = function (response) {
  currentGame.game = response.game
  console.log(currentGame)
  if (response.game.over === false) {
    console.log('Success! Here is your updated game', response)
  } else {
    console.log('Game Over!', response)
    $('.box').on('click', function () {
      console.log("Sorry, game's over!")
    })
  }

  // const gameBoard = currentGame.game.cells
  // gameLogic.gameCheck(gameBoard)
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
