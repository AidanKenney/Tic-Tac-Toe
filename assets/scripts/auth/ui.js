'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log('response is ', response)
}
const onSignUpFailure = function (error) {
  console.log('error is', error)
}

const onSignInSuccess = function (response) {
  console.log('response is ', response)
  store.user = response.user
}
const onSignInFailure = function (error) {
  console.log('error is ', error)
}

const onSignOutSuccess = function (response) {
  console.log('Success! response is', response)
}

const onSignOutFailure = function (error) {
  console.log('error is', error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
