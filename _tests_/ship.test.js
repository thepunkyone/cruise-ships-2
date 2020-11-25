const Ship = require('../src/ship');

describe('constructor', () => {
  let ship;
  let port;
  let dover;
  let calais;
  let itinerary;
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

    itinerary = {
      ports: [dover, calais],
    };

    ship = new Ship(itinerary);
  });

  it('returns an object', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a current port', () => {
    expect(ship.currentPort).toBe(dover);
  });

  it('has a previousPort property', () => {
    expect(ship.previousPort).toBe(null);
  });
});

describe('setSail', () => {
  let ship;
  let dover;
  let calais;
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

    itinerary = {
      ports: [dover, calais],
    };

    ship = new Ship(itinerary);
  });

  it('property currentPort is empty', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(dover.removeShip).toHaveBeenCalledWith(ship);
  });

  it('previousPort property is currentPort', () => {
    ship.setSail();
    expect(ship.previousPort).toEqual(dover);
  });

  it('gets added to a port on instantiation', () => {
    expect(port.addShip).toHaveBeenCalledWith(ship);
  });
});

describe('dock', () => {
  it('dock at a different port', () => {
    const port = {
      removeShip: jest.fn(),
      addShip: jest.fn(),
    };
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

    const itinerary = {
      ports: [dover, calais],
    };

    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(calais);
    expect(calais.addShip).toHaveBeenCalledWith(ship);
  });
});
