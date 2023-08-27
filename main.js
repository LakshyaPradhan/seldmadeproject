
//car speed component
AFRAME.registerComponent("car-movement", {
  schema: {
    speedOfCar: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      //get the data from the attributes
      this.data.speedOfCar = this.el.getAttribute("speed");
      this.data.speedOfAscent = this.el.getAttribute("position");

      var carspeed = this.data.speedOfCar;
      var carPosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (carspeed.x < 0) {
          carspeed.x += 0.5;
          this.el.setAttribute("speed", carspeed);
        }
      }
      if (e.key === "ArrowLeft") {
        if (carspeed.x > 0) {
          carspeed.x -= 0.5;
          this.el.setAttribute("speed", carspeed);
        }
      }
      if (e.key === "ArrowUp") {
        if (carspeed.z < 0) {
          carspeed.z += 0.5;
          this.el.setAttribute("speed", carspeed);
        }
        if (carPosition.y < 0) {
          carPosition.y += 0.01;
          this.el.setAttribute("position", carPosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (carspeed.z > 0) {
          carspeed.z -= 0.5;
          this.el.setAttribute("speed", carspeed);
        }
        if (carPosition.y > 0) {
          carPosition.y -= 0.01;
          this.el.setAttribute("position", carPosition);
        }
      }
    });
  },
});
