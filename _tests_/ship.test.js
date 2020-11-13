const Ship = require('../src/ship');

describe('constructor', () => {
    let ship;

    beforeEach(() => {
        ship = new Ship('Dover');
    })
    
    it('returns an object', () => {
        expect(new Ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        expect(ship.startingPort).toBe('Dover');
    })
});

describe('setSail', () => {
    let ship;
    beforeEach(() => {
        ship = new Ship;
    })

    it('property startingPort is empty', () => {
        ship.startingPort = 'Dover';
        ship.setSail(); 
        expect(ship.startingPort).toBeFalsy();
    })
})