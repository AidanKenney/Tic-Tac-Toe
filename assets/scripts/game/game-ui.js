'use strict'

const currentGame = require('./../currentGame')
// const gameOver = require('./game-events')
// const data = require('./game-events')
// const playerValue = require('./game-events')
// const gameLogic = require('./gameLogic')
// const gameEvents = require('./game-events')

const onNewGameSuccess = function (response) {
  currentGame.game = response.game
  console.log(currentGame.game._id)
  console.log('Success! New game here', response)
  $('.container').show()
  $('.box').empty()
  $('#get-all-games').hide()
}
const onNewGameFailure = function (error) {
  $('#get-all-games').hide()
  console.log('Failure, error is', error)
}

const onGetAllGamesSuccess = function (response) {
  $('.container').hide()
  $('#all-games').text('You have played ' + response.games.length + ' games.')
  console.log('Success! Here are your games', response)
}

const onGetAllGamesFailure = function (error) {
  console.log('Failure, error is', error)
}

const onBoardClickSuccess = function (response, index) {
  currentGame.game = response.game
  console.log(currentGame)
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
}
