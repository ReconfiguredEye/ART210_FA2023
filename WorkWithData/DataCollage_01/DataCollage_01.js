let objects = [];
let objImgs = 10;

function preload() {
  //Preload our images with a loop
  for (let i = 0; i < objImgs; i++){
    objects[i] = loadImage('data/objects/object' + (i + 1) + '.jpeg');
  }
}

function setup() {
  createCanvas(1280, 720);
  noLoop();
}


function draw() {
  background(50, 50, 100);
  
  let baseHeight = height * 0.7;
  
  for (let i = 0; i < objImgs; i++){
    let object = objects[i];
    //let objectHeight = baseHeight - (i * 20);
    let objectWidth = random(0, width);
    let objectHeight = random(0, height);
    
    object.resize(random(200, 500), random(200, 500));
    
    image(object, objectWidth, objectHeight);
  }
}

function mousePressed(){
  shuffle(objects, true);
  redraw();
}
