class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
    }
    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = '';
    }

    dock(port) {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort)
        this.currentPort = itinerary.ports[previousPortIndex + 1];
    }
}

module.exports = Ship;