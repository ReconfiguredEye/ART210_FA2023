let placeImgs = [];
let objectImgs = [];
let numPlaceImgs = 10; // Number of textures for the landscape layers
let numObjectImgs = 10; // Number of elements for the foreground

function preload() {
  // Preload place textures
  for (let i = 0; i < numPlaceImgs; i++) {
    placeImgs[i] = loadImage('data/places/place' + (i + 1) + '.jpeg');
  }
  // Preload object elements
  for (let i = 0; i < numObjectImgs; i++) {
    objectImgs[i] = loadImage('data/objects/object' + (i + 1) + '.jpeg');
  }
}


function setup() {
  createCanvas(800, 400); // Set the size of the canvas
  noLoop(); // The landscape does not need to be redrawn until the window is resized or other interaction
}



function draw() {
  background(50, 50, 100); // Sky color

  // Draw the landscape layers
  let baseHeight = height * 0.7;
  for (let i = 0; i < placeImgs.length; i++) {
    let place = placeImgs[i];
    let placeHeight = baseHeight - (i * 40); // Stagger the layers
    place.resize(width, 0); // Stretch to fit width of canvas
    image(place, 0, placeHeight);
  }

  // Draw the foreground objects
  for (let i = 0; i < objectImgs.length; i++) {
    let object = objectImgs[i];
    let scale = 0.5; // Scale down the size of the foreground objects
    let objectWidth = object.width * scale;
    let objectHeight = object.height * scale;
    let x = random(width - objectWidth);
    let y = baseHeight - (i * 20) - objectHeight;
    image(object, x, y, objectWidth, objectHeight);
  }
}

function mousePressed() {
  shuffle(objectImgs, true);
  redraw(); // Redraw the landscape with the new textures and elements
}

function keyPressed(){
  shuffle(placeImgs, true);
  redraw();
}
