const getName = require('../lib/utils/getName');

describe('pull name out of an object', () => {
  it('pulls name out of spot ', () => {
    const { name } = { name: 'spot', age: 5, weight: '20 lbs' };
    expect(getName({ name })).toEqual('spot');
  });
  it('pulls name out of character ', () => {
    const { name } = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    expect(getName({ name })).toEqual('Aang');
  });
});
