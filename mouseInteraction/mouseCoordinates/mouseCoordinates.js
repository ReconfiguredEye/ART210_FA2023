function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(220);
  
  //Display mouseX and mouseY coordinates
  fill(0);
  textSize(16);
  text(`mouse X: ${mouseX}`, 10, 20);
  text(`mouse Y: ${mouseY}`, 10, 40);
  
  //Rectangle follow the mouse with dynamic size
  let rectWidth = map(mouseX, 0, width, 10, 100);
  let rectHeight = map(mouseY, 0, height, 10, 100);
  
  fill(100, 200, 255);
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, rectWidth, rectHeight);
}
