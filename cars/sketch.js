// CAR CAR CAR
// Martin
// April 12, 2024
// Storing objects IN objects, overwriting objects, basic transformations

let eastbound = [];
let westbound = [];
let light;
// create cars and east and west
function setup() {
  createCanvas(windowWidth, windowHeight);
  light = new TrafficLight(windowWidth / 2, windowHeight / 2, 100)
  for (let i = 0; i < 10; i++) {
    eastbound.push(new Car(0, random(0, (windowHeight / 2) - 30), 0))


  }
  for (let i = 0; i < 10; i++) {
    westbound.push(new Car(windowWidth, random((windowHeight / 2) + 30, windowHeight - 30), 1))


  }
}
// show the car and road
function draw() {
  background(70);
  road()

  for (let c of eastbound) {
    c.display();
    c.action()

  }
  for (let c of westbound) {
    c.display();
    c.action()

  }
  //show the light
  light.display();
}
// create new cars 
function mousePressed() {
  eastbound.push(new Car(0, random(0, (windowHeight / 2) - 30), 0))
  if (keyIsPressed && keyCode === SHIFT) {
    westbound.push(new Car(windowWidth, random((windowHeight / 2) + 30, windowHeight - 30), 1))

  }
}
// create road
function road() {
  for (let i = 0; i < windowWidth; i += 50) {
    fill(10000)
    square(i, height / 2, 20)
  }
}
// function for car
class Car {
  constructor(x, y, d) {
    this.x = x; this.y = y;
    this.speed = random(2, 10);
    this.c = color(random(255), random(255), random(255));
    this.size = 60;
    this.direction = d//0--> right//1 <-- left
  }
  // move for car
  move() {
    if (light.red === true) {//keep the speed when the light become green
      this.speed = 0
    }
    else {
      this.speed = constrain(this.speed, 1, 30);

    }
    if (this.direction === 0) {
      this.x += this.speed
      if (this.x > windowWidth) {
        this.x = 0
      }
    }
    else {
      this.x -= this.speed
      if (this.x < 0) {
        this.x = windowWidth
      }

    }
  }
  // speed increase for car
  speedup() {
    let chance = random(0, 100);
    if (chance <= 1) {
      if (this.speed <= 30) {
        this.speed += this.speed + (this.speed / 100);
      }
    }

  }
  // speed decrease for car
  speeddown() {
    let chance = random(0, 100);
    if (chance <= 1) {
      if (this.speed >= 10) {
        this.speed -= this.speed - (this.speed / 100);
      }
    }

  }
  // color change for car
  colorchange() {
    let chance = random(0, 100);
    if (chance <= 1) {
      this.c = color(random(255), random(255), random(255));
    }

  }
  // give these to action
  action() {
    this.move()
    this.speeddown()
    this.speedup()
    this.colorchange()
  }

 

  // set up of car
  display() {
    fill(this.c);
    rect(this.x, this.y, this.size, this.size * 0.5)
    fill(10000)
    rect(this.x, this.y, 10, 10 * 0.5);
    rect(this.x + this.size - 10, this.y, 10, 10 * 0.5)
    rect(this.x, this.y + this.size * 0.5 - 5, 10, 10 * 0.5)
    rect(this.x + this.size - 10, this.y + this.size * 0.5 - 5, 10, 10 * 0.5)
  }
}
// make light
class TrafficLight {
  constructor(x, y, d) {
    this.fram = 120;
    this.red = false;
  }
  // show red when we press and remain 2 second
  display() {
    if (keyIsPressed && keyCode === 32) { this.red = true }
    if (this.red === true) {
      fill("red")
      this.fram -= 1
    }
    // turn back to green 
    if (this.fram === 0) {
      this.red = false
      this.fram = 120
    }
    if (this.red === false) {
      fill("green")
    }

    // set up the light
    circle(windowWidth / 2, windowHeight / 2, 100)


  }
}