// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let y;
  let x=0;
  let direction=0
  let mazetimer=2
  let mazeendtime=100
  let speed =99
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
    y=(windowHeight/2)*sin(45)+sin(45)*-100
}

function draw() {
  mazecreater()

}
function mazecreater(){
  push();
  noStroke()
  rotate(45);
  fill(255)
if(direction === 0){
 
 
   x+=speed
 }
 else y-=speed
 square(x,y,100)
 pop();
 mazetimer-=1
 if (mazetimer ===0){
  mazetimer=2
  direction=int(random(0,2))
 }
 mazeendtime-=1
 if(mazeendtime===0){
  speed=0


 }
} 
