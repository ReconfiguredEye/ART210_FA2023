let video;
let fish;
let targetColor;

// Variables for smoothed positions
let smoothedX = 0;
let smoothedY = 0;
let easing = 0.05; // Easing factor, adjust for more/less smoothing

function preload() {
  fish = loadImage('data/fish.png'); // Ensure you have a fish image in your directory
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  targetColor = color(255, 0, 0); // Red color. Change as needed.
}

function draw() {
  image(video, 0, 0);

  let avgX = 0;
  let avgY = 0;
  let count = 0;

  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let d = dist(r, g, b, red(targetColor), green(targetColor), blue(targetColor));
      if (d < 50) { // Threshold for color matching
        avgX += x;
        avgY += y;
        count++;
      }
    }
  }

  if (count > 0) {
    avgX = avgX / count;
    avgY = avgY / count;

    // Apply easing to the fish's movement
    smoothedX += (avgX - smoothedX) * easing;
    smoothedY += (avgY - smoothedY) * easing;

    // Draw the fish at the smoothed position
    image(fish, smoothedX, smoothedY, 50, 30); // Adjust size as needed
  }
}

function mousePressed() {
  targetColor = video.get(mouseX, mouseY);
  console.log("New target color: ", targetColor);
}
