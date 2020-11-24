(function exportController() {
  class Controller {
    constructor() {
      this.initializeSea();
    }
    initializeSea() {
      let counter = 0;
      setInterval(() => {
        const viewport = document.querySelector("#viewport");
        if (counter % 2 === 0) {
          viewport.style.backgroundImage = "url('../images/water1.png')";
          counter++;
        } else {
          viewport.style.backgroundImage = "url('../images/water0.png')";
          counter++;
        }
      }, 1000);
    }
    renderPorts(ports) {
      const portsElement = document.querySelector("#ports");
        portsElement.style.width = "0px";
        console.log(ports);
      ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.className = "port";
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    }
    renderShips(ship){
      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
