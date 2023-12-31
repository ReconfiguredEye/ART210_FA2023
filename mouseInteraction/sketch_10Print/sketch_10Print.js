let x = 0;
let y = 0; 
let spacing = 20;

function setup() {
  createCanvas(1280, 720);
  background(0);
}


function draw() {
  stroke(255);
  strokeWeight(3);
  
  //decide which angle to draw
  if (random(1) < 0.5){
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
   
  x += spacing;
  
  if (x > width){
    x = 0;
    y += spacing;
  }
  
  if(y > height) {
    noLoop();
  }
  
}
