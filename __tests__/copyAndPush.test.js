const copyAndPush = require('../lib/utils/copyAndPush');

describe('push n that numbo', () => {
  it('returns a new array with the additional number at the end', () => {
    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
  
});
