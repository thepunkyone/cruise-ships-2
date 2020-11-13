const Itinerary = require('../src/itinerary');

describe('constructor', () => {
    let itinerary;
    beforeEach(() => {
        itinerary = new Itinerary([]);
    })
    it('returns an object', () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    })
    it('has a ports property', () => {
        expect(itinerary.ports).toEqual([])
    })
})