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
    
});

describe('setSail', () => {
    let ship;
    let dover;
    let calais
    let itinerary;
    let port;
    beforeEach(() => {

        port = {
            removeShip: jest.fn(),
            addShip: jest.fn(),
        };
        dover = {
            ...port,
            name: 'Dover',
            ships: [],
        };
        calais = {
            ...port,
            name: 'Calais',
            ships: [],
        };
        
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);        
    })

    it('property currentPort is empty', () => {
        ship.setSail(); 
        expect(ship.currentPort).toBeFalsy();
        expect(dover.removeShip).toHaveBeenCalledWith(ship);
    })

    it('previousPort property is currentPort', () => {
        ship.setSail();
        expect(ship.previousPort).toEqual(dover);
    })

    it('gets added to a port on instantiation', () => {
        expect(port.addShip).toHaveBeenCalledWith(ship);
    })
})

describe('dock', () => {
    it('dock at a different port', () => {
    
        const port = {
            removeShip: jest.fn(),
            addShip: jest.fn(),
        }
        const dover = {
            ...port,
            name: 'Dover',
            ships: [],
        };
        const calais = {
            ...port,
            name: 'Calais',
            ships: [],
        };

        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toEqual(calais);
        expect(calais.addShip).toHaveBeenCalledWith(ship);
    })

})