const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('constructor', () => {
    let itinerary;
    beforeEach(() => {
        itinerary = new Itinerary([]);
    })
    it('returns an object', () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    })
    it('has a ports property', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais]);
    });
})