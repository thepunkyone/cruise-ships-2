
const Ship = require('../src/ship');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Ship).toBeInstanceOf(Object);
    });
});