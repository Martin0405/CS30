// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
drawc()

}
function drawc(){
  translate(width/2,height/2);
  push();
  circle(0,0,300)
  let count = 0; let angle = 6;
  while(count < 60){
    if(count%5===0){
      strokeWeight(3)
      line(110,0,140,0)
    }
    else{
      strokeWeight(1)
      line(125,0,140,0)
    }
    rotate(angle)
    count++
  }
  pop();
}
function drawch(){

}