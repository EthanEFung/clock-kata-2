const theWindow = window.onload;

window.onload = function() {
  class ClockUI {
    constructor() {
      const myTime = new Time();
      this.handleTimeChange(myTime);
    }
    handleTimeChange(time) {
      console.log(time);
      document.getElementById("clock").textContent = time;
    }
  }

  const myClock = new ClockUI();
  myClock;
};
