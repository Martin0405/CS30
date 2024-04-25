// Generative Art - Repetition
// Martin
// 04/25, 2024

let xlength;
let ylength;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  background(255);
  angleMode(DEGREES);
  strokeWeight(10);
}

function randomElement() {
  let startpointx = random(-300, 300)
  let startpointy = random(-300, 300)
  xlength = random(0, 40);
  if (dist(startpointx, startpointy, 0, 0) < 300) {
    line(startpointx, startpointy, startpointx + xlength, startpointy);
  }
}
function randomElement2() {
  let startpointx = random(-300, 300)
  let startpointy = random(-300, 300)
  ylength = random(0, 40);
  if (dist(startpointx, startpointy, 0, 0) < 300) {
    line(startpointx, startpointy, startpointx, startpointy + ylength);
  }
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 0; i < 200; i++) {
    randomElement();
    randomElement2();
  }
}