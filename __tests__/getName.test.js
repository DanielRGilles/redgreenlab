const getName = require('../lib/utils/getName');

describe('pull name out of an object', () => {
  it('', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    expect(getName(spot)).toEqual('spot');
  });
});
