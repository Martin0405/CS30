// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectheight = 40;
let x = 0;
let a = 0;
let b = 0;
let c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fbackground();
} 
function draw() {
  
}
function fbackground() {
  let y = 0; 

  while (y <= height) {

  
    while (x<=width) {
      //if (mouseIsPressed)
      //{
 a = random(0,255);
 b = random(0,255);
 c = random(0,255);
//} 
       fill(a,b,c)
      rect(x, y, rectheight, rectheight)
      x += rectheight;
    }
    x=0
    y += rectheight;
  
  }
}
