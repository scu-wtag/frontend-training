const subtract = require('./subtract.js')

test('subtracts two numbers', () => {
    expect(subtract(3, 2)).toBe(1)
})
