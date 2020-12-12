const Port = require('../src/port');

describe('constructor', () => {
  let port;

  beforeEach(() => {
    port = new Port('Dover');
  });

  it('returns an object', () => {
    expect(port).toBeInstanceOf(Object);
  });

  it('has a name property', () => {
    expect(port.name).toBe('Dover');
  });
});

describe('addShip', () => {
  it('adds a ship', () => {
    const port = new Port('Dover');
    const ship = {}; // Ships can be simplified to empty objects, same as Ports in the Itinerary test
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});

describe('removeShip', () => {
  it('removes a ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
  });
});
