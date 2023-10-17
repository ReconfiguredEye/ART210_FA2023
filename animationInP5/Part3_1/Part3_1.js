let x = 50;
let y = 50;
//let sizeX = 50;
//let sizeY = 50;
let xSpeed = 2;
let ySpeed = 3;
let col = [255, 255, 255];
//let velocity = 2;
//let acceleration = 1;

function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  fill(col);
  ellipse(x, y, 50, 50);
  
  x += xSpeed;
  y += ySpeed;
  
  if (x > width-25 || x < 25){
    xSpeed *= -1;
    col = [random(255), random(255), random(255)];
    //sizeX += 5;
  }
  
  if (y > height-25 || y < 25){
    ySpeed *= -1;
    col = [random(255), random(255), random(255)];
    //sizeY += 5;
  }
  
  
}
