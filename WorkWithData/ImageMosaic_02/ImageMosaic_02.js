let objectImages = [];
let placeImages = [];
let gridSize = 5;
let showObjects = false;
let lastUpdateTime = 0;
let updateInterval = 1000; // Time in milliseconds between updates

function preload() {
  // Load 10 images for each category
  for (let i = 1; i < 10; i++) {
    objectImages.push(loadImage('data/objects/object' + i + '.jpeg'));
    placeImages.push(loadImage('data/places/place' + i + '.jpeg'));
  }
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  let currentTime = millis();
  if (currentTime - lastUpdateTime > updateInterval) {
    updateImages();
    lastUpdateTime = currentTime;
  }
}

function updateImages() {
  background(220);

  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;
  let images = showObjects ? objectImages : placeImages;

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      let imageIndex = int(random(images.length));
      let img = images[imageIndex];
      image(img, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed() {
  showObjects = !showObjects;
  updateImages(); // Update immediately on click
}
