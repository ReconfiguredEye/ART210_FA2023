let button, button2, button3;

let state = 0;

function setup() {
  createCanvas(400, 400);
  
  //background color button
  button = createButton('Change Background');
  button.position(20, 20);
  button.mousePressed(changeBG);
  
  //draw circle button
  button2 = createButton('Draw Circle');
  button2.position(20, 50);
  button2.mousePressed(drawCircle);
  
  //next page button
  button3 = createButton('Next Page');
  button3.position(20, 80);
  button3.mousePressed(nextPage);
}


function draw() {
  if(state === 0){
   
  }
  else if (state === 1){
    
  }
}

function changeBG(){
  let col = color(random(255), random(255), random(255));
  background(col);
}

function drawCircle(){
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), random(50), random(50));
}

function nextPage(){
  state = (state + 1) % 2;
}
