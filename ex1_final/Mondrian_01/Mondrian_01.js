function setup() {
  createCanvas(500, 500);
  background(250);
}


function draw() {
  stroke(0);
  strokeWeight(5);
  line(100, 0, 100, height);
  line(300, 0, 300, height);
  line(0, 100, width, 100);
  line(0, 300, width, 300);
  
  fill(255, 0, 0);
  rect(0, 0, 100, 100);
  
  fill(0, 0, 250);
  rect(300, 300, 150, 150);
  
  fill(255, 255, 0);
  rect(100, 300, 200, 100);
}
