(function exportShip() {
  class Ship {
    constructor(itinerary) {
      this.itinerary = itinerary;
      this.currentPort = itinerary.ports[0];
      this.previousPort = null;
      this.currentPort.addShip(this);
    }

    setSail() {
      this.currentPort.removeShip(this);
      this.previousPort = this.currentPort;
      this.currentPort = '';
    }

    dock() {
      const { itinerary } = this;
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      this.currentPort = itinerary.ports[previousPortIndex + 1];
      this.currentPort.addShip(this);
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
}());
