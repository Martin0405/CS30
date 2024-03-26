// RANDOM COLOR
// Martin
// 3/7/2024
//
// Extra for Experts:
// random color squre

//set variable
let rectheight = 40;
let x = 0;
let r = 0;
let g = 0;
let b = 0;
//set canvas and background
function setup() {
  createCanvas(windowWidth, windowHeight);
  fbackground();
  document.addEventListener("contextmenu", event => event.preventDefault())
}
function draw() {

}
// function to draw background and fit random color in to it
function fbackground() {
  let y = 0;

  while (y + rectheight <= height) {
    while (x + rectheight <= width) {
      r = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
      fill(r, g, 255)
      rect(x, y, rectheight, rectheight)
      x += rectheight;
    }
    x = 0
    y += rectheight;

  }
}
// change color when mouse preesed and become larger when left press smaller when right press
function mousePressed() {
  background(1)
  if (mouseButton === LEFT)
    rectheight += 10;
  if (mouseButton === RIGHT && rectheight > 10)
    rectheight -= 10;

  fbackground()
}
// change color when keyboard is pressed
function keyPressed() {
  fbackground()
}