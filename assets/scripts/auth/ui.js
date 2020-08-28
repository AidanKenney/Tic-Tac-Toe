'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  store.user = response.user
  $('#msg').text('Sign Up successful! Welcome ' + store.user.email + '. Please Sign In.')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
}
const onSignUpFailure = function (error) {
  $('msg').text('Sign Up failed, please try again.')
  $('#sign-up').trigger('reset')
  console.log(error)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#msg').text('Sign in successful! Welcome ' + store.user.email)
  console.log(response)
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#new-game').show()
  $('#get-all-games').show()
  $('#show-game').show()
}
const onSignInFailure = function (error) {
  $('#msg').text('Sign in failed, please try again.')
  console.log(error)
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#msg').text('Sign out successful.')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const onSignOutFailure = function (error) {
  $('#msg').text('Sign out failed.')
  console.log('Sign out failure, error is', error)
}

const onChangePasswordSuccess = function (response) {
  $('#msg').text('Password changed successfully.')
  $('#change-password').trigger('reset')
  console.log('Change Pass success, response is ', response)
}
const onChangePasswordFailure = function (error) {
  $('#msg').text('Password not changed, try again.')
  $('#change-password').trigger('reset')
  console.log('Change password failed, error is', error)
}

const onNewGameSuccess = function (response) {
  console.log('Success! New game here', response)
}
const onNewGameFailure = function (error) {
  console.log('Failure, error is', error)
}

const onGetAllGamesSuccess = function (response) {
  console.log('Success! Here are your games', response)
}

const onGetAllGamesFailure = function (error) {
  console.log('Failure, error is', error)
}

const onShowGameSuccess = function (response) {
  console.log('Succes! Response is', response)
}

const onShowGameFailure = function (error) {
  console.log('Failure. Error is', error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onGetAllGamesSuccess,
  onGetAllGamesFailure,
  onShowGameSuccess,
  onShowGameFailure
}