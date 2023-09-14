//array to store flowers
let flowers = [];



function setup() {
  createCanvas(800, 600);
  strokeWeight(2);
}


function draw() {
  background(220);
  
  //Draw all the flowers
  for(let flower of flowers){
    //increase the flower's rotation angle
    flower.angle += 0.02;
    if (flower.type === 'daisy'){
      drawDaisy(flower.x, flower.y, flower.size, flower.angle);
    } else {
      drawTulip(flower.x, flower.y, flower.size, flower.angle);
    }
  }
}

//this is a standard p5.js function called every time a mouse click is registered
function mousePressed() {
  //create a flower at mouse position
  let flower = {
    x: mouseX,
    y: mouseY,
    size: random(20, 50),
    type: random(1) < 0.5 ? 'daisy' : 'tulip',
    angle: 0
  };
  
  flowers.push(flower);
}

// drawDaisy custom function that draws a Daisy at a specific position, size, rotation
function drawDaisy(x, y, size, angle){
  push(); //save the current transform matrix
  translate(x, y); //move the origin to the flower's position
  rotate(angle);
  
  fill(255, 255, 0); //yellow
  ellipse(0, 0, size, size) //center
  fill(255);
  for(let a = 0; a < TWO_PI; a += PI / 8){
    let px = cos(a) * size / 2; //gets variable for petals
    let py = sin(a) * size / 2; //gets variable for petals
    ellipse(px, py, size / 2, size / 2);//draws our petals
  }
  pop(); //restore normal matrix function
}

function drawTulip(x, y, size, angle){
  push(); //save the current transform matrix
  translate(x, y); // move origin to mouse x and y
  rotate(angle); //rotate the image
  
  fill(255, 0, 0);
  for (let a = 0; a < TWO_PI; a += PI / 6) {
    let px = cos(a) * size / 2; //get variable for petals
    let py = sin(a) * size / 2; //get variable for petals
    ellipse(px, py, size / 3, size / 2); //draw petals
  }
  fill(0, 128, 0); //Green
  rect(0 - size/20, 0, size /10, size /2); //stem
  
  pop();
}
