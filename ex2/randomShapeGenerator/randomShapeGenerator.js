let shapes = ['ellipse', 'rect', 'triangle'];

function setup() {
  createCanvas(800, 600);
  noStroke();
}


function draw() {

}

function mousePressed(){
  background(255);
  let chosenShape = random(shapes);
  
  let r = random(255);
  let g = random(255);
  let b = random(255);
  
  let x = random(width);
  let y = random(height);
  let size = random(20, 100);
  
  fill(r, g, b);
  
  if (chosenShape === 'ellipse'){
    ellipse(x, y, size, size);
  } else if (chosenShape === 'rect') {
    rect(x, y, size, size);
  } else if (chosenShape === 'triangle') {
    triangle(x, y, x+size/2, y-size, x+size, y);
  }
}
