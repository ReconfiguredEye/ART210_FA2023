let img; // Variable to store the image
let backgroundImg;
let x, y, imgScale;
const minScale = 0.05; // Minimum scale for the image
const maxScale = 0.2; // Maximum scale for the image
const horizonY = 120; // Y position of the horizon line
 
function preload() {
  img = loadImage('data/chicken.png'); // Replace with your image path
  backgroundImg = loadImage('data/background.png');
}
 
function setup() {
  createCanvas(400, 400);
  // Initial position and scale of the image
  x = width / 2;
  y = 350;
  imgScale = maxScale;
}
 
function draw() {
  background(220);
  image(backgroundImg, width/2, height/2, width, height);
 
  // Draw horizon line for reference
  stroke(150);
 
  // Display the image
  imageMode(CENTER);
  image(img, x, y, img.width * imgScale, img.height * imgScale);
}
 
function keyPressed() {
  if (keyCode === UP_ARROW) {
    // Decrease scale to simulate moving away
    imgScale *= 0.95;
    imgScale = max(imgScale, minScale);
 
    // Move the image upwards towards the horizon
    y -= (y - horizonY) * 0.1;
  } else if (keyCode === DOWN_ARROW) {
    // Increase scale to simulate coming closer
    imgScale /= 0.98;
    imgScale = min(imgScale, maxScale);
 
    // Move the image downwards away from the horizon
    y += (height - y) * 0.03;
  }
}
