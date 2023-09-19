let img;

function preload() {
  img = loadImage('data/forest.jpg'); // Replace with your image path
}

function setup() {
  createCanvas(800, 600);
  
  let croppedImg = img.get(50, 50, 400, 400);
  image(croppedImg, 0, 0);
  
}

function draw() {
  
  
}
