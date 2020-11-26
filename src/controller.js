/* eslint-disable class-methods-use-this */
(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
      this.initializeSea();
      document.querySelector('#sailbutton').addEventListener('click', () => {
        this.setSail();
      });
      this.createDisplay();
    }

    initializeSea() {
      let counter = 0;
      setInterval(() => {
        const viewport = document.querySelector('#viewport');
        if (counter % 2 === 0) {
          viewport.style.backgroundImage = "url('./images/water1.png')";
        } else {
          viewport.style.backgroundImage = "url('./images/water0.png')";
        }
        counter += 1;
      }, 1000);
    }

    renderPorts(ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';
      ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    }

    renderShips() {
      const { ship } = this;
      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`,
      );
      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    }

    setSail() {
      const { ship } = this;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`,
      );
      if (!nextPortElement) {
        this.renderMessage('End of the line. Please disembark.');
        return;
      }
      const portPosition = nextPortElement.offsetLeft;
      const shipElement = document.querySelector('#ship');
      let shipPosition = shipElement.offsetLeft;
      ship.setSail();
      const departingMessage = `Now departing ${ship.itinerary.ports[currentPortIndex].name}`;
      const sailInterval = setInterval(() => {
        // const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipPosition === portPosition - 32) {
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipPosition + 1}px`;
        shipPosition += 1;
      }, 10);
      ship.dock();
      this.renderMessage(departingMessage);
      setTimeout(() => {
        this.renderMessage(`Now arriving at ${ship.itinerary.ports[nextPortIndex].name}`);
      }, 2000);
      setTimeout(() => {
        this.createDisplay();
      }, 3000);
    }

    renderMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.id = 'message';
      messageElement.innerHTML = message;

      const viewport = document.querySelector('#viewport');
      viewport.appendChild(messageElement);
      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2000);
    }

    createDisplay() {
      const { ship } = this;
      const portIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
      const currentPortElement = document.getElementById('currentPort');
      const nextPortElement = document.getElementById('nextPort');
      currentPortElement.innerHTML = `Current Port: ${ship.currentPort.name}`;
      if (portIndex < ship.itinerary.ports.length) {
        nextPortElement.innerHTML = `Next Destination: ${ship.itinerary.ports[portIndex].name}`;
      } else {
        nextPortElement.innerHTML = 'This is the final destination.';
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
