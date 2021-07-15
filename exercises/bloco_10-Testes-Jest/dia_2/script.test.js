const { expect } = require('@jest/globals');
const getUserName = require('./script');

test('If User find', () => {
  return getUserName(4)
    .then(user => {
      expect(user).toBe('Mark');
    })
})