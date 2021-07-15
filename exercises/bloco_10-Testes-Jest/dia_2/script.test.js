const { expect } = require('@jest/globals');
const getUserName = require('./script');

test('If User find', () => {
  return getUserName(4)
    .then(user => {
      expect(user).toBe('Mark');
    })
})

test('If User not found', () => {
  return getUserName(1)
    .catch(error => {
      expect(error).toEqual({ error: 'User with 1 not found.'});
    })
})