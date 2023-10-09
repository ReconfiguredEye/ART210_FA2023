let CloudsImg;
let NotesImg;
let currentImg = null; // This will start as null (no image displayed)

let button;
let button2;

function preload(){
  CloudsImg = loadImage('data/clouds.jpg');
  NotesImg = loadImage('data/notes.jpg');
}

function setup(){
  createCanvas(max(CloudsImg.width, NotesImg.width), max(CloudsImg.height, NotesImg.height)); // This sets the canvas size to the largest image dimensions
  background(255);  // Set an initial blank background
  
  button = createButton('Swan Lake');
  button.position(20, 20);
  button.mousePressed(loadClouds);
  
  button2 = createButton('Notes');
  button2.position(120, 20);
  button2.mousePressed(loadNotes);
}

function draw(){
  if(currentImg) { // Check if there's an image to display
    image(currentImg, 0, 0);
  }
}

function loadClouds() {
  currentImg = CloudsImg;
  redraw();  // This forces the draw loop to execute once, updating the canvas
}

function loadNotes() {
  currentImg = NotesImg;
  redraw();  // This forces the draw loop to execute once, updating the canvas
}
