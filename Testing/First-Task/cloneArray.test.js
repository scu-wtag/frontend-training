const cloneArray = require('./cloneArray.js')

test('clones an array properly', () => {
    const array = [2, 3, 5, 6]
    expect(cloneArray(array)).toStrictEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})