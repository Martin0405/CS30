// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gotillaIdle=[]
let goriallaSwipe=[]
let spiralImages=[]
let spirals=[]
function preload(){
for(let i=0;i<=15;i++){
  if(i<10){
    spiralImages.push(loadImage("assets/Circle/Circle Animation0"+i+".png"))
  }
  else{
    spiralImages.push(loadImage("assets/Circle/Circle Animation"+i+".png"))
  }
  }
  for(let i=1;i<=6;i++){
    gotillaIdle.push(loadImage("idle"+i+".png"))
  }
  for(let i=1;i<=6;i++){
    goriallaSwipe.push(loadImage("swipe"+i+".png"))
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  for(leti=0;i<spirals.length;i++){
    let s=spirals[1]
    s.display()
    ig 
  }
}
function mosePressed(){
  spirals.push(new Spiral(mouseX,mouseY))
}
class Spiral{
  constructor(x,y){
    this.pos=createVector(x,y)
    this.currentFrame=0;
    this.active=true
  }
  display(){
    if (this.currentFrame>15){
      this.active=false
    }
    else{
      image(spiralImages[this.currentFrame],this.pos.x,this.pos.y)
      if(frameCount%3===0){
        this.currentFram++
      }
    }
  }
}