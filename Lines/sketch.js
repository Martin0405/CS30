// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

gridSpacing=10;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  DL()
}
function L(x,y,s){
  line(x-s/2,y+s/2,x+s/2,y-s/2)
}
function DL()
{
  for (let x = 0;x<width;x+=gridSpacing){
  for (let y = 0;y<length;y+=gridSpacing){
L(x,y,10);
  }
}
}
