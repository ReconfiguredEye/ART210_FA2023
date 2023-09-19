let img;

function preload() {
  img = loadImage('data/forest.jpg'); // Replace with your image path
}

function setup() {
  createCanvas(1000, 600);

}

function draw() {
  background(220);
  
  let tintVal = map(mouseX, 0, width, 0, 255);
  tint(255, tintVal);
  img.resize(width, height);
  image(img, 0, 0);
  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    fill(255, 0, 0);
    textSize(24);
    text('Hovering over image!', 210, 100);
  }
}
