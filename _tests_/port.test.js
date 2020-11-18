const Port = require('../src/port');

describe('constructor', () => {
    let port;

    beforeEach(() => {
        port = new Port('Dover');
    });

    it('returns an object', () => {
        expect(new Port).toBeInstanceOf(Object);
    })

    it('has a name property', () => {
        expect(port.name).toBe('Dover');
    })
})

describe('addShip', () => {
    it('adds a ship', () => {
        const port = new Port('Dover');
        const ship = jest.fn();
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    })
})

describe('removeShip', () => {
    it('removes a ship', () => {
        const port = new Port('Dover');
        const titanic = jest.fn();
        const queenMary = jest.fn();
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic]);

    })
})