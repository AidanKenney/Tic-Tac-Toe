'use strict'

const api = require('./api')
const ui = require('./ui')

let playerValue = 'X'

const onBoardClick = function (event) {
  const data = event.target.id
  $('#' + data).text(playerValue)
  api.boardClick(data, playerValue)
    .then(ui.onBoardClickSuccess)
    .catch(ui.onBoardClickFailure)
  playerValue = playerValue === 'O' ? 'X' : 'O'
}

module.exports = {
  onBoardClick: onBoardClick
}
