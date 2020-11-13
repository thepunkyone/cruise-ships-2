
const Ship = require('../src/ship');

describe('constructor', () => {
    let ship;

    beforeEach(() => {
        ship = new Ship;
    })
    
    it('returns an object', () => {
        expect(new Ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        expect(ship.startingPort).toBe('');
    })
});