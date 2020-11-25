/* eslint-disable class-methods-use-this */
(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
      this.initializeSea();
      document.querySelector('#sailbutton').addEventListener('click', () => {
        this.setSail();
      });
    }

    initializeSea() {
      let counter = 0;
      setInterval(() => {
        const viewport = document.querySelector('#viewport');
        if (counter % 2 === 0) {
          viewport.style.backgroundImage = "url('../images/water1.png')";
        } else {
          viewport.style.backgroundImage = "url('../images/water0.png')";
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
      const shipElement = document.querySelector('#ship');
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === (nextPortElement.offsetLeft - 32)) {
          ship.setSail();
          ship.dock();
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
      if (!nextPortElement) {
        return alert('End of the line!');
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
