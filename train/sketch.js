// terrain
// martin
// 04092024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//variables
let rectWidth = 1;
let t = 1;
//t=time
let alength = 0;
//set up canvas to window size
function setup() {

  createCanvas(windowWidth, windowHeight);

}
//draw the rectangle use noise
function drawRectangles() {
  // all the variables
  let biggest = 0;
  let biggestx = 0;
  let allheight = 0;
  let allwidth = 0;
  let aveheight = 0
  //draw the rectangle use noise
  for (let x = 0; x < width; x += rectWidth) {
    let alength = noise(t);
    alength = map(alength, 0, 1, 0, height)
    t += .01;
    rectheight = x;
    if (rectheight > height) {
      rectheight = height
    }
    //find the heighest bar and set flag there
    rect(x, height, rectWidth, -alength);
    if (alength > biggest) {
      biggest = alength;
      biggestx = x;
    }
    allheight += alength;
  }
  //find the averageheight of the bars
  allwidth = width / rectWidth;
  aveheight = allheight / allwidth;
  // draw the averageheight line
  line(0, height - aveheight, width, height - aveheight)
  print(aveheight)
  flag(biggestx, -biggest + height - 25);
}
// draw the rectangle and determine the speed
function draw() {
  t = alength += .01
  background(220);
  drawRectangles()
}
// Make the retangle smaller and bigger by a and d
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

