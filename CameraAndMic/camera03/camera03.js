let video;
let prevFrame;
let motionThresholdSlider; // Slider to adjust motion threshold

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  prevFrame = createImage(video.width, video.height, RGB);

  // User control for motion sensitivity
  createP('Motion Sensitivity:');
  motionThresholdSlider = createSlider(0, 100, 25); // Min, Max, Default
}

function draw() {
  background(0);

  video.loadPixels();
  prevFrame.loadPixels();

  loadPixels();

  for (let x = 0; x < video.width; x++) {
    for (let y = 0; y < video.height; y++) {
      let index = (x + y * width) * 4;
      let r1 = video.pixels[index + 0];
      let g1 = video.pixels[index + 1];
      let b1 = video.pixels[index + 2];
      let r2 = prevFrame.pixels[index + 0];
      let g2 = prevFrame.pixels[index + 1];
      let b2 = prevFrame.pixels[index + 2];

      let diff = dist(r1, g1, b1, r2, g2, b2);

      if (diff > motionThresholdSlider.value()) {
        // Visual effect for motion
        pixels[index + 0] = 255; // Red
        pixels[index + 1] = 0;   // Green
        pixels[index + 2] = 0;   // Blue
        pixels[index + 3] = 255; // Alpha
      } else {
        // No significant motion detected
        pixels[index + 0] = r1;
        pixels[index + 1] = g1;
        pixels[index + 2] = b1;
        pixels[index + 3] = 255; // Alpha
      }
    }
  }

  updatePixels();

  // Store the current frame for the next draw cycle
  prevFrame.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height);
}
