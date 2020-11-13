const Ship = require('../src/ship');
const Port = require('../src/port');

describe('constructor', () => {
    let ship;
    let port;
    beforeEach(() => {
        port = new Port('Dover');
        ship = new Ship(port);
    })
    
    it('returns an object', () => {
        expect(new Ship).toBeInstanceOf(Object);
    });

    it('has a current port', () => {
        expect(ship.currentPort).toBe(port);
    })
});

describe('setSail', () => {
    let ship;
    let port;
    beforeEach(() => {
        port = new Port('Dover');
        ship = new Ship;
    })

    it('property currentPort is empty', () => {
        ship.currentPort = port;
        ship.setSail(); 
        expect(ship.currentPort).toBeFalsy();
    })
})

describe('dock', () => {
    it('dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    })
})