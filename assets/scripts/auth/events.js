'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  // get event info
  // get target of event -- the form
  const form = event.target
  // get values from form
  const data = getFormFields(form)
  // send values via AJAX request to API
  api.signUp(data)
  // handle successful API response
    .then(ui.onSignUpSuccess)
  // handle failed API response
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (token) {
  event.preventDefault()
  api.signOut(store.user.token)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onNewGame = function (token) {
  event.preventDefault()
  api.newGame(store.user.token)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onGetAllGames = function (token) {
  event.preventDefault()
  api.getAllGames(store.user.token)
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onGetAllGamesFailure)
}

const onBoardClick = function (event) {
  console.log(event.target.id)
}

// const onShowGame = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const data = getFormFields(form)
//   console.log(data.game.id)
//   api.showGame(data)
//     .then(ui.onShowGameSuccess)
//     .catch(ui.onShowGameFailure)
// }

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword,
  onNewGame: onNewGame,
  onGetAllGames: onGetAllGames,
  onBoardClick: onBoardClick
  // onShowGame: onShowGame
}
