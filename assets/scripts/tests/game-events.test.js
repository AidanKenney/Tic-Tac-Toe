'use strict'

const gameEvents = require('../game/game-events')

test('test for unfinished gameboards', () => {
  expect(gameEvents.isGameOver([
    'O', '', 'X',
    '', 'X', '',
    'O', '', ''
  ])).toBe(false)
})

test('test for finished gameboards', () => {
  expect(gameEvents.isGameOver([
    'O', '', 'X',
    '', 'X', '',
    'X', '', 'O'
  ])).toBe(true)
})
