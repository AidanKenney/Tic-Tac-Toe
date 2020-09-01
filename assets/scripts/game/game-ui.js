'use strict'

const currentGame = require('./../currentGame')
const gameLogic = require('./gameLogic')
const storeGameErrors = require('./../storeGameErrors')

const onNewGameSuccess = function (response) {
  currentGame.game = response.game
  $('.container').show()
  $('.box').empty()
  $('#get-all-games').show()
  $('#all-games').hide()
  $('#msg').text('Start your new game!')
}
const onNewGameFailure = function (error) {
  storeGameErrors.error = error
  $('#all-games').hide()
  $('#msg').text('Error, new game did not start. Try again')
}

const onGetAllGamesSuccess = function (response) {
  $('.container').hide()
  $('#all-games').text('You have played ' + response.games.length + ' games.')
  $('#all-games').show()
}

const onGetAllGamesFailure = function (error) {
  storeGameErrors.error = error
  $('.container').hide()
  $('#all-games').text('Error, did not retrieve played games. Try again')
  $('#all-games').show()
}

const onBoardClickSuccess = function (response) {
  // save api response to currentGame var
  currentGame.game = response.game
  // make new var of just the game's cells
  const gameArray = response.game.cells
  // filter array to get rid of empty cells
  const gameArrayOnlyVals = gameArray.filter(x => x !== '')
  // if game is over, but no winner, it's a tie
  if (response.game.over === true && gameLogic.isGameWon(gameArray) === false) {
    $('#msg').text('Game Over! It is a tie!')
    $('#msg').show()
    $('#get-all-games').show()
  // if the game is over and even # of vals, O wins
  } else if (gameLogic.isGameWon(gameArray) === true && gameArrayOnlyVals.length % 2 === 0) {
    $('#msg').text('Game Over! O wins!')
    $('#msg').show()
    $('#get-all-games').show()
  // if game is over and odd # of vals, X wins
  } else if (gameLogic.isGameWon(gameArray) === true && gameArrayOnlyVals.length % 2 === 1) {
    $('#msg').text('Game Over! X wins!')
    $('#msg').show()
    $('#get-all-games').show()
  }
}

const onBoardClickFailure = function (error) {
  storeGameErrors.error = error
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onGetAllGamesSuccess,
  onGetAllGamesFailure,
  onBoardClickSuccess,
  onBoardClickFailure
}
