const capitalizeAndFilter = require('../lib/utils/capitalizeAndFilter');

describe('return a modified array', () => {
  it('returns the array with all caps and f words removed', () => {
    const stringyArr = ['hey', 'is', 'this', 'fun', 'annoying'];
    expect(capitalizeAndFilter(stringyArr)).toEqual(['Hey', 'Is', 'This', 'Annoying']);
  });
 
});
