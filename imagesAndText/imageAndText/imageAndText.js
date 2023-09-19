let img;

function preload() {
  img = loadImage('data/forest.jpg'); // Replace with your image path
}

function setup() {
  createCanvas(1000, 600);
  img.resize(width, height);
  image(img, 0, 0);
  
  fill(255);
  textSize(32);
  text('Hello World', width/2, height/2); // Replace with your desired text
}
