const Itinerary = require('../src/itinerary');

describe('constructor', () => {
  let itinerary;
  beforeEach(() => {
    itinerary = new Itinerary([]);
  });
  it('returns an object', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });
  it('has a ports property', () => {
    const dover = jest.fn();
    const calais = jest.fn();
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
