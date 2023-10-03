// Declare an array to hold the font names
let fontNames = ['Roboto', 'Oswald', 'Lato', 'Open Sans', 'Playfair Display'];

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // Loop through the array and display text with each font
  for (let i = 0; i < fontNames.length; i++) {
    textFont(fontNames[i]);
    textSize(24);
    fill(255, 100 + i * 30, 100);
    text(`Hello, ${fontNames[i]}!`, 10, 50 + i * 70);
  }
}
