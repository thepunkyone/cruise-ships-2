class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
    }
    setSail() {
        this.currentPort = '';
    }

    dock(port) {
        this.currentPort = port;
    }
}


module.exports = Ship;