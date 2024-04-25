// Working with Forces  
// Mr. Scott
// April 22, 2024
//
// Making a simple particle system (using vectors)

let particles = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.2);
}

function mousePressed() {
  // particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(220);
  for (let i = 0; i < 2; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
  //loop by index
  for (let i = 0; i < particles.length; i++) {
    //0   1  2  3  4  5  6  
    let p = particles[i];
    p.move();
    p.display();
    //check for removal?
    if(p.alive===false){   //time to delete at position i
      particles.splice(i,1); //deletes at position, #items to del
      i--; //backtrack i so as not to skip any items
    }

  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y); this.size = 20;
    this.velocity = createVector(random(-3, 3), random(-5, -3));
    this.c = color(0, 100, random(150, 225), 100);
    this.alive = true;
  }

  move() {
    //Apply force first (in this case, add gravity to velocity)
    this.velocity.add(gravity);
    //also there could be other forces (wind, friction, )

    //apply our velocity to our position
    this.position.add(this.velocity);
    if(this.position.y > height){
      //gone off the bottom
      this.alive = false;  //marking for deletion
    }
    if(this.position.x < 0){ //reached the left edge
      this.position.x = 0;
      this.velocity.x *= -1;
    }
  }

  display() {
    //draw our sprite
    fill(this.c); noStroke();
    push();
    translate(this.position.x, this.position.y);
    circle(0, 0, this.size);
    pop();
  }

}