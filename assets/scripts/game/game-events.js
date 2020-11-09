'use strict'

const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const store = require('./../store')
const gameLogic = require('./gameLogic')

// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

// start w/variable for user's first move
let playerValue = 'X'
let userTurn = true
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
  userTurn = true
  gameOver = false
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
  if ($('#' + data).is(':empty') && gameOver === false && userTurn === true) {
    // add playerValue to that div
    $('#' + data).html(playerValue)
    // update local gameBoard array
    updateGameBoard(data, playerValue)
    // check local gameboard for gameOver bool
    gameOver = gameLogic.isGameOver(gameBoard)
    // PATCH, call to the API with updates
    gameApi.boardClick(data, playerValue, gameOver)
      .then(gameUi.onBoardClickSuccess)
      // .then(computerMove(gameBoard))
      .catch(gameUi.onBoardClickFailure)
      // update playerValue
    // make it no longer user's turn while computerMove is working
    userTurn = false
    // now, instead of switching playervalue, we will call computerMove
    if (!gameOver) {
      setTimeout(function () { computerMove(gameBoard) }, 1000)
    }
    // if div is not empty, but the game isn't over
  } else if (!$('#' + data).is(':empty') && gameOver === false) {
    $('#msg').text('Spot taken, pick a different one.')
  }
}

const updateGameBoard = function (index, string) {
  gameBoard.splice(index, 1, string)
}

const computerMove = (gameBoard) => {
  const gameOver = gameLogic.isGameOver(gameBoard)
  if (!gameOver) {
    const randomNum = Math.ceil(Math.random() * 8)
    if (gameBoard[randomNum] === '') {
      $('#' + randomNum).html('O')
      updateGameBoard(randomNum, 'O')
      gameApi.boardClick(randomNum, 'O', gameOver)
        .then(gameUi.onBoardClickSuccess)
        .catch(gameUi.onBoardClickFailure)
      userTurn = true
    } else {
      return computerMove(gameBoard)
    }
  }
}

module.exports = {
  onNewGame: onNewGame,
  onGetAllGames: onGetAllGames,
  onBoardClick: onBoardClick
}
