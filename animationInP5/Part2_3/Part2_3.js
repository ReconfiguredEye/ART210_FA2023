let x = 0;
let velocity = 2;
let acceleration = 1;

function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  fill(255);
  ellipse(x, height/2, 50, 50);
  
  if (mouseIsPressed){
    velocity += acceleration;
  }
  
  x += velocity;
  
  if (x > width || x < 0){
    velocity *= -1;
    acceleration *= -1;
  }
  
  //if (velocity < 0){
   // acceleration *= -1;
  //}
  
}
