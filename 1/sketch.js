// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectheight = 40;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
fbackground();
}
function fbackground(){
  let y = 0;
  while (y < height){
    fill(map(y,0,height,0,225))
rect(0,y,width,rectheight)
y+=rectheight;
  }
}
