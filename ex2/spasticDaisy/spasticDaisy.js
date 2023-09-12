let currentFlowerType;

function setup() {
  createCanvas(800, 600);
  
  strokeWeight(2);
  
  currentFlowerType = 'daisy';
}


function draw() {
  //background (200);
  
  if (mousePressed) {
    let size = random(20, 50);
    if (currentFlowerType === 'daisy'){
      drawDaisy(mouseX, mouseY, size);
    } else {
      drawTulip(mouseX, mouseY, size);
    }
  }
}

function mousePressed() {
  currentFlowerType = currentFlowerType === 'daisy' ? 'tulip' : 'daisy';
}

function drawDaisy(x, y, size){
  fill(255, 255, 0);
  ellipse(x, y, size, size);
  fill(255);
  for (let angle = 0; angle < TWO_PI; angle += PI / 6){
    let px = x + cos(angle) * size / 2;
    let py = y + sin(angle) * size / 2;
    ellipse(px, py, size/3, size/2); //petals
  }
}

function drawTulip(x, y, size){
  fill(255, 0, 0);
  for (let angle = 0; angle < TWO_PI; angle += PI / 6){
    let px = x + cos(angle) * size / 2;
    let py = y + sin(angle) * size / 2;
    ellipse(px, py, size/3, size/2);
  }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
