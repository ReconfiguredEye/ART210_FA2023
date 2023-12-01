let objectImages = [];
let placeImages = [];
let gridSize = 15;
let showObjects = false;
let lastUpdateTime = 0;
let updateInterval = 1000; // Time in milliseconds between updates
let grid = []; // Array to hold the current images on the grid

function preload() {
  // Load 10 images for each category
  for (let i = 1; i < 10; i++) {
    objectImages.push(loadImage('data/objects/object' + i + '.jpeg'));
    placeImages.push(loadImage('data/places/place' + i + '.jpeg'));
  }
}

function setup() {
  createCanvas(800, 600);
  initGrid();
}

function draw() {
  let currentTime = millis();
  if (currentTime - lastUpdateTime > updateInterval) {
    updateSingleImage();
    lastUpdateTime = currentTime;
  }
  displayGrid();
}

function initGrid() {
  for (let x = 0; x < gridSize; x++) {
    grid[x] = [];
    for (let y = 0; y < gridSize; y++) {
      grid[x][y] = random(placeImages); // Initialize with place images
    }
  }
}

function updateSingleImage() {
  let x = int(random(gridSize));
  let y = int(random(gridSize));
  let images = showObjects ? objectImages : placeImages;
  grid[x][y] = random(images); // Update a random cell
}

function displayGrid() {
  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      image(grid[x][y], x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed() {
  showObjects = !showObjects;
  updateGrid();
}

function updateGrid(){
  let images = showObjects ? objectImages : placeImages;
  for (let x = 0; x < gridSize; x++){
    for (let y = 0; y < gridSize; y++){
      grid[x][y] = random(images);
    }
  }
}
