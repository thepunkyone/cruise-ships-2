const Itinerary = require('../src/itinerary');

describe('constructor', () => {
  let itinerary;
  const dover = {}; // Port is an instance of object, so the dummy of a Port can simply be an empty object
  const calais = {}; // jest.fn() mocks are more often used when you have to assert on whether a function was called (also known as a "spy")

  beforeEach(() => {
    itinerary = new Itinerary([dover, calais]); // Can create the test Itinerary with ports in the beforeEach,
                                                    // This now makes it reusable for both tests
  });

  it('returns an object', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  it('has a ports property', () => {
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
