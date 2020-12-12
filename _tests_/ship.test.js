const Ship = require('../src/ship');

describe('constructor', () => {
  let ship;
  let port;
  let dover;
  let calais;
  let itinerary;
  beforeEach(() => {
    port = {
      addShip: jest.fn(), // Remove ship is not called in this test, so only a dummy addShip is needed
                          // to add the ship to it's first port Dover
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

  it('has a previousPort property', () => { // more descriptive test title might be "gets initialised with previousPort set to null"
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
    // port = {
    //   removeShip: jest.fn(), // In this test reusing the port variable - via object spread - between dover and calais
    //   addShip: jest.fn(), // means that the removeShip() and addShip() methods are shared between dover and calais
    // };                   // so the test for calais.addShip() having been called passes because dover.addShip() has been
                            // already called when the Ship is initialised. Object spread does not create 2 separate copies of
                            // addShip and removeShip methods, it adds the same method to both ports

    dover = {
      addShip: jest.fn(), // This is the place to use jest.fn() mocks as the tests are asserting on these functions have been called.
      removeShip: jest.fn(),
      name: 'Dover',
      ships: [],
    };
    calais = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: 'Calais',
      ships: [],
    };

    itinerary = {
      ports: [dover, calais],
    };

    ship = new Ship(itinerary);
  });

  it('gets removed from its current port when it sets sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(dover.removeShip).toHaveBeenCalledWith(ship);
  });

  it('its current port becomes its previous port when it sets sail', () => {
    ship.setSail();
    expect(ship.previousPort).toEqual(dover);
  });

  it('gets added to the first port in its itinerary on instantiation', () => {
    expect(dover.addShip).toHaveBeenCalledWith(ship);
  });

  it('gets added to the next port in its itinerary after setting sail and docking', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(calais);
    expect(calais.addShip).toHaveBeenCalledWith(ship);
  })
});

// describe('dock', () => {
//   it('dock at a different port', () => { // Moved into the previous describe block as the setup in beforeEach is the same as
//     const dover = {                      // what is required for this test
//       addShip: jest.fn(),
//       removeShip: jest.fn(),
//       name: 'Dover',
//       ships: [],
//     };
//     const calais = {
//       addShip: jest.fn(),
//       removeShip: jest.fn(),
//       name: 'Calais',
//       ships: [],
//     };
//
//     const itinerary = {
//       ports: [dover, calais],
//     };
//
//     const ship = new Ship(itinerary);
//
//     ship.setSail();
//     ship.dock();
//     expect(ship.currentPort).toEqual(calais);
//     expect(calais.addShip).toHaveBeenCalledWith(ship);
//   });
// });
