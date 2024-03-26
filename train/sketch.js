// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 1;
let t = 1;
let a = 0;
function setup() {

  createCanvas(windowWidth, windowHeight); 
  
  
}
function drawRectangles(){

 for (let x =0; x<width; x+=rectWidth){  
  let a =noise(t);
  a = map(a,0,1,0,windowHeight)
t+=.01;  
    rectheight = x;
    if (rectheight > height){
      rectheight = height}
    
    rect(x,height,rectWidth,-a);
  }
}
function draw(){
 t= a+=0.1
  background(220);
drawRectangles()
}
function keyPressed(){
   if(key==='d'){
   rectWidth+=10
 }
   if(key==='a'){
   if(rectWidth>10){
   rectWidth-=10 }}
}
function flag (){


}