// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

/*let y;
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
// Using PeasyCam for 2D Camera Only
 
// By Default, mouse buttons are bound to camera movements (Rotate, Pan, Zoom)
// Since it wasn't obvious how to disable this behavior through a library method,
// I found it worked easily enough to modify the library. Comment out lines
// 180-183 in p5.easycam.js to disable this behavior. Then if we are careful with
// camera moves, we can keep everything lined up against the 2D plane.
*/

let easycam;
let playerX, playerY;
let x; 
let y;
let timer = 200;
let direction = 0;
let grid =
[[255, 0, 255, 0, 255],
[0, 255, 0, 255, 0]
];
let mazeendtime=10
let speed =5
let squareSize=20
const NUM_ROWS = 2; const NUM_COLS = 5;

let row, col;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
 x= 0;
  y = 0;
  easycam = createEasyCam();
  angleMode(DEGREES)

  playerX = 0;
  playerY = 0;
  mazecreater()

}

let tiles = []
function draw() {
  //finishedline()
  noStroke();
  //Level
  background(0);
  fill(255);
  mazedraw()
  finishedline();
  print("mouse: ",mouseX,mouseY,get(mouseX,mouseY),"\t player: ",get(windowWidth/2,windowHeight/2),windowWidth/2,windowHeight/2);
  mazecharacter()



 

  //Camera

    easycam.panX(sqrt((5*5)/2));
    if(mouseIsPressed){
    easycam.panY(sqrt((5*5)/2));
    }
    else
    easycam.panY(-sqrt((5*5)/2));

}

function mazecreater(){
tiles.push([x, y])
  while (timer >= 0) {  
    x += sqrt((100*100)/2);
    direction = int(random(0, 2))
    if (direction === 0) {
      y += sqrt((100*100)/2);
    }
    if (direction === 1) {
      y -= sqrt((100*100)/2);
    }
    tiles.push([x, y])

    timer--;
  }
} 
function mazedraw(){
for(let t of tiles){
  push();
  translate(t[0],t[1])
  rotate(45)
  square(0,0,100)
  pop();
}
}

function finishedline(){
  push();
  translate(tiles[201][0], tiles[201][1])
  if (direction===1){
    rotate(45)
     for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      fill(grid[row][col]);
      square(0+col* squareSize,0+row * squareSize,squareSize);
  }}}
  else {rotate(-45)
  
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      fill(grid[row][col]);
      square(-100+col* squareSize,100+row * squareSize,squareSize);
  
    }
  }}pop();}
  function mazecharacter(){
   push();
    rotate(45);
    fill(0,0,255)
    square(playerX,playerY)
  if(mouseIsPressed){
    playerX+=speed
   }
   else playerY-=speed
   square(playerX,playerY,10)
   if (get(windowWidth/2,windowHeight/2)===(0)){
    print("game over")
   }

   pop();
    }
    //