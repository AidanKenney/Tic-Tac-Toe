'use strict'

const config = require('./../config')
const store = require('./../store')
const currentGame = require('./../currentGame')

const newGame = function (token) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: '{}'
  })
}

const getAllGames = function (token) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const boardClick = function (data, playerValue, bool) {
  return $.ajax({
    url: config.apiUrl + '/games/' + currentGame.game._id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: {
      game: {
        cell: {
          index: data,
          value: playerValue
        },
        over: bool
      }
    }
  })
}

module.exports = {
  newGame: newGame,
  getAllGames: getAllGames,
  boardClick: boardClick
}
