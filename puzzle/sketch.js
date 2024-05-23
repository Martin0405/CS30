// Puzzle Game Starter
// martin
// April 23, 2024
let mode = 0;
// the grid
let grid =
  [[0, 255, 0, 255, 0],
  [0, 0, 255, 0, 0],
  [0, 255, 255, 0, 255],
  [255, 255, 0, 255, 255]
  ];
//set the size
let squareSize = 100;
// set the rows and cols
const NUM_ROWS = 4; const NUM_COLS = 5;

let row, col;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
  randomGrid()
}
// show the puzzle
function draw() {
  col = getCurrentX();
  row = getCurrentY(); print(col, row);
  background(220);
  drawGrid();
  win()
  greenhelp()

}
//swap mode when press space
function keyPressed(){
  if (keyIsPressed && key === " ") {
    if (mode === 1) {
      mode = 0
    }
    else if (mode === 0) {
      mode = 1
    }
  }

}
function mousePressed() {


//when press shift only flip one
  if (keyIsPressed && keyCode === SHIFT) {
    flip(col, row)
  }
  // when mode is 1 flip a squre
  if (mode===1&&!keyIsDown(SHIFT)) {
    flip(col, row)
    if (col + 1 <= 4) {

      flip(col + 1, row);
    }
    if (row + 1 <= 3) {

      flip(col, row + 1);
    }
    if (row + 1 <= 3 && col + 1 <= 4) {

      flip(col + 1, row + 1);
    }
  }
  //when mode is 0 flip a cross
  else if(mode===0&&!keyIsDown(SHIFT)){
    flip(col, row);
    if (col + 1 <= 4) {

      flip(col + 1, row);
    }
    if (col - 1 >= 0) {

      flip(col - 1, row);
    }
    if (row + 1 <= 3) {

      flip(col, row + 1);
    }
    if (row - 1 >= 0) {

      flip(col, row - 1);
    }
  }
}
// flip the block to black and when white and the opposite
function flip(x, y) {
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function getCurrentY() {
  //determine current row of mouse, and return
  let constrainY = constrain(mouseY, 0, height - 1);
  return int(constrainY / squareSize);
}

function getCurrentX() {
  //determine the current column of the mouse, and return
  let constrainX = constrain(mouseX, 0, width - 1);
  return int(constrainX / squareSize);
}

function drawGrid() {
  // Read data from our 2D Array (grid), and use the 
  // numbers there to set the color for squares which are
  // arranged in a grid fashion.
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillValue = grid[y][x];
      fill(fillValue);
      //             x:   0 ,   1,     2,    3,     4  
      //squareSize*x:     0     50    100    150    200
      square(x * squareSize, y * squareSize, squareSize);
    }
  }
}
// random the puzzle every time refresh
function randomGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let r = int(random(0, 2))
      if (r === 0) {
        grid[y][x] = 255
      }
      else
        grid[y][x] = 0
    }
  }
}
// win condition every block black will -1 when reach -20 = win for white every block white +1 when reach 20 win
function win() {
  let score = 0
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {

      if (grid[y][x] === 255) { score += 1 }
      if (grid[y][x] === 0) { score -= 1 }


    }
  }
  // print win
  if (score === 20) {
    fill(0)
    textSize(100)
    text("win", 100, 100)
  }
  if (score === -20) {
    fill(255)
    textSize(100)
    text("win", 100, 100)
  }

}
// show the green help 
function greenhelp() {
  fill(0, 255, 0, 50)
// when mode is 1 show the cross flip help
  if (mode === 1) {
    fill(0, 255, 0, 50)
    square(col * squareSize, row * squareSize, squareSize);
    if (col + 1 <= 4) {
      square((col + 1) * squareSize, row * squareSize, squareSize);
    }

    if (row + 1 <= 3) {

      square(col * squareSize, (row + 1) * squareSize, squareSize);
    }

    if (col + 1 <= 3 && row + 1 <= 3) {

      square((col + 1) * squareSize, (row + 1) * squareSize, squareSize);
    }
  }
  // when mode is 0 show the squre flip help
  if (mode === 0) {
    square(col * squareSize, row * squareSize, squareSize);
    if (col + 1 <= 4) {
      square((col + 1) * squareSize, row * squareSize, squareSize);
    }

    if (col - 1 >= 0) {

      square((col - 1) * squareSize, row * squareSize, squareSize);
    }
    if (row + 1 <= 3) {

      square(col * squareSize, (row + 1) * squareSize, squareSize);
    }
    if (row - 1 >= 0) {

      square(col * squareSize, (row - 1) * squareSize, squareSize);
    }
  }
}
