let x;
let y;
let circleSize;
let rectSize;
let rectColor;
let circleColor;


function setup() {
  createCanvas(800, 600);
  
  x = width / 2;
  y = height / 2;
  circleSize = 50;
  rectSize = 100;
  rectColor = color(255, 0, 0);
  circleColor = color(0, 0, 255);
  
}


function draw() {
  background(200);
  
  fill(rectColor);
  
  rect(x - rectSize / 2, y - rectSize / 2, rectSize, rectSize);
  
  fill(circleColor);
  
  ellipse(x, y, circleSize, circleSize);
  
  
}
