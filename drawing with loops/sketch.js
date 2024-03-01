// Drawing with Loops 1
// Mr. Scott
// February 27, 2024
// Using Loops + Arrays to create some visualizations

//Global Variables
let xPos, yPos;   //declaration only...

function setup() {
  createCanvas(10000 , 10000);
  xPos = [] ; yPos = [];
   dot ();
   dot2();
   dot3();
   dot4();
  //xPos = [width*0.05, width*0.95,width*0.05,width*0.95];
 // yPos = [height*0.05,height*0.05,height*0.95,height*0.95];
}
function dot (){
  fill(100,100,10)
  for(let x = 10; x<width; x+=1){
    xPos.push(x); 
    yPos.push(height)}
}
function dot2 (){
  for(let x = 10; x<width; x+=1){
    xPos.push(x); 
    yPos.push(0)}
}
function dot3 (){
  for(let y = 10; y<height; y+=1){
    xPos.push(width); 
    yPos.push(y)}
}
function dot4 (){
  for(let y = 10; y<height; y+=1){
    xPos.push(0); 
    yPos.push(y)}
}



function draw() {
  background(220);
  cornersAndMouseLoop();
}

function mousePressed(){
  //this calls automatically on a mousePress
  xPos.push(mouseX);
  yPos.push(mouseY);
}

function cornersAndMouseLoop(){
  // a hopefully slightly more elegant version...
  let i = 0;
  while(i < xPos.length){
    let x = xPos[i];
    let y = yPos[i];
    circle(x,y,20);
    line(x,y,mouseX,mouseY);
    i++; 
  }
  circle(mouseX, mouseY, 20);
}

function cornersAndMouse(){
  // draw some circles near each of the four corners
  // and connect some lines from there to the mouse position
  fill(255);
  circle(width*0.05, height*0.05, 20);
  circle(width*0.95, height*0.05, 20);
  circle(width*0.05, height*0.95, 20);
  circle(width*0.95, height*0.95, 20);
  circle(mouseX, mouseY, 20);
  //lines
  line(width*0.05, height*0.05, mouseX,mouseY);
  line(width*0.95, height*0.05,  mouseX,mouseY);
  line(width*0.05, height*0.95,  mouseX,mouseY);
  line(width*0.95, height*0.95,  mouseX,mouseY);
}