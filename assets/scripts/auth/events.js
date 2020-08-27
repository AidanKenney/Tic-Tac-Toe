'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // get event info
  console.log('event object is', event)
  // get target of event -- the form
  const form = event.target
  // get values from form
  const data = getFormFields(form)
  console.log('data is', data)
  // send values via AJAX request to API
  api.signUp(data)
  // handle successful API response
  .then(ui.onSignUpSuccess)
  // handle failed API response
  .catch(ui.onSignUpFailure)
}

module.exports = {
  onSignUp: onSignUp
}
