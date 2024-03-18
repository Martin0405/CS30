// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let t =0;
function setup() {
  createCanvas(windowWidth, windowHeight); 

}

function draw() {
  background(220); 
  let a = random(0,255);
  a=noise(t);
  a = map(a,0,1,0,255)
t+=.1;  
circle(width/2,length/2,20+a)  


}
