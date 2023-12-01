let video;
let effectRadiusSlider, effectIntensitySlider;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1); // Ensures consistent pixel density across devices
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide(); // Hide the HTML element of the video to only show in canvas

  // User Controls
  createP('Effect Radius:');
  effectRadiusSlider = createSlider(0, 200, 50); // Min, Max, Default
  createP('Effect Intensity:');
  effectIntensitySlider = createSlider(0, 255, 100); // Min, Max, Default
}

function draw() {
  video.loadPixels(); // Load video pixels for manipulation

  // Create a new pixel array for canvas
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let d = dist(x, y, mouseX, mouseY); // Distance from cursor

      // Apply the effect based on cursor proximity
      if (d < effectRadiusSlider.value()) {
        pixels[index] = video.pixels[index] + effectIntensitySlider.value();
        pixels[index + 1] = video.pixels[index + 1] - effectIntensitySlider.value();
        pixels[index + 2] = video.pixels[index + 2] * 1.5;
      } else {
        // Copy the original video pixel
        pixels[index] = video.pixels[index];
        pixels[index + 1] = video.pixels[index + 1];
        pixels[index + 2] = video.pixels[index + 2];
      }
      pixels[index + 3] = video.pixels[index + 3]; // Copy alpha channel
    }
  }
  updatePixels(); // Update the canvas with the new pixel array
}
