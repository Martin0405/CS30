// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let Walkers=[];
const numberwalkers=3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //set up some walker objects
  for(let i = 0; i < numberwalkers; i++){
    let c = color(random(255),random(255),random(255));
    let WI=width/2;
    let HI=height/2;
    Walkers.push(new Walker(WI,HI,c));
    height+=25
}
}

function draw() {
  background(220);
  Walkers[0].move();
  Walkers[0].display();
  Walkers[1].move();
  Walkers[1].display();
  Walkers[2].move();
  Walkers[2].display();
}

class Walker{
constructor(x,y,c){
  this.x=x;this.y=y;this.c=c;
  this.speed=random(-1,1);
  this.size=10;

}
display(){
circle(this.x, this.y, this.size)
}
move(){
  this.x+=this.speed;
}
}