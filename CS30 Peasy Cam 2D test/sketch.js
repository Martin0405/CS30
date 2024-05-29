// Using PeasyCam for 2D Camera Only
 
// By Default, mouse buttons are bound to camera movements (Rotate, Pan, Zoom)
// Since it wasn't obvious how to disable this behavior through a library method,
// I found it worked easily enough to modify the library. Comment out lines
// 180-183 in p5.easycam.js to disable this behavior. Then if we are careful with
// camera moves, we can keep everything lined up against the 2D plane.


let easycam;
let playerX, playerY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);

  easycam = createEasyCam();
  
  playerX = 0;
  playerY = 0;
  
} 


function draw(){
	//Level
  background(0);
  fill(255);
  square(0,0,300);
  
  //Character Movement
  if(keyIsDown(65)){  //A
    playerX -= 5;
  }
  if(keyIsDown(68)){  //D
    playerX += 5;
  }
  
  //Character Draw
  fill(0);
  square(playerX, playerY, 20);

  //Camera
  if(keyIsDown(LEFT_ARROW)){
    easycam.panX(10);
  }
  if(keyIsDown(RIGHT_ARROW)){
    easycam.panX(-10);
  }

}


