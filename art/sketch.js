// Generative Art - Repetition
// Mr. Scott
// March 25, 2024

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //just for now
  background(255);
  angleMode(DEGREES);
  stroke(0, 80);
}

function randomElement(currentLen) {
  //create one irregular line using
  //rotate transformations
  push();  //isolate the coordinate transforms
  rotate(random(360));
  while (currentLen > 5) {
    rotate(random(-40, 40));
    line(0, 0, 0, currentLen);
    translate(0, currentLen);
    currentLen *= 0.75;
  }
  pop();
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 0; i < 100000; i++) {
    randomElement(random(20,70));
  }

}