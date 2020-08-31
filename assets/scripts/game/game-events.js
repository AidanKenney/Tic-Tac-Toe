'use strict'

const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const store = require('./../store')

const gameLogic = require('./gameLogic')

// start w/variable for user's first move
let playerValue = 'X'
let gameOver = false
let gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

const onNewGame = function (token) {
  event.preventDefault()
  // reset board to empty, reset values
  playerValue = 'X'
  gameOver = false
  $('.box').empty()
  gameBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]
  // call API to create new game
  gameApi.newGame(store.user.token)
    .then(gameUi.onNewGameSuccess)
    .catch(gameUi.onNewGameFailure)
}

const onGetAllGames = function (token) {
  event.preventDefault()
  // GET request to API
  gameApi.getAllGames(store.user.token)
    .then(gameUi.onGetAllGamesSuccess)
    .catch(gameUi.onGetAllGamesFailure)
}

const onBoardClick = function (event) {
  const data = event.target.id
  // if game board div is empty, game isn't over
  if ($('#' + data).is(':empty') && gameOver === false) {
    // add playerValue to that div
    $('#' + data).html(playerValue)
    // update local gameBoard array
    updateGameBoard(data, playerValue)
    // check local gameboard for gameOver bool
    gameOver = gameLogic.gameCheck(gameBoard)
    // if the game is over a call to the API saying so
    gameApi.boardClick(data, playerValue, gameOver)
      .then(gameUi.onBoardClickSuccess)
      .catch(gameUi.onBoardClickFailure)
    playerValue = playerValue === 'O' ? 'X' : 'O'
  } else {
    console.log('Spot taken, pick a different one.')
  }
}

const updateGameBoard = function (index, string) {
  gameBoard.splice(index, 1, string)
  console.log(gameBoard)
}

module.exports = {
  onNewGame: onNewGame,
  onGetAllGames: onGetAllGames,
  onBoardClick: onBoardClick
}
