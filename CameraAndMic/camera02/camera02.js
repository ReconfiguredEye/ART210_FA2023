let video;
let effectRadiusSlider, effectIntensitySlider;
let flipButton;
let flip = false; // Variable to track the flip state

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // User Controls
  createP('Effect Radius:');
  effectRadiusSlider = createSlider(0, 200, 50);
  createP('Effect Intensity:');
  effectIntensitySlider = createSlider(0, 255, 100);

  // Flip Control
  flipButton = createButton('Flip Image');
  flipButton.mousePressed(toggleFlip); // Function to toggle flip state
}

function toggleFlip() {
  flip = !flip; // Toggle the flip state
}

function draw() {
  video.loadPixels();
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let videoX = flip ? width - x - 1 : x; // Flip the x-coordinate if flip is true
      let videoIndex = (videoX + y * width) * 4;

      let d = dist(x, y, mouseX, mouseY);

      if (d < effectRadiusSlider.value()) {
        pixels[index] = video.pixels[videoIndex] + effectIntensitySlider.value();
        pixels[index + 1] = video.pixels[videoIndex + 1] - effectIntensitySlider.value();
        pixels[index + 2] = video.pixels[videoIndex + 2] * 1.5;
      } else {
        pixels[index] = video.pixels[videoIndex];
        pixels[index + 1] = video.pixels[videoIndex + 1];
        pixels[index + 2] = video.pixels[videoIndex + 2];
      }
      pixels[index + 3] = video.pixels[videoIndex + 3];
    }
  }
  updatePixels();
}
