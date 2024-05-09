// Objects in Objects
// Mr. Scott
// April 12, 2024
// Storing objects IN objects, overwriting objects, basic transformations

let eastbound = [];
let wastbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
    eastbound.push(new Car(0, random(0, (windowHeight / 2) - 30), 0))


  }
  for (let i = 0; i < 100; i++) {
    eastbound.push(new Car(windowWidth, random((windowHeight / 2)+30, windowHeight -30), 1))


  }
}

function draw() {
  background(70);
  road()
  for (let c of eastbound) {
    c.display();
    c.move()

  }
}

function road() {
  for (let i = 0; i < windowWidth; i += 50) {
    fill(10000)
    square(i, height / 2, 20)
  }
}
class Car {
  constructor(x, y, d) {
    this.x = x; this.y = y; 
    this.speed = random(2, 10);
    this.c = color(random(255), random(255), random(255));
    this.size = 60;
    this.direction = d//0--> right//1 <-- left
  }
  move() {

    if (this.direction === 0) {
      this.x += this.speed
      if (this.x > windowWidth) {
        this.x = 0
      }
    }
  else{
    this.x -= this.speed
    if (this.x < 0) {
      this.x = windowWidth
    }

  }
  }


  // Class Methods
  display() {
    fill(this.c);
    rect(this.x, this.y, this.size, this.size * 0.5);

  }
}
