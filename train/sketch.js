// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//variables
let rectWidth = 1;
let t = 1;
//t=time
let alength = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);

}
//draw the rectangle use noise
function drawRectangles() {
  let biggest = 0;
  let biggestx = 0;
  for (let x = 0; x < width; x += rectWidth) {
    let alength = noise(t);
    alength = map(alength, 0, 1, 0, windowHeight)
    t += .01;
    rectheight = x;
    if (rectheight > height) {
      rectheight = height
    }

    rect(x, height, rectWidth, -alength);
    if (alength > biggest) {
      biggest = alength;
      biggestx = x;
      print(biggestx)

    }
  }

  flag(biggestx, -biggest + windowHeight - 25);
}
// draw the rectangle determine the speed
function draw() {
  t = alength += .01
  background(220);
  drawRectangles()
}
function keyPressed() {
  if (key === 'd') {
    rectWidth += 10
  }
  if (key === 'a') {
    if (rectWidth > 10) {
      rectWidth -= 10
    }
  }



}


//create flage
function flag(x, y) {
  triangle(x, y, x, y - 50, x + 40, y);
  line(x, y, x, y + 50)

}
