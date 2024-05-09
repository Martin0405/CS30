// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles=[];
let level=[
  []
];
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function preload(){
  for(let i=0;i<4;i++)
  TRIANGLES.push(loadImage("assets/"+i+".PNG"))
}
function draw() {
  background(220);
}
