'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function (token) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: data
  })
}

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

// const showGame = function (data, token) {
//   $.ajax({
//     url: config.apiUrl + '/games/' + data.game.id,
//     method: 'GET',
//     headers: { Authorization: 'Token token=' + store.user.token }
//   })
// }

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  newGame: newGame,
  getAllGames: getAllGames,
  // showGame: showGame
}
