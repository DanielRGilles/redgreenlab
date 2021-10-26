const fetchQuotes = require('../lib/utils/fetchQuotes');

describe('returns quote, character name and image url', () => {
  it('get character object', async () => {
    const data = await fetchQuotes();
    const expectation = [{
      character: expect.any(String),
      image: expect.any(String),
      quote: expect.any(String)
    }];
    expect(data).toEqual(expectation);
  }
  );
});


