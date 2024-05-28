// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let y;
  let x=0;
  let direction=0
  let mazetimer=2
  let mazeendtime=10
  let speed =99
  let grid =
  [[255, 0, 255, 0, 255],
  [0, 255, 0, 255, 0]
  ];
  const NUM_ROWS = 2; const NUM_COLS = 5;

let row, col;

  let squareSize = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);  
    angleMode(DEGREES);
    push();
    rotate(45);
    fill(0)
    square(0,0,100000)
    pop();
    push();
    rotate(-45);
    fill(0)
    square(0,0,100000)
    pop();
    y=(windowHeight/2)*sin(45)+sin(45)*-100
    noSmooth()
}

function draw() { 
   finishedline()
  mazecreater()
let cams=1000

}
function mazecreater(){
  push();
  noStroke()
  rotate(45);
  fill(255)
if(direction === 0){
 
 
   x+=speed
 }
 else y-=speed
 square(x,y,100)
 pop();
 mazetimer-=1
 if (mazetimer ===0){
  mazetimer=2
  direction=int(random(0,2))
 }
 mazeendtime-=1
 if(mazeendtime===0){
  speed=0


 }
} 
function finishedline(){
  push();
  mazeendtime-=1
  if(mazeendtime===0){
   speed=0}
  if (direction===1){
  rotate(45)}
  else rotate(-45)
  if(speed===0){
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      let fillValue = grid[row][col];
      fill(fillValue);
      square(x+col* squareSize, y+row * squareSize, squareSize);
      print(x,y)
    }
  }}
  pop();
}
