const { test, expect } = require('@jest/globals');
const uppercase = require('./script');

test('capitalize string', () => {
  
  uppercase('string', (cb) => {
    expect(cb).toBe('STRING');
  });
})