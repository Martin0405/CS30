// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let t =0;
  let a = ramdom(0,255);
  a=noise(t);
  a = map(a,0,1,0,255)
t+=.1;
  background(220);
  circle(width/2,length/2,20)

}
