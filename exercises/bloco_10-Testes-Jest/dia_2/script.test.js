const { expect } = require('@jest/globals');
const getUserName = require('./script');

test('If User find', async () => {
  await getUserName(4)
    .then(user => {
      expect(user).toBe('Mark');
    })
})

test('If User not found', async () => {
  await getUserName(1)
    .catch(error => {
      expect(error).toEqual({ error: 'User with 1 not found.'});
    })
})