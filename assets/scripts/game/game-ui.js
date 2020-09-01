'use strict'

const currentGame = require('./../currentGame')
const gameLogic = require('./gameLogic')
// const gameOver = require('./game-events')
// // const data = require('./game-events')
// const playerValue = require('./game-events')
// const gameLogic =

const onNewGameSuccess = function (response) {
  currentGame.game = response.game
  console.log(currentGame.game._id)
  console.log('Success! New game here', response)
  $('.container').show()
  $('.box').empty()
  $('#get-all-games').hide()
  $('#msg').hide()
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
  // if the game is over and even # of vals, O wins
  } else if (gameLogic.isGameWon(gameArray) === true && gameArrayOnlyVals.length % 2 === 0) {
    $('#msg').text('Game Over! O wins!')
    $('#msg').show()
  // if game is over and odd # of vals, X wins
  } else if (gameLogic.isGameWon(gameArray) === true && gameArrayOnlyVals.length % 2 === 1) {
    $('#msg').text('Game Over! X wins!')
    $('#msg').show()
  }
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
