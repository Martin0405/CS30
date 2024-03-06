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
  document.addEventListener("contextmenu", event => event.preventDefault())
} 
function draw() {

}
function fbackground() {
  let y = 0; 

  while (y <= height) {

  
    while (x<=width) {
 a = random(0,255);
 b = random(0,255);
 c = random(0,255);
       fill(a,b,c)
      rect(x, y, rectheight, rectheight)
      x += rectheight;
    }
    x=0
    y += rectheight;
  
  }
}
function mousePressed()
{ 
  if (mouseButton===LEFT)
  rectheight+=10;  
 if(mouseButton===RIGHT && rectheight>10 )
  rectheight-=10;
 
fbackground()
}
function keyPressed()
{
  fbackground()
}