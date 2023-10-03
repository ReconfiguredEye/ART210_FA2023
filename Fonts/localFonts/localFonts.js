let customFont;

function preload() {
  // Make sure to include the correct path to your font file
  customFont = loadFont('assets/AlexBrush-Regular.ttf');
}

function setup() {
  createCanvas(700, 400);
  background(0);
}

function draw() {
  // Using the external font
  textFont(customFont);
  textSize(48);
  fill(255, 100, 100);
  text('Hello, custom font!', 10, 100);
}
