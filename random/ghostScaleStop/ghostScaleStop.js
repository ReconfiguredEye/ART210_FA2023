let ghost;  // Ghost image
let ghosts = [];  // Array to hold ghost objects

function preload() {
  ghost = loadImage('data/ghost.png');  // Load your ghost image
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}

function draw() {
  background(0);

  // Update and draw each ghost
  for (let g of ghosts) {
    g.update();
    g.display();
  }
}

function mousePressed() {
  // Create a new ghost at a random location
  let newGhost = new Ghost(random(width), random(height));
  ghosts.push(newGhost);
}

class Ghost {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scale = 0.1;  // Initial scale
    this.maxScale = 1;  // Maximum scale
    this.growthRate = 0.01;  // How fast the ghost grows
  }

  update() {
    // Increase the scale
    if (this.scale < this.maxScale) {
      this.scale += this.growthRate;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scale);
    image(ghost, 0, 0);
    pop();
  }
}
