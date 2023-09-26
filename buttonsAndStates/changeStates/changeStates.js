let button, button2, button3;

let state = 0;

function setup() {
  createCanvas(400, 400);
  
  //generate random ellipses
  button = createButton('Generate Ellipses');
  button.position(20, 20);
  button.mousePressed(drawRandomCircle);
  
  //generate random rectangles
  button2 = createButton('Generate Rectangle');
  button2.position(20, 50);
  button2.mousePressed(drawRandomRectangle);
  
  //next page button
  button3 = createButton('Next Page');
  button3.position(20, 80);
  button3.mousePressed(nextPage);
}


function draw() {
  if(state === 0){
   button.show();
   button2.hide();
  }
  else if (state === 1){
    button.hide();
    button2.show();
  }
}

function drawRandomCircle(){
  let x = random(width);
  let y = random(height);
  let r = random(10, 50);
  let col = color(random(255), random(255), random(255), random(255));
  fill(col);
  ellipse(x, y, r, r);
}

function drawRandomRectangle(){
  let x = random(width);
  let y = random(height);
  let w = random(10, 50);
  let h = random(10, 50);
  let col = color(random(255), random(255), random(255), random(255));
  fill(col);
  rect(x, y, w, h);
}

function nextPage(){
  state = (state + 1) % 2;
  background(random(255), random(255), random(255));
}
