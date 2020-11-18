const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor', () => {
    let ship;
    let port;
    let itinerary;
    beforeEach(() => {
        port = new Port('Dover');
        itinerary = new Itinerary([port]);
        ship = new Ship(itinerary);
    })
    
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it('has a current port', () => {
        expect(ship.currentPort).toBe(port);
    })

    it('has a previousPort property', () => {
        expect(ship.previousPort).toBe(null)
    })
    it('gets added to a port on instantiation', () => {
        expect(port.ships).toContain(ship);
    })
});

describe('setSail', () => {
    let ship;
    let dover;
    let calais
    let itinerary;
    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);        
    })

    it('property currentPort is empty', () => {
        ship.setSail(); 
        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship);
    })

    it('previousPort property is currentPort', () => {
        ship.setSail();
        expect(ship.previousPort).toEqual(dover);
    })
})

describe('dock', () => {
    it('dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toEqual(calais);
        expect(calais.ships).toContain(ship);
    })

})