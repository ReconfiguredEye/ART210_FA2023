let img;

function preload() {
  img = loadImage('data/forest.jpg'); // Replace with your image path
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
}
