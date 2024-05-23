// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let y;
  let x=0;
function setup() {
  createCanvas(windowWidth, windowHeight);  
    angleMode(DEGREES);
    push();
    rotate(45);
    fill(0)
    square(0,0,100000)
    pop();
    push();
    rotate(-45);
    fill(0)
    square(0,0,100000)
    pop();
    y=(windowHeight/2)*sin(45)+sin(45)*-50
}

function draw() {
  mazecreater()

}
function mazecreater(){
  push();
  noStroke()
  rotate(45);
  fill(255)
if(x < windowWidth){
 
  square(x,y,50)
   x+=49
 }
 }
pop();
push();

