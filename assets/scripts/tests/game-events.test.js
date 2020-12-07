'use strict'

const gameEvents = require('../game/game-events')

test('test for unfinished gameboards', () => {
  expect(gameEvents.isGameOver([
    'O', '', 'X',
    '', 'X', '',
    'O', '', ''
  ], 'X')).toBe(false)
})

// needs to account for DOM manipulation upon true response
//
// test('test for finished gameboards', () => {
//   expect(gameEvents.isGameOver([
//     'O', '', 'X',
//     '', 'X', '',
//     'X', '', 'O'
//   ], 'X')).toBe(true)
// })

test('test for computer strategy, block win', () => {
  expect(gameEvents.computerStrategy([
    'O', '', 'X',
    '', '', '',
    'X', '', ''
  ])).toBe(4)
})

test('test for computer strategy, pick random', () => {
  expect(gameEvents.computerStrategy([
    '', '', 'X',
    '', '', '',
    '', '', ''
  ])).toBe(-1)
})
