let records = [];  // Array to hold record images
let currentRecord = 0;  // Index for the current record
let angle = 0;  // Angle for rotation

function preload() {
  // Load your images here
  records[0] = loadImage('data/record1.png');
  records[1] = loadImage('data/record2.png');
  records[2] = loadImage('data/record3.png');
  // Add more as needed
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);  // Move to center
  rotate(angle);  // Rotate
  image(records[currentRecord], 0, 0, 200, 200);  // Draw current record
  angle += 0.02;  // Increment angle
}

function mousePressed() {
  // Change to the next record
  currentRecord = (currentRecord + 1) % records.length;
}
