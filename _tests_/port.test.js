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