'use strict'

const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const store = require('./../store')

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
    gameOver = isGameOver(gameBoard, playerValue)
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
  // define an array of the free spaces in the board
  const freeSpaces = []
  // push the index of every free space of the gameBoard into the array
  gameBoard.forEach((item, index) => item === '' ? freeSpaces.push(index) : '')
  // check if game is won
  gameOver = isGameOver(gameBoard, playerValue)
  // if game is not over
  if (!gameOver) {
    playerValue = 'O'
    // compNum will be set to most strategic index, or return -1
    let compNum = computerStrategy(gameBoard)
    // if compNum returned negative num
    if (compNum === -1 || gameBoard[compNum] !== '') {
      // set compNum to random number, pick one of the free spaces
      compNum = freeSpaces[Math.ceil(Math.random() * (freeSpaces.length - 1))]
    }
    if (gameBoard[compNum] === '') {
      $('#' + compNum).html(playerValue)
      updateGameBoard(compNum, playerValue)
      gameOver = isGameOver(gameBoard, playerValue)
      gameApi.boardClick(compNum, playerValue, gameOver)
        .then(gameUi.onBoardClickSuccess)
        .catch(gameUi.onBoardClickFailure)
      userTurn = true
      playerValue = 'X'
    }
  }
}

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const computerStrategy = (board) => {
  // loop through the array containing winning combo arrays
  for (let i = 0; i < winningConditions.length; i++) {
    // define each condition as a 'row' for clarity
    const row = winningConditions[i]
    // declare variables for the spots on the gameboard that correspond to the winning indices
    const spotOne = board[row[0]]
    const spotTwo = board[row[1]]
    const spotThree = board[row[2]]
    // go through possibilities: one and two could match, one and three, two and three
    if (spotOne === spotTwo && spotOne !== spotThree && spotOne !== '' && spotThree === '') {
      // return the remaining index in order to foil the player's attempt to win!
      return row[2]
    } else if (spotOne === spotThree && spotOne !== spotTwo && spotOne !== '' && spotTwo === '') {
      return row[1]
    } else if (spotTwo === spotThree && spotTwo !== spotOne && spotTwo !== '' && spotOne === '') {
      return row[0]
    }
  }
  return -1
}

const isGameOver = function (gameBoard, player) {
  // is winning conditions were present, game is over
  if (isGameWon(gameBoard, player) === true) {
    return true
    // If no winner, but the game board if full it's a tie -- still over
  } else if (isGameWon(gameBoard, player) === false && gameBoard.filter(x => x === '').length === 0) {
    return true
  }
  return false
}

const isGameWon = (board, player) => {
  // loop through the array containing winning combo arrays
  for (let i = 0; i < winningConditions.length; i++) {
    // define each condition as a 'row' for clarity
    const row = winningConditions[i]
    // declare variables for the spots on the gameboard that correspond to the winning indices
    const spotOne = board[row[0]]
    const spotTwo = board[row[1]]
    const spotThree = board[row[2]]
    // go through possibilities: one and two could match, one and three, two and three
    if (spotOne === spotTwo && spotOne === spotThree && spotOne === player) {
      gameUi.changeBoardColors(row[0], row[1], row[2])
      return true
    }
  }
  return false
}

module.exports = {
  onNewGame: onNewGame,
  onGetAllGames: onGetAllGames,
  onBoardClick: onBoardClick,
  isGameOver: isGameOver,
  isGameWon: isGameWon,
  computerStrategy: computerStrategy
}
