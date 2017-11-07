class Time {
  constructor() {
    const now = new Date();
    window.setInterval(this.tick.bind(this), 1000);
  }
  tick() {
    this.now = new Date();
  }
}

const myTime = new Time();
myTime;
console.log(myTime);
