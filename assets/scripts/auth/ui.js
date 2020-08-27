'use strict'

const onSignUpSuccess = function (response) {
  console.log('response is ', response)
}

const onSignUpFailure = function (error) {
  console.log('error is', error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
