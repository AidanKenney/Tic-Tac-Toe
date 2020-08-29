'use strict'

const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const store = require('./../store')

const onNewGame = function (token) {
  event.preventDefault()
  gameApi.newGame(store.user.token)
    .then(gameUi.onNewGameSuccess)
    .catch(gameUi.onNewGameFailure)
}

const onGetAllGames = function (token) {
  event.preventDefault()
  gameApi.getAllGames(store.user.token)
    .then(gameUi.onGetAllGamesSuccess)
    .catch(gameUi.onGetAllGamesFailure)
}

let playerValue = 'X'

const onBoardClick = function (event) {
  const data = event.target.id
  $('#' + data).text(playerValue)
  gameApi.boardClick(data, playerValue)
    .then(gameUi.onBoardClickSuccess)
    .catch(gameUi.onBoardClickFailure)
  playerValue = playerValue === 'O' ? 'X' : 'O'
}

module.exports = {
  onNewGame: onNewGame,
  onGetAllGames: onGetAllGames,
  onBoardClick: onBoardClick
}
