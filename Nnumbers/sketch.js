// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let segmentLength = 20;
let ballY=200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function siegline(){
strokeWeight(15);
let x =0;
let greyTime = 0;
while (x< width){
  let greyVaulue = random(0, 255);
  let b = random(0,255);
  greyVaulue = noise(greyTime);
  greyVaulue = map(greyVaulue,0,1,0,255)
  greyTime+=.1;
  stroke(greyVaulue);
  line(x,height/2,x+segmentLength,height/2);
  x+=segmentLength;
}
}
function ball(){
  ySpeed = random(-20,20);
  ballY+=ySpeed;
  circle(width*0.7,ballY,30)
}
function draw() {
  background(220);
  siegline();
  ball();
}
