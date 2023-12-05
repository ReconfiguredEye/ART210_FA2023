let video;
let targetColor;
let fish;

function preload() {
  fish = loadImage('data/fish.png'); // Ensure you have a fish image in your directory
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  targetColor = [255, 0, 0]; // Replace with the color of your object
}

function draw() {
  image(video, 0, 0);

  let worldRecord = 500; // Starting with a high distance
  let closestX = 0;
  let closestY = 0;

  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let d = dist(r, g, b, targetColor[0], targetColor[1], targetColor[2]);
      if (d < worldRecord) {
        worldRecord = d;
        closestX = x;
        closestY = y;
      }
    }
  }

  // Draw the fish at the closest color position
  image(fish, closestX, closestY, 50, 30); // Adjust size as needed
}

// Use this function to change the target color based on mouse position
function mousePressed() {
  targetColor = video.get(mouseX, mouseY);
  console.log("Target Color: ", targetColor);
}
