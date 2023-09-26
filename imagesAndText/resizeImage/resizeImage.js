let img;

function preload() {
  img = loadImage('data/forest.jpg'); // Replace with your image path
}

function setup() {
  createCanvas(800, 600);
  img.resize(width, height);
  image(img, 0, 0);
}
