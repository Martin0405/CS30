// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let easycam;
let playerX, playerY;
let x;
let y;
let timer = 200;
let direction = 0;
let grid =
  [[254, 1, 254, 1, 254],
  [1, 254, 1, 254, 1]
  ];
let gameactive = true;
let mazeendtime = 10
let speed = 5
let squareSize = 20
const NUM_ROWS = 2; const NUM_COLS = 5;

let row, col;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
  x = 0;
  y = 0;
  easycam = createEasyCam();
  angleMode(DEGREES)

  playerX = 0;
  playerY = 0;
  mazecreater()

}

let tiles = []
function draw() {
  background(255);
  noStroke();
  //Level
  
background(0); 
  fill(255);
    mazedraw()
finishedline();
  mazecharacter()
keyPressed()


  //Camera
  if (gameactive === true) {
    easycam.panX(sqrt((speed * speed) / 2));
    if (mouseIsPressed) {
      easycam.panY(sqrt((speed * speed) / 2));
    }
    else
      easycam.panY(-sqrt((speed * speed) / 2));
  }
}

function mazecreater() {
  tiles.push([x, y])
  x += sqrt((100 * 100) / 2);
  y -= sqrt((100 * 100) / 2);
  tiles.push([x, y])

  while (timer >= 0) {
    x += sqrt((100 * 100) / 2);
    direction = int(random(0, 2))
    if (direction === 0) {
      y += sqrt((100 * 100) / 2);
    }
    if (direction === 1) {
      y -= sqrt((100 * 100) / 2);
    }
    tiles.push([x, y])

    timer--;
  }
}
function mazedraw() {
  for (let t of tiles) {
    push();
    translate(t[0], t[1])
    rotate(45)
    square(0, 0, 100)
    pop();
  }
}
function preload() {
  font = loadFont('assets/bahnschrift.ttf');
}

function finishedline() {
  push();
  translate(tiles[202][0], tiles[202][1])
  if (direction === 1) {
    rotate(45)
    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
        fill(grid[row][col]);
        square(0 + col * squareSize, 0 + row * squareSize, squareSize);
      }
    }
  }
  else {
    rotate(-45)

    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
        fill(grid[row][col]);
        square(-100 + col * squareSize, 100 + row * squareSize, squareSize);

      }
    }
  } pop();
}
function mazecharacter() {
  push();
  rotate(45);
  fill(0, 0, 255)
  square(playerX, playerY)
  if (get(windowWidth / 2, windowHeight / 2)[0] === 0) {
    speed = 0   
     textFont(font);
    textSize(24);
    fill(255, 0, 0)
    push();
    translate(playerX, playerY)
    rotate(-45)
    text('game over', 0,0);
    pop();
    gameactive = false;
  }
  if (get(windowWidth / 2, windowHeight / 2)[0] === 1 || get(windowWidth / 2, windowHeight / 2)[0] === 254 ){
    speed = 0   
    textFont(font);
   textSize(24);
   fill(255, 0, 0)
   push();
   translate(playerX, playerY)
   rotate(-45)
   text('game win', 0,0);
   pop();
   gameactive = false;
  }
  if (mouseIsPressed) {
    playerX += speed
  }
  else playerY -= speed


  square(playerX, playerY, 10)

  pop();
  
}


function keyPressed() {
  rotate(45);
  textFont(font);
  textSize(24);
  fill(255, 0, 0)
  if (keyIsPressed&&key === 'd') {
    speed = 8
    push();
    translate(playerX, playerY)
    rotate(-45);
    text('speed 2', 0,-50);
    pop();
  }
  if (keyIsPressed&&key === 'a') {
     speed=5
      push();
      translate(playerX, playerY)
      rotate(-45);
      text('speed 1', 0,-50);
      pop();
  
  }



}