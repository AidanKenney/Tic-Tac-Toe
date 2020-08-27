'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log('Sign Up success, response is ', response)
  $('#sign-up').hide()
}
const onSignUpFailure = function (error) {
  console.log('Sign Up failure, error is', error)
}

const onSignInSuccess = function (response) {
  console.log('Sign in success, response is ', response)
  store.user = response.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
}
const onSignInFailure = function (error) {
  console.log('Sign in failure, error is ', error)
}

const onSignOutSuccess = function (response) {
  console.log('Sign out success! response is', response)
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const onSignOutFailure = function (error) {
  console.log('Sign out failure, error is', error)
}

const onChangePasswordSuccess = function (response) {
  console.log('Change Pass success, response is ', response)
}
const onChangePasswordFailure = function (error) {
  console.log('Change password failed, error is', error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
