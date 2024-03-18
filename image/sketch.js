// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let lionL, lionR;
function preload(){
  lionL = loadImage("assets/lion-Left.png")
  lionR = loadImage("assets/lion-Right.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  image(lionL,mouseX,mouseY)
}
