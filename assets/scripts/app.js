'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/game-events')
const authUi = require('./auth/ui')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#new-game').hide()
  $('#get-all-games').hide()
  $('#show-game').hide()
  $('#gameBoard').hide()
  $('#sign-in').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#get-all-games').on('click', gameEvents.onGetAllGames)
  $('#show-game').on('submit', authEvents.onShowGame)
  $('.box').on('click', gameEvents.onBoardClick)
  $('#link-to-sign-in').on('click', authUi.onLinkToSignIn)
})
